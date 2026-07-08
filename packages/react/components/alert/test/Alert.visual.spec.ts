import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const alertStories = [
  { id: 'components-alert--playground', name: 'Playground' },
  { id: 'components-alert--all-statuses', name: 'All statuses' },
  { id: 'components-alert--toaster-alert', name: 'Toaster alert' },
] as const

for (const story of alertStories) {
  test(`Alert prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
