import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const textStories = [
  { id: 'components-text--default', name: 'Default' },
  { id: 'components-text--emphasis', name: 'Emphasis' },
  { id: 'components-text--colored', name: 'Colored' },
  { id: 'components-text--clamped', name: 'Clamped' },
  { id: 'components-text--playground', name: 'Playground' },
] as const

for (const story of textStories) {
  test(`Text prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}