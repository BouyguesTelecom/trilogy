import { ComponentName } from '@/components/enumsComponentsName'
import { isAndroid } from '@/helpers/device.native'
import { Alignable, getColorStyle, TrilogyColor } from '@/objects'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  Dimensions,
  GestureResponderEvent,
  Modal as RNModal,
  NativeScrollEvent,
  NativeSyntheticEvent,
  type ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'
import { Column, Columns } from '../columns'
import { Icon, IconName, IconSize } from '../icon'
import { Title } from '../title'
import { ModalNativeRef, ModalProps } from './ModalProps'
import { ModalContext } from './context/ModalContext'

const SCREEN_HEIGHT = Dimensions.get('screen').height
const DISMISS_THRESHOLD = 150
const ANIMATION_DURATION = 300

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
    const [visible, setVisible] = useState(active || false)
    const [isFooter, setIsFooter] = useState(false)

    const translateY = useSharedValue(SCREEN_HEIGHT)
    const backdropOpacity = useSharedValue(0)

    const onCloseRef = useRef(onClose)
    onCloseRef.current = onClose
    const onModalHideRef = useRef(onModalHide)
    onModalHideRef.current = onModalHide

    const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      // Keep for ModalBody context compatibility
    }

    const handleDismiss = useCallback(() => {
      setVisible(false)
      if (onModalHideRef.current) onModalHideRef.current()
    }, [])

    const callOnClose = useCallback(() => {
      if (onCloseRef.current) onCloseRef.current({} as GestureResponderEvent)
    }, [])

    const animateOut = useCallback(
      (withOnClose: boolean) => {
        if (withOnClose) callOnClose()
        translateY.value = withTiming(SCREEN_HEIGHT, { duration: ANIMATION_DURATION }, (finished) => {
          if (finished) runOnJS(handleDismiss)()
        })
        backdropOpacity.value = withTiming(0, { duration: ANIMATION_DURATION })
      },
      [callOnClose, handleDismiss],
    )

    const handleClose = useCallback(() => {
      animateOut(true)
    }, [animateOut])

    const animateIn = useCallback(() => {
      translateY.value = withTiming(0, { duration: ANIMATION_DURATION })
      backdropOpacity.value = withTiming(0.5, { duration: ANIMATION_DURATION })
    }, [])

    useEffect(() => {
      if (active) {
        translateY.value = SCREEN_HEIGHT
        backdropOpacity.value = 0
        setVisible(true)
      } else if (visible) {
        animateOut(false)
      }
    }, [active])

    const panGesture = Gesture.Pan()
      .onUpdate((event) => {
        if (event.translationY > 0) {
          translateY.value = event.translationY
          backdropOpacity.value = 0.5 * Math.max(0, 1 - event.translationY / (SCREEN_HEIGHT * 0.5))
        }
      })
      .onEnd(() => {
        if (translateY.value > DISMISS_THRESHOLD) {
          runOnJS(handleClose)()
        } else {
          translateY.value = withTiming(0, { duration: 200 })
          backdropOpacity.value = withTiming(0.5, { duration: 200 })
        }
      })
      .enabled(!unClosable)

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateY: Math.max(0, translateY.value) }],
    }))

    const backdropAnimatedStyle = useAnimatedStyle(() => ({
      backgroundColor: `rgba(0, 0, 0, ${backdropOpacity.value})`,
    }))

    return (
      <ModalContext.Provider value={{ scrollViewRef, handleOnScroll, isFooter, setIsFooter }}>
        {trigger}
        <RNModal
          visible={visible}
          transparent
          animationType='none'
          onRequestClose={unClosable ? undefined : handleClose}
          onShow={animateIn}
          statusBarTranslucent
        >
          <GestureHandlerRootView style={styles.overlay}>
            <Animated.View style={[StyleSheet.absoluteFill, backdropAnimatedStyle]}>
              <TouchableOpacity
                style={StyleSheet.absoluteFill}
                activeOpacity={1}
                onPress={unClosable ? undefined : handleClose}
              />
            </Animated.View>
            <Animated.View
              ref={ref}
              style={[styles.body, { backgroundColor: getColorStyle(TrilogyColor.BACKGROUND) }, animatedStyle]}
              {...others}
            >
              <GestureDetector gesture={panGesture}>
                <Animated.View style={{ paddingVertical: !title && (hideCloseButton || unClosable) ? 8 : 16 }}>
                  <Columns verticalAlign={Alignable.ALIGNED_CENTER}>
                    <Column>
                      <Title level={4}>{title}</Title>
                    </Column>
                    {!hideCloseButton && !unClosable && (
                      <Column narrow>
                        <TouchableOpacity onPress={handleClose}>
                          <Icon name={IconName.TIMES} size={IconSize.MEDIUM} color={TrilogyColor.MAIN} />
                        </TouchableOpacity>
                      </Column>
                    )}
                  </Columns>
                </Animated.View>
              </GestureDetector>
              {children}
            </Animated.View>
          </GestureHandlerRootView>
        </RNModal>
      </ModalContext.Provider>
    )
  },
)

Modal.displayName = ComponentName.Modal

export default Modal

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
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
