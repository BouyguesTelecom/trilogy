import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const priceStories = [
  { id: 'components-price--default', name: 'Default' },
  { id: 'components-price--with-old-amount', name: 'With old amount' },
  { id: 'components-price--hidden-cents', name: 'Hidden cents' },
  { id: 'components-price--with-overline-and-mention', name: 'With overline and mention' },
  { id: 'components-price--inverted', name: 'Inverted' },
  { id: 'components-price--centered-large', name: 'Centered large' },
  { id: 'components-price--playground', name: 'Playground' },
] as const

for (const story of priceStories) {
  test(`Price prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
