import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const inputStories = [
  { id: 'components-input--default', name: 'Default' },
  { id: 'components-input--search-with-icons', name: 'Search with icons' },
  { id: 'components-input--password-security', name: 'Password security' },
  { id: 'components-input--phone-formatting', name: 'Phone formatting' },
  { id: 'components-input--card-formatting', name: 'Card formatting' },
  { id: 'components-input--read-only', name: 'Read only' },
  { id: 'components-input--email-native-hints', name: 'Email native hints' },
] as const

for (const story of inputStories) {
  test(`Input prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
