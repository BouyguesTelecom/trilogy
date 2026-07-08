import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const chipsStories = [
  { id: 'components-chips--default', name: 'Default' },
  { id: 'components-chips--active', name: 'Active' },
  { id: 'components-chips--disabled', name: 'Disabled' },
  { id: 'components-chips--with-chips-list-multiple', name: 'With chips list multiple' },
] as const

for (const story of chipsStories) {
  test(`Chips prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
