import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const breadcrumbStories = [
  { id: 'components-breadcrumb--default', name: 'Default' },
  { id: 'components-breadcrumb--with-clickable-last-item', name: 'With clickable last item' },
  { id: 'components-breadcrumb--short-path', name: 'Short path' },
] as const

for (const story of breadcrumbStories) {
  test(`Breadcrumb prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story, maxDiffRatio: 0.0013 })
  })
}
