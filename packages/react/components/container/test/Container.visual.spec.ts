import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const containerStories = [
  { id: 'components-container--default', name: 'Default' },
  { id: 'components-container--medium', name: 'Medium' },
  { id: 'components-container--with-content', name: 'With content' },
] as const

for (const story of containerStories) {
  test(`Container prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
