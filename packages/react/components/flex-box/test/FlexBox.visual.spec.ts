import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const flexBoxStories = [
  { id: 'components-flex-box--default', name: 'Default' },
  { id: 'components-flex-box--column-layout', name: 'Column layout' },
  { id: 'components-flex-box--wrapped', name: 'Wrapped' },
  { id: 'components-flex-box--narrow-items', name: 'Narrow items' },
] as const

for (const story of flexBoxStories) {
  test(`FlexBox prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}