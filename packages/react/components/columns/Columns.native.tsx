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
 * Columns Native Component
 * @param children {React.ReactNode}
 * @param centered {boolean} Center columns
 * @param verticalCentered {boolean} Vertical centered columns
 * @param scrollable {boolean} Makes columns vertically scrollable.
 * @param gap {GapSize} Gap between columns
 */
const Columns = React.forwardRef<ColumnsNativeRef, ColumnsProps>(
  ({ children, align, gap, verticalAlign, fullBleed, scrollable, multiline, fullheight, ...others }, ref): JSX.Element => {
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
