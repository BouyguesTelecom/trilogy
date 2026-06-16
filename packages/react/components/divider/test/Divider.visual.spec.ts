import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const dividerStories = [
  { id: 'components-divider--default', name: 'Default' },
  { id: 'components-divider--with-icon', name: 'With icon' },
  { id: 'components-divider--unboxed', name: 'Unboxed' },
] as const

for (const story of dividerStories) {
  test(`Divider prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
