import { ColumnsNativeRef, ColumnsProps } from '@/components/columns/ColumnsProps'
import { ColumnsGapValue, GapSize } from '@/components/columns/ColumnsTypes'
import { ColumnsContext, ColumnsContextType } from '@/components/columns/context'
import { ComponentName } from '@/components/enumsComponentsName'
import { Alignable, getAlignStyle } from '@/objects/facets/Alignable'
import React, { useState, useMemo, useCallback } from 'react'
import { Dimensions, LayoutChangeEvent, ScrollView, StyleSheet, View } from 'react-native'

const staticStyles = StyleSheet.create({
  centered: {
    justifyContent: 'center',
  },
  multiline: {
    flexWrap: 'wrap',
  },
  mobile: {
    flexDirection: 'column',
  },
})

/**
 * Columns Component
 * @param scrollable {boolean} Make colomns scrollable to vertical
 * @param children {React.ReactNode}
 * @param marginless {boolean} delete margin
 * @param testId {string} Test Id for Test Integration
 * @param fullBleed {boolean} Full Bleed Columns
 * @param fullheight {boolean} Full Height Columns
 * @param gap {GapSize} Gap between columns
 * @param align {JustifyProps} Horizontal alignment of columns
 * @param verticalAlign {AlignProps} Vertical alignment of columns
 * @param id {string} Custom id attribute
 */
const Columns = React.forwardRef<ColumnsNativeRef, ColumnsProps>(
  ({ children, align, gap, verticalAlign, fullBleed, scrollable, multiline, fullheight, testId, ...others }, ref): JSX.Element => {
    const [width, setWidth] = useState(0)
    const [enlarge, setEnlarge] = useState(0)

    const onLayoutHandler = useCallback(
      (event: LayoutChangeEvent) => {
        if (!width) {
          const { width } = event.nativeEvent.layout
          if (fullBleed) {
            setEnlarge((Dimensions.get('screen').width - width) / 2)
          }
          setWidth(width)
        }
      },
      [fullBleed, width],
    )

    const realGap = useMemo(() => (typeof gap === 'undefined' && 16) || ColumnsGapValue[gap as GapSize], [gap])

    const dynamicStyles = useMemo(() => ({
      columns: {
        width: fullBleed && width ? width + enlarge * 2 : '100%' as const,
        marginHorizontal: -enlarge,
        paddingHorizontal: enlarge,
        flexDirection: 'row' as const,
        gap: realGap,
        height: fullheight ? '100%' as const : 'auto' as const
      },
      verticalAlign: {
        alignItems: getAlignStyle(verticalAlign) as 'flex-start' | 'flex-end' | 'center' | 'stretch',
      },
      scrollContainer: {
        paddingHorizontal: enlarge,
        gap: realGap,
      },
    }), [fullBleed, width, enlarge, realGap, fullheight, verticalAlign])

    const contextValue = useMemo((): ColumnsContextType => ({
      width,
      realGap,
      scrollable: scrollable || false,
      childrensLength: React.Children.count(children),
    }), [width, realGap, scrollable, children])

    return (
      <ColumnsContext.Provider value={contextValue}>
        {!scrollable && (
          <View
            testID={testId}
            ref={ref}
            onLayout={onLayoutHandler}
            style={[
              dynamicStyles.columns,
              multiline && staticStyles.multiline,
              align === Alignable.ALIGNED_CENTER && staticStyles.centered,
              verticalAlign && dynamicStyles.verticalAlign,
            ]}
            {...others}
          >
            {children}
          </View>
        )}

        {scrollable && (
          <View
            onLayout={onLayoutHandler}
            style={{
              marginHorizontal: -enlarge,
            }}
          >
            <ScrollView
              horizontal
              contentContainerStyle={dynamicStyles.scrollContainer}
              showsHorizontalScrollIndicator={false}
            >
              {children}
            </ScrollView>
          </View>
        )}
      </ColumnsContext.Provider>
    )
  },
)

Columns.displayName = ComponentName.Columns
export default Columns
