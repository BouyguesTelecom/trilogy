import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const datePickerStories = [
  { id: 'components-datepicker--default', name: 'Default' },
  { id: 'components-datepicker--disabled', name: 'Disabled' },
  { id: 'components-datepicker--required', name: 'Required' },
] as const

for (const story of datePickerStories) {
  test(`DatePicker prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
