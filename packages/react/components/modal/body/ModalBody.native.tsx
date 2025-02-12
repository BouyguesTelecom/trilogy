import { ComponentName } from '@/components/enumsComponentsName'
import { getColorStyle, TrilogyColor } from '@/objects'
import * as React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { ModalContext } from '../context/ModalContext'
import { ModalBodyProps } from './ModalBodyProps'

/**
 * Modal Footer Component
 * @param children {React.ReactNode}
 * @param others
 */
const ModalBody = ({ children, ...others }: ModalBodyProps): JSX.Element => {
  const context = React.useContext(ModalContext)

  return (
    <ScrollView ref={context.scrollViewRef} scrollEventThrottle={16} onScroll={context.handleOnScroll}>
      <View style={[{ backgroundColor: getColorStyle(TrilogyColor.BACKGROUND) }]} {...others}>
        {children}
      </View>
    </ScrollView>
  )
}

ModalBody.displayName = ComponentName.ModalBody

export default ModalBody

const styles = StyleSheet.create({
  content: {
    justifyContent: 'flex-end',
    margin: 0,
  },
})
