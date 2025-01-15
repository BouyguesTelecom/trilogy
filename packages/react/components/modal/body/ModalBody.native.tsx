import { ComponentName } from '@/components/enumsComponentsName'
import * as React from 'react'
import { ScrollView, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { ModalBodyProps } from './ModalBodyProps'

const styles: TouchableOpacityProps['style'] = {
  bottom: 0,
  width: '100%',
  padding: 16,
}

/**
 * Modal Footer Component
 * @param children {React.ReactNode}
 * @param others
 */
const ModalBody = ({ children, ...others }: ModalBodyProps): JSX.Element => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <TouchableOpacity activeOpacity={1} {...others} style={styles}>
        {children}
      </TouchableOpacity>
    </ScrollView>
  )
}

ModalBody.displayName = ComponentName.ModalBody

export default ModalBody
