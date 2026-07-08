import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const heroStories = [
  { id: 'components-hero--default', name: 'Default' },
  { id: 'components-hero--background-image', name: 'BackgroundImage' },
  { id: 'components-hero--overlapped', name: 'Overlapped' },
  { id: 'components-hero--background-color', name: 'BackgroundColor' },
] as const

for (const story of heroStories) {
  test(`Hero prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
