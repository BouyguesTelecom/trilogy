import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const accordionStories = [
  { id: 'components-accordion--default', name: 'Default' },
  { id: 'components-accordion--open-by-default', name: 'Open by default' },
  { id: 'components-accordion--disabled', name: 'Disabled' },
  { id: 'components-accordion--multiple-items', name: 'Multiple items' },
] as const

for (const story of accordionStories) {
  test(`Accordion prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
