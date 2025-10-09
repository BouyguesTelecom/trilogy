import * as React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { ButtonNativeRef, ButtonProps } from './ButtonProps'

const Button = React.forwardRef<ButtonNativeRef, ButtonProps>(({ children, onPress }, ref): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress} style={{ height: 200, width: 200 }}>
      <Text style={{ color: 'red' }}>{children}</Text>
    </TouchableOpacity>
  )
})

export default Button
