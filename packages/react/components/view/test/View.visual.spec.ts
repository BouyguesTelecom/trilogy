import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const viewStories = [
  { id: 'components-view--default', name: 'Default' },
  { id: 'components-view--flex-layout', name: 'Flex layout' },
  { id: 'components-view--colored', name: 'Colored' },
  { id: 'components-view--playground', name: 'Playground' },
] as const

for (const story of viewStories) {
  test(`View prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story, waitForImages: true })
  })
}