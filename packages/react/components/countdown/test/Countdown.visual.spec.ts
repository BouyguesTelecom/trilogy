import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const countdownStories = [
  { id: 'components-countdown--default', name: 'Default' },
  { id: 'components-countdown--small', name: 'Small' },
  { id: 'components-countdown--custom-format', name: 'Custom format' },
] as const

for (const story of countdownStories) {
  test(`Countdown prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
