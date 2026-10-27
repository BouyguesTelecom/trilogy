import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const rowsStories = [
  { id: 'components-rows--default', name: 'Default' },
  { id: 'components-rows--gapless', name: 'Gapless' },
  { id: 'components-rows--narrow', name: 'Narrow' },
  { id: 'components-rows--playground', name: 'Playground' },
] as const

for (const story of rowsStories) {
  test(`Rows prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}