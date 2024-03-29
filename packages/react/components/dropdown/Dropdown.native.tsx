import React, { useState } from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import { DropdownProps } from './DropdownProps'
import { ComponentName } from '../enumsComponentsName'

const Dropdown = ({ children, active }: DropdownProps) => {
  const [displayDropdown, setDisplayDropdown] = useState(active || false)

  // Map over the children to add the appropriate behavior
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const processedChildren: any = React.Children.map(children, (child: any, index) => {
    if (index === 0) {
      return React.cloneElement(child, {
        onPress: () => setDisplayDropdown(!displayDropdown),
      })
    } else if (index === 1 && displayDropdown) {
      return child
    }
    return null // Don't render other children
  })

  return (
    <View>
      <TouchableWithoutFeedback>
        {processedChildren[0]} {/* Render the processed DropdownTrigger */}
      </TouchableWithoutFeedback>
    </View>
  )
}

Dropdown.displayName = ComponentName.Dropdown

export default Dropdown
