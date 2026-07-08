import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const modalStories = [
  { id: 'components-modal--default', name: 'Default' },
  { id: 'components-modal--panel', name: 'Panel' },
  { id: 'components-modal--without-footer', name: 'Without footer' },
  { id: 'components-modal--un-closable', name: 'Un closable' },
  { id: 'components-modal--playground', name: 'Playground' },
] as const

for (const story of modalStories) {
  test(`Modal prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
