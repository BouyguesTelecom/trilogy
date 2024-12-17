import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { CheckboxTileProps } from './CheckboxTileProps'
import { Text, TextLevels } from '@/components/text'
import { ComponentName } from '@/components/enumsComponentsName'


const CheckboxTile = ({ description }: CheckboxTileProps): JSX.Element => {

  return (
    <TouchableOpacity >
      <Text>CheckboxTitles</Text>
    </TouchableOpacity>
  )
}

CheckboxTile.displayName = ComponentName.CheckboxTiles

export default CheckboxTile
