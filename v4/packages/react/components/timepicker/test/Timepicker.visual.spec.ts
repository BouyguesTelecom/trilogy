import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const timepickerStories = [
  { id: 'components-timepicker--default', name: 'Default' },
  { id: 'components-timepicker--required', name: 'Required' },
  { id: 'components-timepicker--disabled', name: 'Disabled' },
  { id: 'components-timepicker--step-five', name: 'Step five' },
  { id: 'components-timepicker--playground', name: 'Playground' },
] as const

for (const story of timepickerStories) {
  test(`Timepicker prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}