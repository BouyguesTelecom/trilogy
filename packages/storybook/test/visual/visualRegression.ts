import { expect, Page, TestInfo } from '@playwright/test'
import { mkdtemp, writeFile } from 'fs/promises'
import { tmpdir } from 'os'
import { join } from 'path'
import pixelmatch from 'pixelmatch'
import { PNG } from 'pngjs'

const PROD_BASE_URL = (process.env.STORYBOOK_PROD_URL ?? 'https://trilogy.design/storybook').replace(/\/$/, '')
const MAX_DIFF_RATIO = Number(process.env.VISUAL_MAX_DIFF_RATIO ?? '0.001')
const FIXED_NOW = Number(process.env.VISUAL_FIXED_NOW ?? '1760572800000')

export type VisualStory = {
  id: string
  name: string
}

export const waitForStoryReady = async (page: Page) => {
  await page.locator('#storybook-root').waitFor()
  await page.evaluate(async () => {
    if (document.fonts?.ready) {
      await document.fonts.ready
    }
  })

  await page.waitForLoadState('networkidle')
  await page.evaluate(async () => {
    const imageElements = Array.from(document.querySelectorAll('img')) as HTMLImageElement[]

    await Promise.all(
      imageElements.map(async (img) => {
        if (img.complete && img.naturalWidth > 0) {
          return
        }

        try {
          if (typeof img.decode === 'function') {
            await img.decode()
            return
          }
        } catch {
          // Ignore decode failures, load/error listeners below will settle the wait.
        }

        await new Promise<void>((resolve) => {
          const settle = () => resolve()
          img.addEventListener('load', settle, { once: true })
          img.addEventListener('error', settle, { once: true })
          setTimeout(settle, 3000)
        })
      }),
    )
  })
}

const freezeTime = async (page: Page) => {
  await page.addInitScript(
    ({ fixedNow }) => {
      const OriginalDate = Date

      class FixedDate extends OriginalDate {
        constructor(...args: ConstructorParameters<typeof Date>) {
          if (args.length === 0) {
            super(fixedNow)
            return
          }

          super(...args)
        }

        static now() {
          return fixedNow
        }
      }

      // Keep static Date APIs intact for app code that relies on them.
      FixedDate.parse = OriginalDate.parse
      FixedDate.UTC = OriginalDate.UTC

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(window as any).Date = FixedDate
    },
    { fixedNow: FIXED_NOW },
  )
}

const writeAndAttachScreenshot = async (
  path: string,
  attachmentName: string,
  buffer: Buffer,
  testInfo: TestInfo,
): Promise<void> => {
  await writeFile(path, new Uint8Array(buffer))
  await testInfo.attach(attachmentName, { path, contentType: 'image/png' })
}

export const expectStoryToMatchProd = async ({
  page,
  testInfo,
  story,
  maxDiffRatio,
}: {
  page: Page
  testInfo: TestInfo
  story: VisualStory
  maxDiffRatio?: number
}): Promise<void> => {
  try {
    await freezeTime(page)
    const effectiveMaxDiffRatio = maxDiffRatio ?? MAX_DIFF_RATIO

    const prodStoryUrl = `${PROD_BASE_URL}/iframe.html?id=${story.id}&viewMode=story`
    const localStoryUrl = `/iframe.html?id=${story.id}&viewMode=story`
    const screenshotDir = await mkdtemp(join(tmpdir(), 'trilogy-visual-'))
    const prodPath = join(screenshotDir, `${story.id}-prod.png`)
    const localPath = join(screenshotDir, `${story.id}-local.png`)
    const diffPath = join(screenshotDir, `${story.id}-diff.png`)

    await page.goto(prodStoryUrl)
    await waitForStoryReady(page)
    const prodBuffer = await page.locator('#storybook-root').screenshot({
      caret: 'hide',
      animations: 'disabled',
    })

    await page.goto(localStoryUrl)
    await waitForStoryReady(page)
    const localBuffer = await page.locator('#storybook-root').screenshot({
      caret: 'hide',
      animations: 'disabled',
    })

    const prodPng = PNG.sync.read(prodBuffer)
    const localPng = PNG.sync.read(localBuffer)

    const sizeMismatch = prodPng.width !== localPng.width || prodPng.height !== localPng.height

    if (sizeMismatch) {
      await writeAndAttachScreenshot(prodPath, `${story.id}-prod.png`, prodBuffer, testInfo)
      await writeAndAttachScreenshot(localPath, `${story.id}-local.png`, localBuffer, testInfo)

      expect(
        { width: localPng.width, height: localPng.height },
        `Screenshot size mismatch for ${story.id} between prod and local`,
      ).toEqual({ width: prodPng.width, height: prodPng.height })
    }

    const diffPng = new PNG({ width: localPng.width, height: localPng.height })
    const mismatchPixels = pixelmatch(prodPng.data, localPng.data, diffPng.data, localPng.width, localPng.height, {
      threshold: 0.1,
    })

    const totalPixels = localPng.width * localPng.height
    const diffRatio = mismatchPixels / totalPixels

    if (diffRatio > effectiveMaxDiffRatio) {
      const diffBuffer = PNG.sync.write(diffPng)

      await writeAndAttachScreenshot(prodPath, `${story.id}-prod.png`, prodBuffer, testInfo)
      await writeAndAttachScreenshot(localPath, `${story.id}-local.png`, localBuffer, testInfo)
      await writeAndAttachScreenshot(diffPath, `${story.id}-diff.png`, diffBuffer, testInfo)

      expect(
        diffRatio,
        `Visual diff too high for ${story.id}. ratio=${diffRatio.toFixed(6)} max=${effectiveMaxDiffRatio}`,
      ).toBeLessThanOrEqual(effectiveMaxDiffRatio)
    }
  } catch (error) {
    const failureBuffer = await page.screenshot({ fullPage: true })
    const failurePath = join(await mkdtemp(join(tmpdir(), 'trilogy-visual-')), `${story.id}-failure.png`)

    await writeAndAttachScreenshot(failurePath, `${story.id}-failure.png`, failureBuffer, testInfo)

    throw error
  }
}
