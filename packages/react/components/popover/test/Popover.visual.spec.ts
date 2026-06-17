import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const popoverStories = [
  { id: 'components-popover--default', name: 'Default' },
  { id: 'components-popover--left', name: 'Left' },
  { id: 'components-popover--right', name: 'Right' },
  { id: 'components-popover--arrow-start', name: 'Arrow start' },
  { id: 'components-popover--arrow-end', name: 'Arrow end' },
  { id: 'components-popover--inactive', name: 'Inactive' },
  { id: 'components-popover--playground', name: 'Playground' },
] as const

for (const story of popoverStories) {
  test(`Popover prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
