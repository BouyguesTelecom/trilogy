import { ComponentName } from '@/components/enumsComponentsName'
import { getAlignStyle } from '@/objects/facets/Alignable'
import { getJustifyStyle } from '@/objects/facets/Justifiable'
import React, { useState } from 'react'
import { Dimensions, LayoutChangeEvent, ScrollView, StyleSheet, View } from 'react-native'
import { ColumnsGapValue } from '../columns'
import { FlexBoxNativeRef, FlexBoxProps } from './FlexBoxProps'
import { FlexBoxContext } from './context'

const FlexBox = React.forwardRef<FlexBoxNativeRef, FlexBoxProps>(
  ({ id, gap, direction = 'row', align, justify, scrollable, fullBleed, children, fullheight, ...others }, ref) => {
    const [width, setWidth] = useState(0)
    const [enlarge, setEnlarge] = useState(0)
    const isValueDirection = typeof direction === 'string'
    const isValueAlign = typeof align === 'string'
    const isValueJustify = typeof justify === 'string'

    const onLayoutHandler = React.useCallback(
      (event: LayoutChangeEvent) => {
        if (!width) {
          const { width } = event.nativeEvent.layout
          if (fullBleed) setEnlarge((Dimensions.get('screen').width - width) / 2)
          setWidth(width)
        }
      },
      [fullBleed, width],
    )

    const gapIndex = (gap && typeof gap === 'number' && gap) || (gap && gap?.mobile) || 0
    const realGap = React.useMemo(() => (typeof gap === 'undefined' ? 8 : ColumnsGapValue[gapIndex]), [gap])

    const styles = StyleSheet.create({
      columns: {
        flexDirection: !isValueDirection ? direction?.mobile : direction,
        gap: realGap,
        alignItems: isValueAlign ? getAlignStyle(align?.mobile) : getAlignStyle(align),
        justifyContent: isValueJustify ? getJustifyStyle(justify?.mobile) : getJustifyStyle(justify),
        width: fullBleed && width ? width + enlarge * 2 : '100%',
        marginHorizontal: -enlarge,
        paddingHorizontal: enlarge,
        height: fullheight ? '100%' : 'auto',
      },
      columnsScrollable: {
        paddingHorizontal: enlarge,
        gap: realGap,
      },
    })

    return (
      <FlexBoxContext.Provider
        value={{
          width,
          realGap,
          scrollable: scrollable || false,
          childrenLength: React.Children.count(children),
        }}
      >
        {!scrollable && (
          <View id={id} ref={ref} onLayout={onLayoutHandler} style={[styles.columns]} {...others}>
            {children}
          </View>
        )}

        {scrollable && (
          <View
            id={id}
            onLayout={onLayoutHandler}
            style={{
              marginHorizontal: -enlarge,
            }}
          >
            <ScrollView
              horizontal
              contentContainerStyle={styles.columnsScrollable}
              showsHorizontalScrollIndicator={false}
            >
              {children}
            </ScrollView>
          </View>
        )}
      </FlexBoxContext.Provider>
    )
  },
)

FlexBox.displayName = ComponentName.FlexBox
export default FlexBox
