import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const tabsStories = [
  { id: 'components-tabs--default', name: 'Default' },
  { id: 'components-tabs--fullwidth', name: 'Fullwidth' },
  { id: 'components-tabs--small', name: 'Small' },
  { id: 'components-tabs--centered', name: 'Centered' },
  { id: 'components-tabs--second-active', name: 'Second active' },
  { id: 'components-tabs--with-disabled-tab', name: 'With disabled tab' },
  { id: 'components-tabs--playground', name: 'Playground' },
] as const

for (const story of tabsStories) {
  test(`Tabs prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}