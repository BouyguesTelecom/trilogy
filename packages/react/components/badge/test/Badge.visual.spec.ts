import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const badgeStories = [
  { id: 'components-badge--default', name: 'Default' },
  { id: 'components-badge--variants', name: 'Variants' },
  { id: 'components-badge--with-status', name: 'With status' },
] as const

for (const story of badgeStories) {
  test(`Badge prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
