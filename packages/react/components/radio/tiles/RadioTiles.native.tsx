import { ComponentName } from '@/components/enumsComponentsName'
import { RadioTilesNativeRef, RadioTilesProps } from '@/components/radio/tiles/RadioTilesProps'
import { SpacerSize } from '@/components/spacer'
import { Alignable } from '@/objects/facets/Alignable'
import React, { ReactNode, useCallback, useMemo } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { RadioTilesContext } from './context'

/**
 * RadioTiles
 * @param id {string}
 * @param children {ReactNode}
 * @param align { Alignable | AlignableValues} align content
 * @param verticalAlign { Alignable | AlignableValues} align vertical content
 * @param numberCols {GridSize | GridItemSize} number of columns for grid layout
 */
const RadioTiles = React.forwardRef<RadioTilesNativeRef, RadioTilesProps>(
  ({ id, children, align, verticalAlign, numberCols, ...others }, ref): JSX.Element => {
    const childArray = useMemo(() => React.Children.toArray(children).filter(React.isValidElement), [children])

    const columnCount = useMemo(() => {
      if (!numberCols) return null
      if (typeof numberCols === 'number') return numberCols
      return numberCols.mobile || numberCols.tablet || 1
    }, [numberCols])

    const styles = StyleSheet.create({
      container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: SpacerSize.TWO,
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
      columnWrapper: {
        gap: SpacerSize.TWO,
        marginBottom: SpacerSize.TWO,
      },
    })

    const renderItem = useCallback(({ item }: { item: ReactNode; index: number }) => {
      return <View style={{ flex: 1 }}>{item}</View>
    }, [])

    const keyExtractor = useCallback((_: ReactNode, index: number) => index.toString(), [])

    return (
      <RadioTilesContext.Provider value={{ isGrid: columnCount !== null }}>
        {columnCount !== null ? (
          <FlatList
            data={childArray}
            numColumns={columnCount}
            scrollEnabled={false}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            columnWrapperStyle={[styles.columnWrapper]}
            style={{ overflow: 'visible' }}
            {...others}
          />
        ) : (
          <View ref={ref} id={id} style={[styles.container]} {...others}>
            {children}
          </View>
        )}
      </RadioTilesContext.Provider>
    )
  },
)

RadioTiles.displayName = ComponentName.RadioTiles

export default RadioTiles
