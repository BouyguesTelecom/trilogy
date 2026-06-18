import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const stickerStories = [
  { id: 'components-sticker--default', name: 'Default' },
  { id: 'components-sticker--small', name: 'Small' },
  { id: 'components-sticker--outlined', name: 'Outlined' },
  { id: 'components-sticker--with-icon', name: 'With icon' },
  { id: 'components-sticker--playground', name: 'Playground' },
] as const

for (const story of stickerStories) {
  test(`Sticker prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}