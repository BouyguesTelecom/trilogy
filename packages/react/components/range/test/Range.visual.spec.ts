import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const rangeStories = [
  { id: 'components-range--default', name: 'Default' },
  { id: 'components-range--simple', name: 'Simple' },
  { id: 'components-range--with-gap', name: 'With gap' },
  { id: 'components-range--playground', name: 'Playground' },
] as const

for (const story of rangeStories) {
  test(`Range prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
