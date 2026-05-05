import { ComponentName } from '@/components/enumsComponentsName'
import { isIOS } from '@/helpers/device.native'
import { getColorStyle, TrilogyColor } from '@/objects'
import * as React from 'react'
import { ScrollView, View } from 'react-native'
import { ModalContext } from '../context/ModalContext'
import { ModalBodyNativeRef, ModalBodyProps } from './ModalBodyProps'

/**
 * Modal Body Component
 * @param children {React.ReactNode}
 * @param id {string} Custom id attribute
 * @param testId {string} Test Id for Test Integration
 */
const ModalBody = React.forwardRef<ModalBodyNativeRef, ModalBodyProps>(({ children, testId, ...others }, ref): JSX.Element => {
  const { handleOnScroll, scrollViewRef, isFooter } = React.useContext(ModalContext)

  return (
    <ScrollView
      ref={scrollViewRef}
      scrollEventThrottle={16}
      onScroll={handleOnScroll}
      showsVerticalScrollIndicator={false}
    >
      <View
        ref={ref}
        style={[
          {
            backgroundColor: getColorStyle(TrilogyColor.BACKGROUND),
            paddingTop: 8,
            paddingBottom: isFooter ? 8 : isIOS ? 40 : 16,
          },
        ]}
        testID={testId}
        {...others}
      >
        {children}
      </View>
    </ScrollView>
  )
})

ModalBody.displayName = ComponentName.ModalBody

export default ModalBody
