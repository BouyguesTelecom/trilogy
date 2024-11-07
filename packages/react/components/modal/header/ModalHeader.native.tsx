import * as React from 'react'
import { ModalHeaderProps } from './ModalHeaderProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { View } from '@/components/view'

const styles = {
  padding: 8,
  position: 'sticky',
  top: '0px',
  width: '100%',
}

/**
 * Modal Title Component
 * @param children {string}
 * @param iconName {IconName} IconName for icon title
 */
const ModalHeader = ({ children, ...others }: ModalHeaderProps): JSX.Element => {
  return (
    <View style={styles} {...others}>
      {children}
    </View>
  )
}

ModalHeader.displayName = ComponentName.ModalHeader

export default ModalHeader
