import { Pagination } from '@trilogy-ds/react/lib/components/pagination'

export default function PaginationSSR() {
  return (
    <div>
      <main>
        <Pagination length={5} href={(pageNumber) => `/page/${pageNumber}`} />
        <Pagination length={70} />
        <Pagination length={7} defaultPage={2} />
        <Pagination length={3} defaultPage={2} />
      </main>
    </div>
  )
}
