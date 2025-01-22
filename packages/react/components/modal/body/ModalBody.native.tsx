import { ComponentName } from '@/components/enumsComponentsName'
import * as React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ModalBodyProps } from './ModalBodyProps'

/**
 * Modal Footer Component
 * @param children {React.ReactNode}
 * @param others
 */
const ModalBody = ({ children, ...others }: ModalBodyProps): JSX.Element => {
  const insets = useSafeAreaInsets()

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: insets.bottom }}>
      <TouchableOpacity
        activeOpacity={1}
        {...others}
        style={{
          bottom: 0,
          width: '100%',
          paddingHorizontal: 16,
        }}
      >
        {children}
      </TouchableOpacity>
    </ScrollView>
  )
}

ModalBody.displayName = ComponentName.ModalBody

export default ModalBody
