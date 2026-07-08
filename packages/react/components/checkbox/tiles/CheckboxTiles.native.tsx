import { ComponentName } from '@/components/enumsComponentsName'
import { SpacerSize } from '@/components/spacer'
import { getAlignStyle } from '@/objects/facets/Alignable'
import React, { ReactNode, RefObject, useCallback, useMemo } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { CheckboxTilesNativeRef, CheckboxTilesProps } from './CheckboxTilesProps'
import { CheckboxTilesContext } from './context'

/**
 * CheckboxTiles
 * @param id {string} Custom id attribute
 * @param align {Alignable}
 * @param verticalAlign {Alignable}
 * @param numberCols {GridSize | GridItemSize} number of columns for grid layout
 * @param accessibilityLabelledBy {string} Id of the element that labels the group of checkboxes for accessibility
 * @param children {React.ReactNode} CheckboxTile components as children
 * @param testId {string} Test Id for Test Integration
 */
const CheckboxTiles = React.forwardRef<CheckboxTilesNativeRef, CheckboxTilesProps>(
  ({ children, align, verticalAlign, numberCols, id, testId, ...others }, ref): JSX.Element => {
    const childArray = useMemo(() => React.Children.toArray(children).filter(React.isValidElement), [children])

    const columnCount = useMemo(() => {
      if (!numberCols || numberCols === 1) return null
      if (typeof numberCols === 'number') return numberCols
      if (numberCols.mobile === 1 || numberCols.tablet === 1) return null
      return numberCols.mobile || numberCols.tablet
    }, [numberCols])

    const styles = StyleSheet.create({
      container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: SpacerSize.TWO,
        justifyContent: getAlignStyle(align),
        alignItems: (verticalAlign && getAlignStyle(verticalAlign)) || (align && getAlignStyle(align)),
      },
      columnWrapper: {
        gap: SpacerSize.TWO,
        marginBottom: SpacerSize.TWO,
      },
    })

    const renderItem = useCallback(
      ({ item, index }: { item: ReactNode; index: number }) => {
        if (!columnCount) return <View style={{ flex: 1 }}>{item}</View>
        const isLastItem = index === childArray.length - 1
        const isOddItem = childArray.length % columnCount !== 0 && isLastItem
        return (
          <View
            style={{
              flex: isOddItem ? 0 : 1,
              width: isOddItem ? `${100 / columnCount}%` : undefined,
            }}
          >
            {item}
          </View>
        )
      },
      [childArray.length, columnCount],
    )

    const keyExtractor = useCallback((_: ReactNode, index: number) => index.toString(), [])

    return (
      <CheckboxTilesContext.Provider value={{ isGrid: columnCount !== null }}>
        {columnCount !== null ? (
          <FlatList
            testID={testId}
            id={id}
            ref={ref as RefObject<FlatList>}
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
          <View id={id} ref={ref as RefObject<View>} style={[styles.container]} {...others}>
            {children}
          </View>
        )}
      </CheckboxTilesContext.Provider>
    )
  },
)

CheckboxTiles.displayName = ComponentName.CheckboxTiles

export default CheckboxTiles
