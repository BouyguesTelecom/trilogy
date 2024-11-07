import * as React from 'react'
import { ModalBodyProps } from './ModalBodyProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { View } from '@/components/view'

const styles = {
  position: 'sticky',
  bottom: 0,
  width: '100%',
  textAlign: 'right',
  padding: 16,
}

/**
 * Modal Footer Component
 * @param children {React.ReactNode}
 * @param others
 */
const ModalBody = ({ children, ...others }: ModalBodyProps): JSX.Element => {
  return (
    <View {...others} style={styles}>
      {children}
    </View>
  )
}

ModalBody.displayName = ComponentName.ModalBody

export default ModalBody
