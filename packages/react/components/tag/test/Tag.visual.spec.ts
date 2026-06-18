import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const tagStories = [
  { id: 'components-tag--default', name: 'Default' },
  { id: 'components-tag--success', name: 'Success' },
  { id: 'components-tag--info', name: 'Info' },
  { id: 'components-tag--warning', name: 'Warning' },
  { id: 'components-tag--error', name: 'Error' },
  { id: 'components-tag--small', name: 'Small' },
  { id: 'components-tag--inverted', name: 'Inverted' },
  { id: 'components-tag--with-tag-list', name: 'With tag list' },
  { id: 'components-tag--playground', name: 'Playground' },
] as const

for (const story of tagStories) {
  test(`Tag prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}