import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const flexBoxStories = [
  { id: 'components-flexbox--default', name: 'Default' },
  { id: 'components-flexbox--column-layout', name: 'Column layout' },
  { id: 'components-flexbox--wrapped', name: 'Wrapped' },
  { id: 'components-flexbox--narrow-items', name: 'Narrow items' },
] as const

for (const story of flexBoxStories) {
  test(`FlexBox prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}