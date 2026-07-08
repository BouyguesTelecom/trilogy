import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const promptStories = [
  { id: 'components-prompt--default', name: 'Default' },
  { id: 'components-prompt--disabled', name: 'Disabled' },
  { id: 'components-prompt--read-only', name: 'Read only' },
  { id: 'components-prompt--streaming', name: 'Streaming' },
  { id: 'components-prompt--listening', name: 'Listening' },
  { id: 'components-prompt--with-value', name: 'With value' },
  { id: 'components-prompt--playground', name: 'Playground' },
] as const

for (const story of promptStories) {
  test(`Prompt prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
