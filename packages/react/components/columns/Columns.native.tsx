import { ColumnsProps } from '@/components/columns/ColumnsProps'
import { ColumnsGapValue, GapSize } from '@/components/columns/ColumnsTypes'
import { ColumnsContext } from '@/components/columns/context'
import { ComponentName } from '@/components/enumsComponentsName'
import { Alignable, getAlignStyle } from '@/objects/facets/Alignable'
import React, { useState } from 'react'
import { Dimensions, LayoutChangeEvent, ScrollView, StyleSheet, View } from 'react-native'

/**
 * Columns Native Component
 * @param children {React.ReactNode}
 * @param centered {boolean} Center columns
 * @param verticalCentered {boolean} Vertical centered columns
 * @param scrollable {boolean} Makes columns vertically scrollable.
 * @param gap {GapSize} Gap between columns
 */

const Columns = React.forwardRef(
  (
    { children, align, gap, verticalAlign, fullBleed, scrollable, multiline, ...others }: ColumnsProps,
    ref: React.Ref<View>,
  ): JSX.Element => {
    const [width, setWidth] = useState(0)
    const [enlarge, setEnlarge] = useState(0)

    const onLayoutHandler = React.useCallback(
      (event: LayoutChangeEvent) => {
        if (!width) {
          const { width } = event.nativeEvent.layout
          if (fullBleed) {
            setEnlarge((Dimensions.get('screen').width - width) / 2)
          }
          setWidth(width)
        }
      },
      [fullBleed],
    )

    const realGap = React.useMemo(() => (typeof gap === 'undefined' && 16) || ColumnsGapValue[gap as GapSize], [gap])

    const styles = StyleSheet.create({
      columns: {
        width: fullBleed && width ? width + enlarge * 2 : '100%',
        marginHorizontal: -enlarge,
        paddingHorizontal: enlarge,
        flexDirection: 'row',
        gap: realGap,
      },
      centered: {
        justifyContent: 'center',
      },
      verticalAlign: {
        alignItems: getAlignStyle(verticalAlign),
      },
      multiline: {
        flexWrap: 'wrap',
      },
      scrollContainer: {
        paddingHorizontal: enlarge,
        gap: realGap,
      },
      mobile: {
        flexDirection: 'column',
      },
    })

    return (
      <ColumnsContext.Provider
        value={{
          width,
          realGap,
          scrollable: scrollable || false,
          childrensLength: React.Children.count(children),
        }}
      >
        {!scrollable && (
          <View
            ref={ref}
            onLayout={onLayoutHandler}
            style={[
              styles.columns,
              multiline && styles.multiline,
              align === Alignable.ALIGNED_CENTER && styles.centered,
              verticalAlign && styles.verticalAlign,
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
              contentContainerStyle={styles.scrollContainer}
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
