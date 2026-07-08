import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const linkStories = [
  { id: 'components-link--default', name: 'Default' },
  { id: 'components-link--with-icon', name: 'With icon' },
  { id: 'components-link--inverted', name: 'Inverted' },
  { id: 'components-link--small', name: 'Small' },
  { id: 'components-link--blank-target', name: 'Blank target' },
  { id: 'components-link--router-link-mode', name: 'Router link mode' },
  { id: 'components-link--playground', name: 'Playground' },
] as const

for (const story of linkStories) {
  test(`Link prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
