import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const fabStories = [
  { id: 'components-fab--default', name: 'Default' },
  { id: 'components-fab--compact', name: 'Compact' },
  { id: 'components-fab--disabled', name: 'Disabled' },
  { id: 'components-fab--top-left', name: 'TopLeft' },
] as const

for (const story of fabStories) {
  test(`Fab prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
