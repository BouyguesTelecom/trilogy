import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const segmentControlStories = [
  { id: 'components-segment-control--default', name: 'Default' },
  { id: 'components-segment-control--centered', name: 'Centered' },
  { id: 'components-segment-control--active-second', name: 'Active second' },
  { id: 'components-segment-control--with-disabled-item', name: 'With disabled item' },
  { id: 'components-segment-control--playground', name: 'Playground' },
] as const

for (const story of segmentControlStories) {
  test(`SegmentControl prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}