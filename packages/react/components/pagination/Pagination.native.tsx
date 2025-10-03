import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName, IconSize } from '@/components/icon/index.native'
import { Text } from '@/components/text/index.native'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color/index.native'
import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Pager } from './PaginationEnum'
import { PaginationNativeRef, PaginationProps } from './PaginationProps'

/**
 * Pagination Component
 * @param length {number} Number of pages
 * @param defaultPage {number} Current default active page (default is 1)
 * @param pageSize {number} Element per page (default is 10)
 * @param onClick {Function} Return pagination object
 */
const Pagination = React.forwardRef<PaginationNativeRef, PaginationProps>(
  ({ length, defaultPage = 1, onClick, ...others }, ref): JSX.Element => {
    const [currentPage, setCurrentPage] = useState<number>(defaultPage)
    const [arrayPage] = useState<Array<number>>(Array.from(Array(length + 1).keys()))
    const prevCurrentPage = useRef<number>(currentPage)

    const [pager, setPager] = useState<Pager>({
      currentPage: currentPage,
      length: length,
      endPage: length + 1,
      pages: arrayPage,
    })

    useEffect(() => {
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
          endPage = 5
        } else if (currentPage + 3 >= length) {
          startPage = length - 4
          endPage = length
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
        length,
        endPage,
        pages,
      })
    }, [currentPage, length])

    useEffect(() => {
      if (onClick && prevCurrentPage.current !== currentPage) {
        onClick(pager)
      }
    }, [currentPage])

    const styles = StyleSheet.create({
      container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      text: {
        color: getColorStyle(TrilogyColor.FONT),
        alignSelf: 'center',
        lineHeight: 0,
      },
      textCurrent: {
        color: getColorStyle(TrilogyColor.BACKGROUND),
        alignSelf: 'center',
        lineHeight: 0,
      },
      rounded: {
        backgroundColor: getColorStyle(TrilogyColor.MAIN),
        width: 26,
        height: 26,
        borderRadius: 26,
        justifyContent: 'center',
      },

      textContainer: {
        backgroundColor: getColorStyle(TrilogyColor.BACKGROUND),
        width: 26,
        height: 26,
        borderRadius: 26,
        justifyContent: 'center',
      },
      currentPage: {
        color: getColorStyle(TrilogyColor.MAIN),
      },
      dotsLeft: {
        color: getColorStyle(TrilogyColor.BACKGROUND),
        marginRight: 12,
      },
      dotsRight: {
        color: getColorStyle(TrilogyColor.BACKGROUND),
        marginRight: -12,
      },
    })

    return (
      <View ref={ref} style={styles.container} {...others}>
        <TouchableOpacity
          onPress={() => {
            if (currentPage !== 1) {
              setCurrentPage(currentPage - 1)
              prevCurrentPage.current = currentPage - 1
            }
          }}
        >
          <Icon name={IconName.ARROW_LEFT} size={IconSize.SMALL} color={TrilogyColor.MAIN} />
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {!pager.pages.includes(1) && (
            <View>
              <Text style={styles.dotsLeft}>…</Text>
            </View>
          )}
          {pager.pages.map((pageNumber) => (
            <View key={pageNumber}>
              <TouchableOpacity
                style={currentPage === pageNumber ? styles.rounded : styles.textContainer}
                onPress={() => {
                  setCurrentPage(pageNumber)
                  prevCurrentPage.current = pageNumber
                }}
              >
                <Text style={currentPage === pageNumber ? styles.textCurrent : styles.text}>{pageNumber}</Text>
              </TouchableOpacity>
            </View>
          ))}
          {!pager.pages.includes(length) && (
            <View style={{ marginRight: 15 }}>
              <Text style={styles.dotsRight}>…</Text>
            </View>
          )}
        </View>
        <TouchableOpacity
          onPress={() => {
            if (currentPage !== Math.max(length)) {
              setCurrentPage(currentPage + 1)
              prevCurrentPage.current = currentPage + 1
            }
          }}
        >
          <Icon name={IconName.ARROW_RIGHT} size={IconSize.SMALL} color={TrilogyColor.MAIN} />
        </TouchableOpacity>
      </View>
    )
  },
)

Pagination.displayName = ComponentName.Pagination

export default Pagination
