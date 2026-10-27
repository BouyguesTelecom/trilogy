import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const columnsStories = [
  { id: 'components-columns--default', name: 'Default' },
  { id: 'components-columns--three-equal-columns', name: 'Three equal columns' },
  { id: 'components-columns--multiline', name: 'Multiline' },
] as const

for (const story of columnsStories) {
  test(`Columns prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
