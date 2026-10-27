import { test } from '@playwright/test'
import { expectStoryToMatchProd } from '@trilogy-ds/storybook/test/visual/visualRegression'

const paginationStories = [
  { id: 'components-pagination--default', name: 'Default' },
  { id: 'components-pagination--default-page-three', name: 'Default page three' },
  { id: 'components-pagination--five-pages', name: 'Five pages' },
  { id: 'components-pagination--with-seo-href', name: 'With seo href' },
  { id: 'components-pagination--playground', name: 'Playground' },
] as const

for (const story of paginationStories) {
  test(`Pagination prod-local - ${story.name}`, async ({ page }, testInfo) => {
    await expectStoryToMatchProd({ page, testInfo, story })
  })
}
