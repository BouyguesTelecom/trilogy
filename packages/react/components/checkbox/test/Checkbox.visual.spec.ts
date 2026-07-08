import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const checkboxStories = [
  { id: 'components-checkbox--default', name: 'Default' },
  { id: 'components-checkbox--checked', name: 'Checked' },
  { id: 'components-checkbox--disabled', name: 'Disabled' },
  { id: 'components-checkbox--with-checkbox-list', name: 'With checkbox list' },
] as const

for (const story of checkboxStories) {
  test(`Checkbox prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
