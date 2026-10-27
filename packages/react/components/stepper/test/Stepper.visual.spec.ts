import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const stepperStories = [
  { id: 'components-stepper--default', name: 'Default' },
  { id: 'components-stepper--all-done', name: 'All done' },
  { id: 'components-stepper--with-error', name: 'With error' },
  { id: 'components-stepper--first-step', name: 'First step' },
  { id: 'components-stepper--playground', name: 'Playground' },
] as const

for (const story of stepperStories) {
  test(`Stepper prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}