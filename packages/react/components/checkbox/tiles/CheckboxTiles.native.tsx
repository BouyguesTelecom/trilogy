import { ComponentName } from '@/components/enumsComponentsName'
import { SpacerSize } from '@/components/spacer'
import { getAlignStyle } from '@/objects/facets/Alignable'
import React, { ReactNode, useCallback, useMemo } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { CheckboxTilesNativeRef, CheckboxTilesProps } from './CheckboxTilesProps'
import { CheckboxTilesContext } from './context'

const CheckboxTiles = React.forwardRef<CheckboxTilesNativeRef, CheckboxTilesProps>(
  ({ children, align, verticalAlign, numberCols, ...others }, ref): JSX.Element => {
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
        justifyContent: getAlignStyle(align),
        alignItems: (verticalAlign && getAlignStyle(verticalAlign)) || (align && getAlignStyle(align)),
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
      <CheckboxTilesContext.Provider value={{ isGrid: columnCount !== null }}>
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
          <View ref={ref} style={[styles.container]} {...others}>
            {children}
          </View>
        )}
      </CheckboxTilesContext.Provider>
    )
  },
)

CheckboxTiles.displayName = ComponentName.CheckboxTiles

export default CheckboxTiles
