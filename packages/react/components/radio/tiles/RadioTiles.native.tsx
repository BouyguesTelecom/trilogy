import { ComponentName } from '@/components/enumsComponentsName'
import { RadioTilesNativeRef, RadioTilesProps } from '@/components/radio/tiles/RadioTilesProps'
import { SpacerSize } from '@/components/spacer'
import { Alignable } from '@/objects/facets/Alignable'
import React, { useMemo } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

/**
 * RadioTiles
 * @param id {string}
 * @param children {ReactNode}
 * @param align { Alignable | AlignableValues} align content
 * @param verticalAlign { Alignable | AlignableValues} align vertical content
 * @param numberCols {FlexSize | FlexItemSize} number of columns for grid layout
 */
const RadioTiles = React.forwardRef<RadioTilesNativeRef, RadioTilesProps>(
  ({ id, children, align, verticalAlign, numberCols, ...others }, ref): JSX.Element => {
    const columnCount = useMemo(() => {
      if (!numberCols) return null
      if (typeof numberCols === 'number') return numberCols
      return numberCols.mobile || numberCols.tablet || 1
    }, [numberCols])

    const styles = StyleSheet.create({
      responsive: {
        alignItems:
          (verticalAlign === Alignable.ALIGNED_CENTER && 'center') ||
          (verticalAlign === Alignable.ALIGNED_START && 'flex-start') ||
          (verticalAlign === Alignable.ALIGNED_END && 'flex-end') ||
          undefined,
        justifyContent:
          (align === Alignable.ALIGNED_CENTER && 'center') ||
          (align === Alignable.ALIGNED_START && 'flex-start') ||
          (align === Alignable.ALIGNED_END && 'flex-end') ||
          undefined,
      },
      container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: SpacerSize.TWO,
      },
    })

    if (columnCount) {
      const childArray = React.Children.toArray(children).filter(React.isValidElement)
      return (
        <FlatList
          data={childArray}
          numColumns={columnCount}
          scrollEnabled={false}
          renderItem={({ item }) => item as React.ReactElement}
          keyExtractor={(item, index) => (item.key ? item.key.toString() : index.toString())}
          columnWrapperStyle={columnCount > 1 ? { gap: SpacerSize.TWO } : undefined}
          contentContainerStyle={styles.responsive}
          {...others}
        />
      )
    }

    return (
      <View ref={ref} id={id} style={[styles.container, styles.responsive]} {...others}>
        {children}
      </View>
    )
  },
)

RadioTiles.displayName = ComponentName.RadioTiles

export default RadioTiles
