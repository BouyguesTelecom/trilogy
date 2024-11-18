import React from 'react'

import { Pager } from '@/components/pagination/PaginationEnum'

interface IParams {
  defaultPage: number
  count: number
  pageSize: number
  onClick?: (pager: Pager) => void
}

export const usePagination = ({ defaultPage, count, pageSize, onClick }: IParams) => {
  try {
    const [currentPage, setCurrentPage] = React.useState<number>(defaultPage)
    const prevCurrentPage = React.useRef<number>(currentPage)

    const pager = React.useMemo(() => getPager(count, pageSize, currentPage), [currentPage, pageSize, count])

    const handlePrevious = React.useCallback(() => {
      setCurrentPage((prev) => (prev !== 1 ? prev - 1 : prev))
    }, [])

    const handleNext = React.useCallback(() => {
      setCurrentPage((prev) => (prev !== Math.max(pager.totalPages) ? prev + 1 : prev))
    }, [])

    const handleClickPage = React.useCallback((pageNumber: number) => {
      setCurrentPage(pageNumber)
    }, [])

    React.useEffect(() => {
      if (onClick && prevCurrentPage.current !== pager.currentPage) onClick(pager)
      setCurrentPage(pager.currentPage)
      prevCurrentPage.current = pager.currentPage
    }, [pager.currentPage, prevCurrentPage])

    return { currentPage, pager, handlePrevious, handleNext, handleClickPage }
  } catch {
    return {
      currentPage: defaultPage,
      pager: getPager(count, pageSize, defaultPage),
    }
  }
}

const getPager = (count: number, pageSize: number, currentPage: number) => {
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
    totalPages,
    endPage,
    pages,
    pageSize,
  }
}
