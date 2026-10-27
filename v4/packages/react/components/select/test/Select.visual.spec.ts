import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const selectStories = [
  { id: 'components-select--default', name: 'Default' },
  { id: 'components-select--custom', name: 'Custom' },
  { id: 'components-select--multiple', name: 'Multiple' },
  { id: 'components-select--error-state', name: 'Error state' },
  { id: 'components-select--disabled', name: 'Disabled' },
  { id: 'components-select--playground', name: 'Playground' },
] as const

for (const story of selectStories) {
  test(`Select prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}