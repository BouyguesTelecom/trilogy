import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PaginationProps } from './PaginationProps'
import { Icon, IconName, IconSize } from '../icon'
import { getColorStyle, TrilogyColor } from '../../objects/facets/Color'
import { ComponentName } from '../enumsComponentsName'
import { Pager } from './PaginationEnum'

/**
 * Pagination Component
 * @param count {number} Number elements
 * @param defaultPage {number} Current default active page (default is 1)
 * @param pageSize {number} Element per page (default is 10)
 * @param onClick {Function} Return pagination object
 */
const Pagination = ({ count, defaultPage = 1, pageSize = 10, onClick, ...others }: PaginationProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(defaultPage)
  const [arrayPage] = useState<Array<number>>(Array.from(Array(count + 1).keys()))
  const prevCurrentPage = useRef<number>(currentPage)

  const [pager, setPager] = useState<Pager>({
    currentPage: currentPage,
    pageSize: pageSize,
    totalPages: pageSize,
    endPage: count,
    pages: arrayPage,
  })

  useEffect(() => {
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
        endPage = 5
      } else if (currentPage + 3 >= totalPages) {
        startPage = totalPages - 4
        endPage = totalPages
      } else {
        startPage = currentPage - 2
        endPage = currentPage + 2
      }
    }

    // Create an array of pages
    const pages = [...Array(endPage + 1 - startPage).keys()].map((i) => startPage + i)

    // Set pager object
    setPager({
      currentPage,
      pageSize,
      totalPages,
      endPage,
      pages,
    })
  }, [currentPage, pageSize, count])

  useEffect(() => {
    if (onClick && prevCurrentPage.current !== currentPage) {
      onClick(pager)
    }
  }, [currentPage])

  const totalCountPages = count / pageSize

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 18,
      color: '#333',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '400',
      marginRight: 12,
    },
    textCurrent: {
      fontSize: 18,
      color: getColorStyle(TrilogyColor.WHITE),
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '400',
      // marginRight: 12,
    },
    rounded: {
      backgroundColor: getColorStyle(TrilogyColor.SECONDARY),
      width: 30,
      height: 30,
      borderRadius: 30,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 12,
      marginTop: -3,
    },
    currentPage: {
      fontSize: 18,
      color: getColorStyle(TrilogyColor.SECONDARY),
      fontWeight: '500',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 12,
    },
    dotsLeft: {
      color: '#D1D1D1',
      marginRight: 12,
    },
    dotsRight: {
      color: '#D1D1D1',
      marginRight: -12,
    },
    arrowLeft: {
      marginRight: 7,
    },
    arrowRight: {
      marginLeft: 7,
    },
  })

  return (
    <View style={styles.container} {...others}>
      <TouchableOpacity
        style={{ marginRight: 5 }}
        onPress={() => {
          if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
            prevCurrentPage.current = currentPage - 1
          }
        }}
      >
        {/* {fontsLoaded && ( */}
        <Icon
          style={styles.arrowLeft}
          name={IconName.ARROW_LEFT}
          size={IconSize.SMALL}
          color={TrilogyColor.GREY_DARK}
        />
        {/* )} */}
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        {!pager.pages.includes(1) && (
          <View>
            <Text style={styles.dotsLeft}>…</Text>
          </View>
        )}
        {pager.pages.map((pageNumber) => (
          <View key={pageNumber}>
            <TouchableOpacity
              style={currentPage === pageNumber && styles.rounded}
              onPress={() => {
                setCurrentPage(pageNumber)
                prevCurrentPage.current = pageNumber
              }}
            >
              <Text style={currentPage === pageNumber ? styles.textCurrent : styles.text}>{pageNumber}</Text>
            </TouchableOpacity>
          </View>
        ))}
        {!pager.pages.includes(totalCountPages) && (
          <View style={{ marginRight: 15 }}>
            <Text style={styles.dotsRight}>…</Text>
          </View>
        )}
      </View>
      <TouchableOpacity
        style={{ marginLeft: 5 }}
        onPress={() => {
          if (currentPage !== Math.max(pager.totalPages)) {
            setCurrentPage(currentPage + 1)
            prevCurrentPage.current = currentPage + 1
          }
        }}
      >
        {/* {fontsLoaded && ( */}
        <Icon
          style={styles.arrowRight}
          name={IconName.ARROW_RIGHT}
          size={IconSize.SMALL}
          color={TrilogyColor.GREY_DARK}
        />
        {/* )} */}
      </TouchableOpacity>
    </View>
  )
}

Pagination.displayName = ComponentName.Pagination

export default Pagination
