import React from 'react'
import { View, StyleSheet } from 'react-native'
import { CheckboxTilesProps } from './CheckboxTilesProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { getAlignStyle } from "@/objects"
import { SpacerSize } from "@/components/spacer"

const CheckboxTiles = ({
                         children,
                         align,
                         verticalAlign,
                         ...others }: CheckboxTilesProps): JSX.Element => {

    const styles = StyleSheet.create({
      container: {
        justifyContent: getAlignStyle(align),
        alignItems: verticalAlign && getAlignStyle(verticalAlign) || align && getAlignStyle(align) || 'stretch',
        gap: SpacerSize.TWO,
      }
    })

    return (
      <View style={styles.container} {...others}>
        {children}
      </View>
    )
}

CheckboxTiles.displayName = ComponentName.CheckboxTiles

export default CheckboxTiles
