import { Icon, IconName } from '@/components/icon'
import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/index'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { ComponentName } from '../enumsComponentsName'
import { PaginationProps, PaginationRef } from './PaginationProps'

/**
 * Pagination Component
 * @param length {number} Number of pages
 * @param defaultPage {number} Current default active page (default is 1)
 * @param onClick {Function} Return pagination object
 * * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional css classes
 * @param href {Function} Function that generates a link for seo bots
 * @param testId {string} Test Id for Test Integration
 */
const Pagination = React.forwardRef<PaginationRef, PaginationProps>(
  ({ className, id, length, defaultPage = 1, onClick, href, ...others }, ref): JSX.Element => {
    const [currentPage, setCurrentPage] = useState<number>(defaultPage)
    const { styled } = useTrilogyContext()
    const classes = hashClass(styled, clsx('pagination', className))

    const getPages = React.useCallback(
      (page: number) => {
        let startPage = 1
        let endPage = 5
        if (length <= 5) {
          startPage = 1
          endPage = length
        } else {
          if (page <= 3) {
            startPage = 1
            endPage = 4
          } else if (page + 3 >= length) {
            startPage = length - 3
            endPage = length
          } else {
            startPage = page - 1
            endPage = page + 1
          }
        }
        const pages = [...Array(endPage + 1 - startPage).keys()].map((i) => startPage + i)
        return {
          endPage,
          pages,
        }
      },
      [length],
    )

    const [pages, setPages] = useState(() => getPages(defaultPage).pages)

    useEffect(() => {
      setCurrentPage(defaultPage)
      setPages(getPages(defaultPage).pages)
    }, [defaultPage])

    return (
      <nav ref={ref} id={id} className={classes} {...others}>
        <a
          className={hashClass(styled, clsx('pagination-previous'))}
          {...(currentPage === 1 ? { 'aria-disabled': true } : {})}
          onClick={(e) => {
            const nextPage = currentPage - 1
            const nextPages = getPages(nextPage)
            if (onClick) onClick(Object.assign(e, nextPages, { currentPage: nextPage, length }))
            if (currentPage !== 1) {
              setCurrentPage(nextPage)
              setPages(nextPages.pages)
            }
          }}
          href={href?.(currentPage - 1)}
        >
          <Icon name={IconName.ARROW_LEFT} />
        </a>
        <ul className={hashClass(styled, clsx('pagination-list'))}>
          {!pages.includes(1) && (
            <li>
              <span className={hashClass(styled, clsx('pagination-ellipsis'))}>…</span>
            </li>
          )}
          {pages.map((pageNumber) => (
            <li key={pageNumber}>
              <a
                className={hashClass(styled, clsx('pagination-link'))}
                {...(currentPage === pageNumber ? { 'aria-current': true } : {})}
                aria-label={`Aller à la page ${pageNumber}`}
                onClick={(e) => {
                  const nextPages = getPages(pageNumber)
                  if (onClick) onClick(Object.assign(e, nextPages, { currentPage: pageNumber, length }))
                  setCurrentPage(pageNumber)
                  setPages(nextPages.pages)
                }}
                href={href?.(pageNumber)}
              >
                {pageNumber}
              </a>
            </li>
          ))}
          {!pages.includes(length) && (
            <li>
              <span className={hashClass(styled, clsx('pagination-ellipsis'))}>…</span>
            </li>
          )}
        </ul>
        <a
          className={hashClass(styled, clsx('pagination-next'))}
          {...(currentPage === Math.max(length) ? { 'aria-disabled': true } : {})}
          onClick={(e) => {
            const nextPage = currentPage + 1
            const nextPages = getPages(nextPage)
            if (onClick) onClick(Object.assign(e, nextPages, { currentPage: nextPage, length }))
            if (currentPage !== Math.max(length)) {
              setCurrentPage(currentPage + 1)
              setPages(nextPages.pages)
            }
          }}
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
