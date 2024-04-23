import React, { forwardRef, useEffect, useRef, useState } from "react"
import { Animated, StyleSheet, Text, TextInput, View } from "react-native"
import { TextareaNativeProps } from "./TextareaProps"
import {
  InputAutoCapitalize,
  InputKeyboardAppearance,
  InputKeyboardType,
  InputTextContentType,
} from "../input/InputEnum"
import { getColorStyle, TrilogyColor } from "../../objects/facets/Color"
import { AlertState, getAlertStyle } from "../../objects/facets/Alert"
import { Icon, IconColor } from "../icon"
import { ComponentName } from "../enumsComponentsName"

/**
 * Textarea Native Component
 * @param name {string} Textarea name
 * @param disabled {boolean} Disabled input
 * @param onChange {Function} OnChange Input Event
 * @param placeholder {string} Placeholder Input
 * @param defaultValue {string} Default Value for Input
 * @param help {string} Help for input
 * @param ref Pass a ref for textarea
 * @param keyboardStyle {InputKeyboardAppearance} Custom appearance for keyboard
 * @param autoCapitalize {InputAutoCapitalize} Capitalize => NONE | SENTENCES | WORDS | CHARS
 * @param status {InputStatus} Textarea with status - (SUCCESS|WARNING|ERROR|DEFAULT)
 * @param autoCorrect {boolean} Auto correct sentence
 * @param autoCompleteType {InputAutoCompleteType} Auto complete input type
 * @param textContentType {InputTextContentType} Give the keyboard and the system information
 * @param keyboardType {InputKeyboardType} Keybaord type
 * @param maxLength {number} Textarea max length
 */
const Textarea = (
  {
    defaultValue,
    name,
    onChange,
    disabled,
    help,
    placeholder,
    keyboardStyle,
    autoCapitalize,
    autoCorrect,
    textContentType,
    keyboardType,
    status,
    maxLength,
    dynamicPlaceholder = true,
    label,
    iconName,
    statusIconName,
    customHeight = 120,
    value,
    ...others
  }: TextareaNativeProps,
  // eslint-disable-next-line
  ref: any
): JSX.Element => {
  const [_value, setValue] = useState<string>(value || "")

  const [isFocus, setIsFocus] = useState<boolean>(false)
  const [height, setHeight] = useState<number>(customHeight)

  const [displayDynamicLabel, setDisplayDynamicLabel] =
    useState<boolean>(false)
  const textareaColor = isFocus
    ? getColorStyle(TrilogyColor.MAIN)
    : getColorStyle(TrilogyColor.GREY_LIGHT)

  const animation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (displayDynamicLabel) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: false,
      }).start()
    }
  }, [displayDynamicLabel, animation])

  const styles = StyleSheet.create({
    textarea: {
      borderWidth: isFocus ? 2 : 1,
      borderRadius: 3,
      borderColor:
        (status && status === "success" && getAlertStyle(AlertState.SUCCESS)) ||
        (status && status === "warning" && getAlertStyle(AlertState.WARNING)) ||
        (status && status === "error" && getAlertStyle(AlertState.ERROR)) ||
        (status && status === "default" && textareaColor) ||
        textareaColor,
      height,
      justifyContent: "flex-start",
      paddingLeft: iconName ? 48 : 16,
      paddingRight: maxLength ? 48 : 16,
      paddingTop: dynamicPlaceholder && displayDynamicLabel ? 24 : 8,
      textAlignVertical: "top",
      color: getColorStyle(TrilogyColor.MAIN),
      backgroundColor: disabled
        ? getColorStyle(TrilogyColor.DISABLED)
        : getColorStyle(TrilogyColor.WHITE),
      /*  width: '',*/
    },
    help: {
      fontSize: 12,
      color:
        (status && status === "success" && getAlertStyle(AlertState.SUCCESS)) ||
        (status && status === "warning" && getAlertStyle(AlertState.WARNING)) ||
        (status && status === "error" && getAlertStyle(AlertState.ERROR)) ||
        (status && status === "default" && textareaColor) ||
        textareaColor,
      paddingLeft: 4,
      paddingTop: 2,
    },
    counter: {
      fontSize: 10,
      color: getColorStyle(TrilogyColor.MAIN),
      position: "absolute",
      bottom: help ? 24 : 8,
      right: 8,
      backgroundColor: disabled
        ? getColorStyle(TrilogyColor.DISABLED)
        : "white",
      padding: 3,
    },
    dynamicLabel: {
      position: "absolute",
      top: 2,
      left: iconName ? 40 : 8,
      fontSize: 12,
      color: getColorStyle(TrilogyColor.GREY_DARK),
      backgroundColor: "transparent",
      padding: 8,
      paddingBottom: 4,
    },
    leftIcon: {
      position: "absolute",
      top: 16,
      left: 16,
    },
    rightIcon: {
      position: "absolute",
      top: dynamicPlaceholder ? 16 : 32,
      right: 16,
    },
  })

  return (
    <View>
      {!dynamicPlaceholder && <Text>{label}</Text>}

      {iconName && (
        <Icon style={styles.leftIcon} name={iconName} size='small' />
      )}

      <TextInput
        maxLength={maxLength}
        value={_value}
        defaultValue={defaultValue}
        editable={!disabled}
        multiline={true}
        keyboardAppearance={keyboardStyle || InputKeyboardAppearance.DEFAULT}
        autoCapitalize={autoCapitalize || InputAutoCapitalize.NONE}
        autoCorrect={autoCorrect || false}
        textContentType={textContentType || InputTextContentType.NONE}
        keyboardType={keyboardType || InputKeyboardType.DEFAULT}
        onChangeText={(text) => {
          setDisplayDynamicLabel(text.length > 0)
          setValue(text)
          if (onChange) {
            onChange({
              textareaName: (name && name) || "",
              textareaValue: text,
            })
          }
        }}
        placeholder={placeholder}
        style={styles.textarea}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        {...others}
        ref={ref}
        onContentSizeChange={(event) =>
          _value.length > 0 &&
          setHeight(event.nativeEvent.contentSize.height + 33)
        }
      />

      {statusIconName && (
        <Text style={styles.rightIcon}>
          <Icon
            name={statusIconName}
            size='small'
            color={status && (status.toUpperCase() as IconColor)}
          />
        </Text>
      )}

      {displayDynamicLabel && dynamicPlaceholder && (
        <Text style={styles.dynamicLabel}>{label}</Text>
      )}
      {maxLength && (
        <Text style={styles.counter}>
          {value ? `${value?.length} / ${maxLength}` : `0 / ${maxLength}`}
        </Text>
      )}
      {help && <Text style={styles.help}>{help}</Text>}
    </View>
  )
}

Textarea.displayName = ComponentName.Textarea

export default forwardRef(Textarea)
