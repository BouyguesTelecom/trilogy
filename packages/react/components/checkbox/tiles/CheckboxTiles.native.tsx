import { ComponentName } from '@/components/enumsComponentsName'
import { SpacerSize } from '@/components/spacer/index.native'
import { getAlignStyle } from '@/objects/facets/Alignable'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { CheckboxTilesNativeRef, CheckboxTilesProps } from './CheckboxTilesProps'

const CheckboxTiles = React.forwardRef<CheckboxTilesNativeRef, CheckboxTilesProps>(
  ({ children, align, verticalAlign, ...others }, ref): JSX.Element => {
    const styles = StyleSheet.create({
      container: {
        justifyContent: getAlignStyle(align),
        alignItems: (verticalAlign && getAlignStyle(verticalAlign)) || (align && getAlignStyle(align)),
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: SpacerSize.TWO,
      },
    })

    return (
      <View ref={ref} style={styles.container} {...others}>
        {children}
      </View>
    )
  },
)

CheckboxTiles.displayName = ComponentName.CheckboxTiles

export default CheckboxTiles
