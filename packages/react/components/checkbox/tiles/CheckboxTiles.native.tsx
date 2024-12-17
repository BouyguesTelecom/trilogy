import React from 'react'
import { View, StyleSheet } from 'react-native'
import { CheckboxTilesProps } from './CheckboxTilesProps'
import { ComponentName } from '@/components/enumsComponentsName'


const CheckboxTiles = ({
                         children,
                         align,
                         verticalAlign,
                         ...others }: CheckboxTilesProps): JSX.Element => {

  // Alignement styles
  const styles = StyleSheet.create({

  })

    return (
    <View {...others}>
      {children}
    </View>
  )
}

CheckboxTiles.displayName = ComponentName.CheckboxTiles

export default CheckboxTiles
