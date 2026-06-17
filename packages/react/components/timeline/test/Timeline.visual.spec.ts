import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const timelineStories = [
  { id: 'components-timeline--default', name: 'Default' },
  { id: 'components-timeline--horizontal', name: 'Horizontal' },
  { id: 'components-timeline--all-done', name: 'All done' },
  { id: 'components-timeline--with-cancellation', name: 'With cancellation' },
  { id: 'components-timeline--playground', name: 'Playground' },
] as const

for (const story of timelineStories) {
  test(`Timeline prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}