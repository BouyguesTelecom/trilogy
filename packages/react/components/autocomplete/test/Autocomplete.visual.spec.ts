import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const autocompleteStories = [
  { id: 'components-autocomplete--custom-data', name: 'Custom data' },
  { id: 'components-autocomplete--with-get-suggestions', name: 'With get suggestions' },
] as const

for (const story of autocompleteStories) {
  test(`Autocomplete prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
