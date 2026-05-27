import { expect, Page, test } from '@playwright/test'
import { mkdtemp, writeFile } from 'fs/promises'
import { tmpdir } from 'os'
import { join } from 'path'
import pixelmatch from 'pixelmatch'
import { PNG } from 'pngjs'

const PROD_BASE_URL = (process.env.STORYBOOK_PROD_URL ?? 'https://trilogy.design/storybook').replace(/\/$/, '')
const MAX_DIFF_RATIO = Number(process.env.VISUAL_MAX_DIFF_RATIO ?? '0.001')

const accordionStories = [
  { id: 'components-accordion--default', name: 'Default' },
  { id: 'components-accordion--open-by-default', name: 'Open by default' },
  { id: 'components-accordion--disabled', name: 'Disabled' },
  { id: 'components-accordion--multiple-items', name: 'Multiple items' },
] as const

const waitForStoryReady = async (page: Page) => {
  await page.locator('#storybook-root').waitFor()
  await page.evaluate(async () => {
    if (document.fonts?.ready) {
      await document.fonts.ready
    }
  })
}

for (const story of accordionStories) {
  test(`Accordion prod-local - ${story.name}`, async ({ page }, testInfo) => {
    try {
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
        await writeFile(prodPath, new Uint8Array(prodBuffer))
        await writeFile(localPath, new Uint8Array(localBuffer))
        await testInfo.attach(`${story.id}-prod.png`, { path: prodPath, contentType: 'image/png' })
        await testInfo.attach(`${story.id}-local.png`, { path: localPath, contentType: 'image/png' })

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

      if (diffRatio > MAX_DIFF_RATIO) {
        const diffBuffer = PNG.sync.write(diffPng)
        await writeFile(prodPath, new Uint8Array(prodBuffer))
        await writeFile(localPath, new Uint8Array(localBuffer))
        await writeFile(diffPath, new Uint8Array(diffBuffer))
        await testInfo.attach(`${story.id}-prod.png`, { path: prodPath, contentType: 'image/png' })
        await testInfo.attach(`${story.id}-local.png`, { path: localPath, contentType: 'image/png' })
        await testInfo.attach(`${story.id}-diff.png`, { path: diffPath, contentType: 'image/png' })

        expect(
          diffRatio,
          `Visual diff too high for ${story.id}. ratio=${diffRatio.toFixed(6)} max=${MAX_DIFF_RATIO}`,
        ).toBeLessThanOrEqual(MAX_DIFF_RATIO)
      }
    } catch (error) {
      const failureBuffer = await page.screenshot({ fullPage: true })
      const failurePath = join(await mkdtemp(join(tmpdir(), 'trilogy-visual-')), `${story.id}-failure.png`)
      await writeFile(failurePath, new Uint8Array(failureBuffer))
      await testInfo.attach(`${story.id}-failure.png`, { path: failurePath, contentType: 'image/png' })

      throw error
    }
  })
}
