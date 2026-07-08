import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const sectionStories = [
  { id: 'components-section--default', name: 'Default' },
  { id: 'components-section--colored', name: 'Colored' },
  { id: 'components-section--with-background-image', name: 'With background image' },
  { id: 'components-section--playground', name: 'Playground' },
] as const

for (const story of sectionStories) {
  test(`Section prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story, waitForImages: true })
  })
}