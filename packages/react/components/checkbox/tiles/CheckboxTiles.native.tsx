import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { CheckboxTilesProps } from './CheckboxTilesProps'
import { Text, TextLevels } from '@/components/text'
import { ComponentName } from '@/components/enumsComponentsName'


const CheckboxTiles = ({ children }: CheckboxTilesProps): JSX.Element => {

  return (
    <TouchableOpacity >
      <Text>CheckboxTitles</Text>
    </TouchableOpacity>
  )
}

CheckboxTiles.displayName = ComponentName.CheckboxTiles

export default CheckboxTiles
