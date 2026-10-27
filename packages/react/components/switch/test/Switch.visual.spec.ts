import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const switchStories = [
  { id: 'components-switch--default', name: 'Default' },
  { id: 'components-switch--checked', name: 'Checked' },
  { id: 'components-switch--disabled', name: 'Disabled' },
  { id: 'components-switch--disabled-checked', name: 'Disabled checked' },
  { id: 'components-switch--reversed', name: 'Reversed' },
  { id: 'components-switch--full-width', name: 'Full width' },
  { id: 'components-switch--error-state', name: 'Error state' },
  { id: 'components-switch--playground', name: 'Playground' },
] as const

for (const story of switchStories) {
  test(`Switch prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}