import clsx from 'clsx'
import React from 'react'

import { Icon, IconName } from '@/components/icon'
import { usePagination } from '@/components/pagination/hook/usePagination'
import { PaginationProps } from '@/components/pagination/PaginationProps'
import { hashClass } from '@/helpers/hashClassesHelpers'

/**
 * Pagination Component
 * @param count {number} Number elements
 * @param defaultPage {number} Current default active page (default is 1)
 * @param pageSize {number} Element per page (default is 10)
 * @param onClick {Function} Return pagination object
 * * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes
 * @param href {Function} Function that generates a link for seo bots
 * @param testId {string} Test Id for Test Integration
 */
const Pagination = (
  { className, count = 0, defaultPage = 1, pageSize = 10, onClick, testId, href, ...others }: PaginationProps,
  ref: React.Ref<HTMLCanvasElement>,
): JSX.Element => {
  const { currentPage, pager, handlePrevious, handleNext, handleClickPage } = usePagination({
    defaultPage,
    count,
    pageSize,
    onClick,
  })

  const totalCountPages = count / pageSize
  const classes = hashClass(clsx('pagination', className))

  return (
    <nav data-testid={testId} className={classes} ref={ref} {...others}>
      <a
        className={hashClass(clsx('pagination-previous'))}
        {...(currentPage === 1 ? { 'aria-disabled': true } : {})}
        onClick={handlePrevious}
        href={href?.(currentPage - 1)}
      >
        <Icon name={IconName.ARROW_LEFT} />
      </a>
      <ul className={hashClass(clsx('pagination-list'))}>
        {!pager.pages.includes(1) && (
          <li>
            <span className={hashClass(clsx('pagination-ellipsis'))}>…</span>
          </li>
        )}
        {pager.pages.map((pageNumber) => (
          <li data-testid={`${testId}_${pageNumber}`} key={pageNumber}>
            <a
              className={hashClass(clsx('pagination-link'))}
              {...(currentPage === pageNumber ? { 'aria-current': true } : {})}
              aria-label={`Aller à la page ${pageNumber}`}
              onClick={handleClickPage ? () => handleClickPage(pageNumber) : undefined}
              href={href?.(pageNumber)}
            >
              {pageNumber}
            </a>
          </li>
        ))}
        {!pager.pages.includes(totalCountPages) && (
          <li>
            <span className={hashClass(clsx('pagination-ellipsis'))}>…</span>
          </li>
        )}
      </ul>
      <a
        className={hashClass(clsx('pagination-next'))}
        {...(currentPage === Math.max(pager.totalPages) ? { 'aria-disabled': true } : {})}
        onClick={handleNext}
        href={href?.(currentPage + 1)}
      >
        <Icon name={IconName.ARROW_RIGHT} />
      </a>
    </nav>
  )
}

export default React.forwardRef(Pagination)
