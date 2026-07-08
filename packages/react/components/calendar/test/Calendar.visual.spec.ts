import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const calendarStories = [{ id: 'components-calendar--default', name: 'Default' }] as const

for (const story of calendarStories) {
  test(`Calendar prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
