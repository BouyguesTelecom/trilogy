import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const radioStories = [
  { id: 'components-radio--default', name: 'Default' },
  { id: 'components-radio--checked', name: 'Checked' },
  { id: 'components-radio--disabled', name: 'Disabled' },
  { id: 'components-radio--read-only', name: 'Read only' },
  { id: 'components-radio--with-radio-list', name: 'With radio list' },
] as const

for (const story of radioStories) {
  test(`Radio prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
