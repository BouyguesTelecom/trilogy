import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const tableStories = [
  { id: 'components-table--default', name: 'Default' },
  { id: 'components-table--striped', name: 'Striped' },
  { id: 'components-table--compact', name: 'Compact' },
  { id: 'components-table--border-all', name: 'Border all' },
  { id: 'components-table--border-inner', name: 'Border inner' },
  { id: 'components-table--border-lines', name: 'Border lines' },
  { id: 'components-table--playground', name: 'Playground' },
] as const

for (const story of tableStories) {
  test(`Table prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}