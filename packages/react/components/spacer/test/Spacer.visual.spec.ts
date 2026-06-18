import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const spacerStories = [
  { id: 'components-spacer--default', name: 'Default' },
  { id: 'components-spacer--horizontal', name: 'Horizontal' },
  { id: 'components-spacer--large', name: 'Large' },
  { id: 'components-spacer--playground', name: 'Playground' },
] as const

for (const story of spacerStories) {
  test(`Spacer prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}