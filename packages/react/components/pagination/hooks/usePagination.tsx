import { Pager } from '@/components/pagination/PaginationEnum'
import React from 'react'

interface IProps {
  length: number
  defaultPage: number
  onClick?: (pager: Pager) => void
}

export const usePagination = ({ defaultPage, onClick, length }: IProps) => {
  try {
    const [currentPage, setCurrentPage] = React.useState<number>(defaultPage)
    const prevCurrentPage = React.useRef<number>(currentPage)

    const pager = React.useMemo<Pager>(() => {
      return calcPager(currentPage, length)
    }, [currentPage, length])

    const handleClickPrev = React.useCallback(() => {
      if (currentPage !== 1) setCurrentPage(currentPage - 1)
    }, [currentPage])

    const handleClickNext = React.useCallback(() => {
      if (currentPage !== Math.max(length)) setCurrentPage(currentPage + 1)
    }, [currentPage])

    const handleClickPage = React.useCallback((pageNumber: number) => {
      setCurrentPage(pageNumber)
    }, [])

    React.useEffect(() => {
      if (onClick && prevCurrentPage.current !== pager.currentPage) {
        onClick(pager)
      }
      setCurrentPage(pager.currentPage)
      prevCurrentPage.current = pager.currentPage
    }, [pager.currentPage])

    return {
      currentPage,
      handleClickNext,
      handleClickPage,
      handleClickPrev,
      pager,
    }
  } catch {
    return {
      currentPage: defaultPage,
      pager: calcPager(defaultPage, length),
    }
  }
}

const calcPager = (currentPage: number, length: number) => {
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
}
