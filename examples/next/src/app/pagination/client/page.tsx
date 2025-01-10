'use client'

import { Pagination } from '@trilogy-ds/react/lib/components/pagination'

export default function PaginationClient() {
  return (
    <div>
      <main>
        <Pagination onClick={(e) => console.log('event', e)} length={5} href={(pageNumber) => `/page/${pageNumber}`} />
        <Pagination onClick={(e) => console.log('event', e)} length={70} />
        <Pagination onClick={(e) => console.log('event', e)} length={7} defaultPage={2} />
        <Pagination onClick={(e) => console.log('event', e)} length={3} defaultPage={2} />
      </main>
    </div>
  )
}
