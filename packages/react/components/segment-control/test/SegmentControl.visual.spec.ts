import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const segmentControlStories = [
  { id: 'components-segmentcontrol--default', name: 'Default' },
  { id: 'components-segmentcontrol--centered', name: 'Centered' },
  { id: 'components-segmentcontrol--active-second', name: 'Active second' },
  { id: 'components-segmentcontrol--with-disabled-item', name: 'With disabled item' },
  { id: 'components-segmentcontrol--playground', name: 'Playground' },
] as const

for (const story of segmentControlStories) {
  test(`SegmentControl prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}