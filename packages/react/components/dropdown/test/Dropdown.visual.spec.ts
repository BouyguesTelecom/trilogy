import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const dropdownStories = [
  { id: 'components-dropdown--default-open', name: 'Default open' },
  { id: 'components-dropdown--item-active', name: 'Item active' },
  { id: 'components-dropdown--item-disabled', name: 'Item disabled' },
] as const

for (const story of dropdownStories) {
  test(`Dropdown prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
