import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const titleStories = [
  { id: 'components-title--default', name: 'Default' },
  { id: 'components-title--subtitle', name: 'Subtitle' },
  { id: 'components-title--overline', name: 'Overline' },
  { id: 'components-title--colored', name: 'Colored' },
  { id: 'components-title--playground', name: 'Playground' },
] as const

for (const story of titleStories) {
  test(`Title prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}