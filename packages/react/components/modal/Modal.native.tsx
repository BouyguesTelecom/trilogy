import React, { useEffect, useRef, useState } from "react"
import {Animated, Dimensions, GestureResponderEvent, ScrollView, StyleSheet, TouchableOpacity,} from "react-native"
import NativeModal from "react-native-modal"
import { ModalProps } from "./ModalProps"
import { Text } from "../text"
import { Button, ButtonVariant } from "../button"
import { View } from "../view"
import { Icon, IconName, IconSize } from "../icon"
import { getColorStyle, TrilogyColor } from "../../objects/facets/Color"
import { ComponentName } from "../enumsComponentsName"
import ModalTitle from "./title/ModalTitle";
import ModalFooter from "./footer/ModalFooter";
import ButtonList from "../button/list/ButtonList";

/**
 * Modal Component
 * @param active {boolean} Activated Modal
 * @param title {string} Title Modal
 * @param content {string} Content text for modal
 * @param triggerContent {string} Trigger custom element
 * @param iconName IconName for icon title
 * @param iconColor IconColor for icon title
 * @param ctaOnClick {Function} On Click Event CTA
 * @param ctaCancelOnClick function for cancel button (appear when set)
 * @param onClose {Function} Additionnal close custom function
 * @param onOpen {Function} Additionnal open custom function
 * @param closeIcon {boolean} Display close icon for Modal
 * @param bottom {boolean} Open modal from bottom
 * @param ctaContent {string} Content cta
 * @param children {React.ReactNode}
 * @param fullwidth {boolean} Fullwidth Modal
 * @param onModalHide {Function} Callback on Hide
 * @param swipable {boolean} Swipable Native Modal
 */
const Modal = ({
  children,
  active = false,
  title,
  content,
  iconName,
  iconColor,
  triggerContent,
  ctaContent,
  ctaOnClick,
  ctaCancelOnClick,
  onClose,
  onOpen,
  closeIcon,
  bottom,
  fullwidth,
  onModalHide,
  swipable = true,
  ...others
}: ModalProps): JSX.Element => {
  const styles = StyleSheet.create({
    centeredView: {
      justifyContent: bottom ? "flex-end" : "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    iconCenter: {
      alignSelf: "center",
      marginBottom: 30,
    },
    modalView: {
      margin: bottom ? 0 : 20,
      backgroundColor: getColorStyle(TrilogyColor.WHITE),
      borderRadius: 6,
      padding: fullwidth ? 0 : 17,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      flex: 1,
    },
    title: {
      textAlign: "center",
      fontSize: 21,
      fontWeight: "600",
    },
    content: {
      textAlign: "center",
      fontSize: 15,
      paddingTop: 10,
    },
    overlay: {
      flexDirection: "row",
      width: "100%",
      height: "100%",
    },
    middleModal: {
      justifyContent: "center",
    },
    bottomModal: {
      justifyContent: "flex-end",
    },
    childrenContainer: {
      flexWrap: "wrap",
      paddingTop: 10,
      borderRadius: 6,
      backgroundColor: getColorStyle(TrilogyColor.WHITE),
      width: "100%",
    },
    horizontalMargin: {
      marginTop: 50,
      marginBottom: bottom ? 0 : 50,
    },
  })

  const defaultAnimPosition = Dimensions.get("window").height
  const translateAnim = useRef(new Animated.Value(defaultAnimPosition)).current

  const [visible, setVisible] = useState(active || false)

  useEffect(() => {
    if (visible) {
      Animated.timing(translateAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start()
    } else {
      translateAnim.setValue(defaultAnimPosition)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  const close = (e: GestureResponderEvent) => {
    if (onClose) onClose(e)
    setVisible(false)
  }
  const modalChildren = children ?? (
    <View style={{ padding: 17 }}>
      {content && typeof content === "string" ? (
        <Text style={styles.content}>{content}</Text>
      ) : (
        content
      )}
    </View>
  )

  return (
    <>
      {triggerContent && (
        <Button
          variant={ButtonVariant.PRIMARY}
          onClick={(e) => {
            if (onOpen) onOpen(e)
              setVisible(true)
          }}
        >
          {triggerContent}
        </Button>
      )}
      <NativeModal
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onSwipeComplete={(e: any) => {
//          setVisible(!visible)
          close(e)
        }}
        onModalHide={onModalHide}
        swipeDirection={swipable ? "down" : undefined}
        isVisible={visible}
        statusBarTranslucent={true}
        style={{ width: "100%", padding: 0, margin: 0 }}
        {...others}
      >
        <View
          style={[
            styles.overlay,
            bottom ? styles.bottomModal : styles.middleModal,
          ]}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={{ width: bottom ? 0 : 20, height: "100%" }}
            onPress={close}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              flex: fullwidth ? 0 : 1,
            }}
          >
            <TouchableOpacity
              activeOpacity={1}
              style={{ width: "100%", minHeight: 50, flexGrow: 1 }}
              onPress={close}
            />

            <View style={{ flexShrink: 1 }}>
              <Animated.View
                style={[
                  styles.childrenContainer,
                  { transform: [{ translateY: translateAnim }] }
                ]}
              >
                {closeIcon && (
                  <View style={{ width: "100%" }}>
                    <TouchableOpacity
                      style={{ alignSelf: "flex-end", right: 20 }}
                      onPress={close}
                    >
                      <Icon
                        name={IconName.TIMES}
                        size={IconSize.SMALL}
                        color={TrilogyColor.NEUTRAL}
                      />
                    </TouchableOpacity>
                  </View>
                )}
                {(title || iconName) && <ModalTitle iconName={iconName}>{title}</ModalTitle>}
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>{modalChildren}</ScrollView>
                {(ctaContent || ctaCancelOnClick) && (
                  <ModalFooter>
                    { (ctaContent &&
                      <Button variant={ButtonVariant.PRIMARY} onClick={ctaOnClick}>
                        {ctaContent}</Button>
                      )}
                    { (ctaCancelOnClick &&
                      <Button
                        variant={ButtonVariant.SECONDARY}
                        onClick={(e) => {
                          ctaCancelOnClick(e)
                        }}
                      > Annuler </Button>
                    )}
                  </ModalFooter>
                )}
              </Animated.View>
            </View>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                width: "100%",
                minHeight: bottom ? 0 : 50,
                flexGrow: bottom ? 0 : 1,
              }}
              onPress={close}
            />
          </View>
          <TouchableOpacity
            onPress={close}
            activeOpacity={1}
            style={{ width: bottom ? 0 : 20, height: "100%" }}
          />
        </View>
      </NativeModal>
    </>
  )
}

Modal.displayName = ComponentName.Modal

export default Modal
