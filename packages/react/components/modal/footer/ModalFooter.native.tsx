import React from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import { ModalFooterProps } from '@/components/modal/footer/ModalFooterProps'
import { Title, TitleLevels } from '@/components/title'
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
 */
const ModalFooter = ({ children, ...others }: ModalFooterProps): JSX.Element => {
  return (
    <View {...others} style={styles}>
      {(typeof children === 'string' && (
        <Title level={TitleLevels.THREE} style={{ width: '100%', textAlign: 'center' }}>
          {children}
        </Title>
      )) ||
        children}
    </View>
  )
}

ModalFooter.displayName = ComponentName.ModalFooter

export default ModalFooter
