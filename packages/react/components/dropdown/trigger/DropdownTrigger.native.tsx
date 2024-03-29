import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ComponentName } from '../../enumsComponentsName'
import { DropdownTriggerProps } from './DropdownTriggerProps'

const DropdownTrigger = ({ label, value, children }: DropdownTriggerProps) => {
  const [triggered, setTriggered] = useState(false)

  return (
    <TouchableOpacity
      onPress={() => {
        setTriggered(!triggered)
      }}
    >
      <View>
        <Text>{label}</Text>
        <Text>{value?.join(',')}</Text>
      </View>
      {triggered && children} {/* Render DropdownMenu here */}
    </TouchableOpacity>
  )
}
DropdownTrigger.displayName = ComponentName.DropdownTrigger

export default DropdownTrigger
