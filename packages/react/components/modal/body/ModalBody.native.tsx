import { ComponentName } from '@/components/enumsComponentsName'
import { getColorStyle, TrilogyColor } from '@/objects'
import * as React from 'react'
import { Platform, ScrollView, View } from 'react-native'
import { ModalContext } from '../context/ModalContext'
import { ModalBodyProps } from './ModalBodyProps'
import { isIOS } from '@/helpers'

/**
 * Modal Footer Component
 * @param children {React.ReactNode}
 * @param others
 */
const ModalBody = ({ children, ...others }: ModalBodyProps): JSX.Element => {
  const { handleOnScroll, scrollViewRef, isFooter } = React.useContext(ModalContext)

  return (
    <ScrollView
      ref={scrollViewRef}
      scrollEventThrottle={16}
      onScroll={handleOnScroll}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={[
          {
            backgroundColor: getColorStyle(TrilogyColor.BACKGROUND),
            paddingTop: 8,
            paddingBottom: isFooter ? 8 : isIOS ? 40 : 16,
          },
        ]}
        {...others}
      >
        {children}
      </View>
    </ScrollView>
  )
}

ModalBody.displayName = ComponentName.ModalBody

export default ModalBody
