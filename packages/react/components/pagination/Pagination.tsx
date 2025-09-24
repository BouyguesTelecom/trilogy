import { Icon, IconName } from '@/components/icon'
import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/index'
import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { ComponentName } from '../enumsComponentsName'
import { Pager } from './PaginationEnum'
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

    const prevCurrentPage = useRef<number>(currentPage)
    const pager = React.useMemo<Pager>(() => {
      // Calculate total pages

      let startPage = 1
      let endPage = 5

      if (length <= 5) {
        // less than pageSize(default is 5) total pages so show all
        startPage = 1
        endPage = length
      } else {
        // more than 3 total pages so calculate start and end pages
        if (currentPage <= 3) {
          startPage = 1
          endPage = 4
        } else if (currentPage + 3 >= length) {
          startPage = length - 3
          endPage = length
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
        length,
        endPage,
        pages,
      }
    }, [currentPage, length])

    useEffect(() => {
      if (onClick && prevCurrentPage.current !== pager.currentPage) {
        onClick(pager)
      }
      setCurrentPage(pager.currentPage)
      prevCurrentPage.current = pager.currentPage
    }, [pager.currentPage])

    useEffect(() => {
      setCurrentPage(defaultPage)
    }, [defaultPage])

    return (
      <nav ref={ref} id={id} className={classes} {...others}>
        <a
          className={hashClass(styled, clsx('pagination-previous'))}
          {...(currentPage === 1 ? { 'aria-disabled': true } : {})}
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
            <li key={pageNumber}>
              <a
                className={hashClass(styled, clsx('pagination-link'))}
                {...(currentPage === pageNumber ? { 'aria-current': true } : {})}
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
          {!pager.pages.includes(length) && (
            <li>
              <span className={hashClass(styled, clsx('pagination-ellipsis'))}>…</span>
            </li>
          )}
        </ul>
        <a
          className={hashClass(styled, clsx('pagination-next'))}
          {...(currentPage === Math.max(length) ? { 'aria-disabled': true } : {})}
          onClick={() => {
            if (currentPage !== Math.max(length)) {
              setCurrentPage(currentPage + 1)
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
