import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const buttonStories = [
  { id: 'components-button--default', name: 'Default' },
  { id: 'components-button--variants', name: 'Variants' },
  { id: 'components-button--loading', name: 'Loading' },
  { id: 'components-button--disabled', name: 'Disabled' },
] as const

for (const story of buttonStories) {
  test(`Button prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
