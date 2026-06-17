import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const imageStories = [
  { id: 'components-image--default', name: 'Default' },
  { id: 'components-image--circled', name: 'Circled' },
  { id: 'components-image--rounded', name: 'Rounded' },
  { id: 'components-image--small', name: 'Small' },
] as const

for (const story of imageStories) {
  test(`Image prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
