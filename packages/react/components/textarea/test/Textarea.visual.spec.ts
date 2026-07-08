import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const textareaStories = [
  { id: 'components-textarea--default', name: 'Default' },
  { id: 'components-textarea--with-help', name: 'With help' },
  { id: 'components-textarea--error-state', name: 'Error state' },
  { id: 'components-textarea--disabled', name: 'Disabled' },
  { id: 'components-textarea--with-icons', name: 'With icons' },
  { id: 'components-textarea--with-counter', name: 'With counter' },
  { id: 'components-textarea--required', name: 'Required' },
  { id: 'components-textarea--playground', name: 'Playground' },
] as const

for (const story of textareaStories) {
  test(`Textarea prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}