import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const boxStories = [
  { id: 'components-box--default', name: 'Default' },
  { id: 'components-box--with-header-and-footer', name: 'With header and footer' },
  { id: 'components-box--highlighted', name: 'Highlighted' },
] as const

for (const story of boxStories) {
  test(`Box prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
