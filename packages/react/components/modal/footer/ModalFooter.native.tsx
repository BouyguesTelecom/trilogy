import { ComponentName } from '@/components/enumsComponentsName'
import { Title, TitleLevels } from '@/components/title'
import * as React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ModalFooterProps } from './ModalFooterProps'

/**
 * Modal Footer Component
 * @param children {React.ReactNode}
 */
const ModalFooter = ({ children, ...others }: ModalFooterProps): JSX.Element => {
  const insets = useSafeAreaInsets()

  return (
    <View
      {...others}
      style={{
        bottom: 0,
        width: '100%',
        paddingBottom: insets.bottom,
      }}
    >
      <View style={{ backgroundColor: 'white', width: '100%', height: 16, marginTop: -16 }} />
      <View style={{ paddingHorizontal: 16 }}>
        {(typeof children === 'string' && (
          <Title level={TitleLevels.THREE} style={{ width: '100%', textAlign: 'center' }}>
            {children}
          </Title>
        )) ||
          children}
      </View>
    </View>
  )
}

ModalFooter.displayName = ComponentName.ModalFooter

export default ModalFooter
