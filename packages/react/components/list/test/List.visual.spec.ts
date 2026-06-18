import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const listStories = [
  { id: 'components-list--default', name: 'Default' },
  { id: 'components-list--ordered', name: 'Ordered' },
  { id: 'components-list--with-divider', name: 'With divider' },
  { id: 'components-list--with-icon-and-status', name: 'With icon and status' },
  { id: 'components-list--without-description', name: 'Without description' },
  { id: 'components-list--playground', name: 'Playground' },
] as const

for (const story of listStories) {
  test(`List prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
