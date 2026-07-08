import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const cardStories = [
  { id: 'components-card--default', name: 'Default' },
  { id: 'components-card--with-image', name: 'With image' },
] as const

for (const story of cardStories) {
  test(`Card prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
