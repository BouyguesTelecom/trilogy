import { ComponentName } from '@/components/enumsComponentsName'
import React, { useEffect, useRef, useState } from 'react'
import { NativeScrollEvent, NativeSyntheticEvent, type ScrollView, StyleSheet, View } from 'react-native'
import ModalRN, { OnSwipeCompleteParams } from 'react-native-modal'
import { ModalProps } from './ModalProps'
import { ModalContext } from './context/ModalContext'

/**
 * Modal Component
 * @param active {boolean} Activated Modal
 * @param title {string} Title Modal
 * @param onClose {Function} Additionnal close custom function
 * @param onOpen {Function} Additionnal open custom function
 * @param children {React.ReactNode}
 * @param onModalHide {Function} Callback on Hide
 * @param unClosable {boolean} unClosable Native Modal
 */
const Modal = ({
  children,
  active = false,
  onClose,
  onModalHide,
  hideCloseButton = false,
  unClosable = false,
  trigger,
  title,
  ...others
}: ModalProps): JSX.Element => {
  const scrollViewRef = useRef<ScrollView>(null)
  const [scrollOffset, setScrollOffset] = useState(0)
  const [visible, setVisible] = useState(active || false)

  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setScrollOffset(event.nativeEvent.contentOffset.y)
  }

  const handleScrollTo = (p: number) => {
    if (scrollViewRef.current) scrollViewRef.current.scrollTo(p)
  }

  const handleClose = (e: OnSwipeCompleteParams) => {
    if (onClose) onClose(e)
    setVisible(false)
  }

  useEffect(() => {
    setVisible(active)
  }, [active])

  return (
    <ModalContext.Provider value={{ scrollViewRef, handleOnScroll }}>
      {trigger}
      <ModalRN
        isVisible={visible}
        onSwipeComplete={handleClose}
        swipeDirection={['down']}
        scrollTo={handleScrollTo}
        scrollOffset={scrollOffset}
        scrollOffsetMax={400 - 300}
        propagateSwipe={true}
        style={styles.modal}
      >
        <View style={styles.scrollableModal}>{children}</View>
      </ModalRN>
    </ModalContext.Provider>
  )
}

Modal.displayName = ComponentName.Modal

export default Modal

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  scrollableModal: {
    height: 300,
  },
})
