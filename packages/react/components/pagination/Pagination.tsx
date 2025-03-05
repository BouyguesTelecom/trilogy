import { Icon, IconName } from '@/components/icon'
import { usePagination } from '@/components/pagination/hooks/usePagination'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { PaginationProps, PaginationRef } from './PaginationProps'

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
const Pagination = React.forwardRef<PaginationRef, PaginationProps>(
  ({ className, id, length, defaultPage = 1, onClick, href, ...others }, ref): JSX.Element => {
    const classes = hashClass(clsx('pagination', className))

    const { currentPage, handleClickNext, handleClickPage, handleClickPrev, pager } = usePagination({
      defaultPage,
      onClick,
      length,
    })

    return (
      <nav ref={ref} id={id} className={classes} {...others}>
        <a
          className={hashClass(clsx('pagination-previous'))}
          {...(currentPage === 1 ? { 'aria-disabled': true } : {})}
          onClick={handleClickPrev}
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
            <li key={pageNumber}>
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
          {!pager.pages.includes(length) && (
            <li>
              <span className={hashClass(clsx('pagination-ellipsis'))}>…</span>
            </li>
          )}
        </ul>
        <a
          className={hashClass(clsx('pagination-next'))}
          {...(currentPage === Math.max(length) ? { 'aria-disabled': true } : {})}
          onClick={handleClickNext}
          href={href?.(currentPage + 1)}
        >
          <Icon name={IconName.ARROW_RIGHT} />
        </a>
      </nav>
    )
  },
)

Pagination.displayName = ComponentName.Pagination
export default Pagination
