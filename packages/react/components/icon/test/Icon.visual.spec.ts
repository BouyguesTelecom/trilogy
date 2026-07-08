import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const iconStories = [
  { id: 'components-icon--default', name: 'Default' },
  { id: 'components-icon--circled', name: 'Circled' },
  { id: 'components-icon--skeleton', name: 'Skeleton' },
  { id: 'components-icon--small', name: 'Small' },
] as const

for (const story of iconStories) {
  test(`Icon prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
