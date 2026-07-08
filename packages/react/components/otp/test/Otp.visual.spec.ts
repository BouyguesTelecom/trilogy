import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const otpStories = [
  { id: 'components-otp--default', name: 'Default' },
  { id: 'components-otp--prefilled', name: 'Prefilled' },
  { id: 'components-otp--disabled', name: 'Disabled' },
  { id: 'components-otp--error', name: 'Error' },
  { id: 'components-otp--length-four', name: 'Length four' },
  { id: 'components-otp--playground', name: 'Playground' },
] as const

for (const story of otpStories) {
  test(`Otp prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
