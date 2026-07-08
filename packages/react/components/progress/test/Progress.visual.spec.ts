import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const progressStories = [
  { id: 'components-progress--default', name: 'Default' },
  { id: 'components-progress--warning', name: 'Warning' },
  { id: 'components-progress--small', name: 'Small' },
  { id: 'components-progress--stacked-linear', name: 'Stacked linear' },
  { id: 'components-progress--playground', name: 'Playground' },
] as const

for (const story of progressStories) {
  test(`Progress prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
