import React, { useEffect, useState, useRef } from 'react'
import { is } from '@/services/index'
import { Icon, IconName } from '@/components/icon'
import { PaginationProps } from './PaginationProps'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import { useTrilogyContext } from '@/context'
import { Pager } from './PaginationEnum'

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
const Pagination = ({
  className,
  count,
  defaultPage = 1,
  pageSize = 10,
  onClick,
  testId,
  href,
  ...others
}: PaginationProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(defaultPage)
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('pagination', className))

  const prevCurrentPage = useRef<number>(currentPage)
  const pager = React.useMemo<Pager>(() => {
    // Calculate total pages
    const totalPages = Math.ceil(count / pageSize)

    let startPage = 1
    let endPage = 5

    if (totalPages <= 5) {
      // less than pageSize(default is 5) total pages so show all
      startPage = 1
      endPage = totalPages
    } else {
      // more than 3 total pages so calculate start and end pages
      if (currentPage <= 3) {
        startPage = 1
        endPage = 4
      } else if (currentPage + 3 >= totalPages) {
        startPage = totalPages - 3
        endPage = totalPages
      } else {
        startPage = currentPage - 1
        endPage = currentPage + 1
      }
    }

    // Create an array of pages
    const pages = [...Array(endPage + 1 - startPage).keys()].map((i) => startPage + i)

    // Set pager object
    return {
      currentPage,
      pageSize,
      totalPages,
      endPage,
      pages,
    }
  }, [currentPage, pageSize, count])

  useEffect(() => {
    if (onClick && prevCurrentPage.current !== pager.currentPage) {
      onClick(pager)
    }
    setCurrentPage(pager.currentPage)
    prevCurrentPage.current = pager.currentPage
  }, [pager.currentPage])

  const totalCountPages = count / pageSize

  return (
    <nav data-testid={testId} className={classes} {...others}>
      <a
        className={hashClass(styled, clsx('pagination-previous'))}
        {...(currentPage === 1) ? { 'aria-disabled': true } : {} }
        onClick={() => {
          if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
          }
        }}
        href={href?.(currentPage - 1)}
      >
        <Icon name={IconName.ARROW_LEFT} />
      </a>
      <ul className={hashClass(styled, clsx('pagination-list'))}>
        {!pager.pages.includes(1) && (
          <li>
            <span className={hashClass(styled, clsx('pagination-ellipsis'))}>…</span>
          </li>
        )}
        {pager.pages.map((pageNumber) => (
          <li data-testid={`${testId}_${pageNumber}`} key={pageNumber}>
            <a
              className={hashClass(styled, clsx('pagination-link'))}
              {...(currentPage === pageNumber) ? { 'aria-current': true } : {} }
              aria-label={`Aller à la page ${pageNumber}`}
              onClick={() => {
                setCurrentPage(pageNumber)
              }}
              href={href?.(pageNumber)}
            >
              {pageNumber}
            </a>
          </li>
        ))}
        {!pager.pages.includes(totalCountPages) && (
          <li>
            <span className={hashClass(styled, clsx('pagination-ellipsis'))}>…</span>
          </li>
        )}
      </ul>
      <a
        className={hashClass(styled, clsx('pagination-next'))}
        {...(currentPage === Math.max(pager.totalPages)) ? { 'aria-disabled': true } : {} }
        onClick={() => {
          if (currentPage !== Math.max(pager.totalPages)) {
            setCurrentPage(currentPage + 1)
          }
        }}
        href={href?.(currentPage + 1)}
      >
        <Icon name={IconName.ARROW_RIGHT} />
      </a>
    </nav>
  )
}

export default Pagination
