import { ComponentName } from '@/components/enumsComponentsName'
import { isAndroid } from '@/helpers/device/index.native'
import { Alignable, getColorStyle, TrilogyColor } from '@/objects/index.native'
import React, { useEffect, useRef, useState } from 'react'
import {
  Dimensions,
  GestureResponderEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  type ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import ModalRN, { OnSwipeCompleteParams } from 'react-native-modal'
import { Column, Columns } from '../columns/index.native'
import { Icon, IconName, IconSize } from '../icon/index.native'
import { Title } from '../title/index.native'
import { ModalNativeRef, ModalProps } from './ModalProps'
import { ModalContext } from './context/ModalContext'

/**
 * Modal Component
 * @param active {boolean} Activated Modal
 * @param title {string} Title Modal
 * @param onClose {Function} Additional close custom function
 * @param onOpen {Function} Additional open custom function
 * @param children {React.ReactNode}
 * @param onModalHide {Function} Callback on Hide
 * @param unClosable {boolean} unClosable Native Modal
 */
const Modal = React.forwardRef<ModalNativeRef, ModalProps>(
  (
    {
      children,
      active = false,
      onClose,
      onModalHide,
      hideCloseButton = false,
      unClosable = false,
      trigger,
      title,
      ...others
    },
    ref,
  ): JSX.Element => {
    const scrollViewRef = useRef<ScrollView>(null)
    const [scrollOffset, setScrollOffset] = useState(0)
    const [visible, setVisible] = useState(active || false)
    const [isFooter, setIsFooter] = useState(active || false)

    const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      setScrollOffset(event.nativeEvent.contentOffset.y)
    }

    const handleScrollTo = (p: number) => {
      if (scrollViewRef.current) scrollViewRef.current.scrollTo(p)
    }

    const handleClose = (e: OnSwipeCompleteParams | GestureResponderEvent) => {
      if (onClose) onClose(e)
      setVisible(false)
    }

    useEffect(() => {
      setVisible(active)
    }, [active])

    return (
      <ModalContext.Provider value={{ scrollViewRef, handleOnScroll, isFooter, setIsFooter }}>
        {trigger}
        <ModalRN
          isVisible={visible}
          onBackdropPress={() => handleClose({} as GestureResponderEvent)}
          onSwipeComplete={handleClose}
          swipeDirection={unClosable ? undefined : ['down']}
          scrollTo={handleScrollTo}
          scrollOffset={scrollOffset}
          scrollOffsetMax={100}
          propagateSwipe={true}
          style={[styles.modal]}
          onModalHide={onModalHide}
          {...others}
        >
          <View ref={ref} style={[styles.body, { backgroundColor: getColorStyle(TrilogyColor.BACKGROUND) }]}>
            <View style={{ paddingVertical: !title && hideCloseButton ? 8 : 16 }}>
              <Columns verticalAlign={Alignable.ALIGNED_CENTER}>
                <Column>
                  <Title level={4}>{title}</Title>
                </Column>
                {!hideCloseButton && (
                  <Column narrow>
                    <TouchableOpacity onPress={handleClose}>
                      <Icon name={IconName.TIMES} size={IconSize.MEDIUM} color={TrilogyColor.MAIN} />
                    </TouchableOpacity>
                  </Column>
                )}
              </Columns>
            </View>

            {children}
          </View>
        </ModalRN>
      </ModalContext.Provider>
    )
  },
)

Modal.displayName = ComponentName.Modal

export default Modal

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  body: {
    paddingHorizontal: 16,
    maxHeight: isAndroid ? Dimensions.get('screen').height / 1.15 : Dimensions.get('screen').height / 1.1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
})
