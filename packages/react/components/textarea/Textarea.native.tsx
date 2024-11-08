import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconColor } from '@/components/icon'
import {
  InputAutoCapitalize,
  InputKeyboardAppearance,
  InputKeyboardType,
  InputTextContentType,
} from '@/components/input/InputEnum'
import { grayscale, TypographyColor } from '@/objects'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { StatusState } from '@/objects/facets/Status'
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { Animated, StyleSheet, Text, TextInput, View } from 'react-native'
import { Spacer, SpacerSize } from '../spacer'
import { Text as TrilogyText } from '../text'
import { TextLevels } from '../text/TextEnum'
import { TextareaNativeProps } from './TextareaProps'

/**
 * Textarea Component
 * @param disabled {boolean} Disabled textarea
 * @param label {string} Label for textarea
 * @param sample {string} Sample for textarea (below label)
 * @param name {string} Textarea name
 * @param onChange {Function} OnChange textarea Event
 * @param placeholder {string} Placeholder textarea
 * @param defaultValue {string} Default Value for textarea
 * @param help {string} Help for textarea
 * @param ref Pass a ref for textarea
 * @param maxLength {number} Textarea max length
 * @param rows {number} Textarea rows
 * @param iconName {IconName | IconNameValues} display Icon
 * @param statusIconName {IconName | IconNameValues} display status Icon
 * @param testId {string} Test Id for Test Integration
 * @param dynamicPlaceholder {boolean}
 * @param status {InputStatus} Textarea with status - (SUCCESS|WARNING|ERROR|DEFAULT)
 * @param keyboardStyle {InputKeyboardAppearance} Custom appearance for keyboard
 * @param autoCapitalize {InputAutoCapitalize} Capitalize => NONE | SENTENCES | WORDS | CHARS
 * @param autoCorrect {boolean} Auto correct sentence
 * @param autoCompleteType {InputAutoCompleteType} Auto complete input type
 * @param textContentType {InputTextContentType} Give the keyboard and the system information
 * @param keyboardType {InputKeyboardType} Keybaord type
 * @param value {string} Value for textarea
 * @param customHeight {number} custom textarea height
 * @param required {boolean} Required
 */
const Textarea = (
  {
    defaultValue,
    name,
    sample,
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
    iconNameLeft,
    iconNameRight,
    customHeight = 120,
    value,
    required,
    ...others
  }: TextareaNativeProps,
  // eslint-disable-next-line
  ref: any,
): JSX.Element => {
  const [_value, setValue] = useState<string>(value || '')

  const [isFocus, setIsFocus] = useState<boolean>(false)

  const [displayDynamicLabel, setDisplayDynamicLabel] = useState<boolean>(false)
  const textareaColor = isFocus ? getColorStyle(TrilogyColor.MAIN) : getColorStyle(TrilogyColor.NEUTRAL)

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
        (status && status === 'success' && getColorStyle(StatusState.SUCCESS)) ||
        (status && status === 'warning' && getColorStyle(StatusState.WARNING)) ||
        (status && status === 'error' && getColorStyle(StatusState.ERROR)) ||
        (status && status === 'default' && textareaColor) ||
        textareaColor,
      height: customHeight,
      justifyContent: 'flex-start',
      paddingLeft: iconNameLeft ? 48 : 16,
      paddingRight: maxLength ? 48 : 16,
      paddingTop: dynamicPlaceholder && displayDynamicLabel ? 24 : 8,
      textAlignVertical: 'top',
      color: getColorStyle(TrilogyColor.MAIN),
      backgroundColor: disabled ? getColorStyle(TrilogyColor.DISABLED_FADE) : getColorStyle(TrilogyColor.BACKGROUND),
      /*  width: '',*/
    },
    help: {
      fontSize: 12,
      color:
        (status && status === 'success' && getColorStyle(StatusState.SUCCESS)) ||
        (status && status === 'warning' && getColorStyle(StatusState.WARNING)) ||
        (status && status === 'error' && getColorStyle(StatusState.ERROR)) ||
        (status && status === 'default' && textareaColor) ||
        textareaColor,
      paddingLeft: 4,
      paddingTop: 2,
    },
    counter: {
      fontSize: 10,
      color: getColorStyle(TrilogyColor.MAIN),
      position: 'absolute',
      bottom: help ? 24 : 8,
      right: 8,
      backgroundColor: disabled ? getColorStyle(TrilogyColor.DISABLED) : 'white',
      padding: 3,
    },
    dynamicLabel: {
      position: 'absolute',
      top: 2,
      left: iconNameLeft ? 40 : 8,
      fontSize: 12,
      color: grayscale(getColorStyle(TrilogyColor.FONT)),
      backgroundColor: 'transparent',
      padding: 8,
      paddingBottom: 4,
    },
    leftIcon: {
      position: 'absolute',
      top: (dynamicPlaceholder && 16) || (!dynamicPlaceholder && label && sample && 60) || 55,
      left: 16,
      zIndex: 10,
    },
    rightIcon: {
      position: 'absolute',
      top: (dynamicPlaceholder && 16) || (!dynamicPlaceholder && label && sample && 60) || 55,
      right: 16,
      zIndex: 10,
    },
  })

  return (
    <View>
      {!dynamicPlaceholder && label && (
        <>
          <TrilogyText typo={TypographyColor.TEXT_DISABLED}>
            {label} {label && required && <TrilogyText typo={TypographyColor.TEXT_ERROR}>*</TrilogyText>}
          </TrilogyText>
          <Spacer size={SpacerSize.THREE} />
        </>
      )}

      {!dynamicPlaceholder && label && sample && (
        <>
          <TrilogyText level={TextLevels.THREE} typo={TypographyColor.TEXT_DISABLED}>
            {sample}
          </TrilogyText>
          <Spacer size={SpacerSize.THREE} />
        </>
      )}

      {iconNameLeft && (
        <Text style={styles.leftIcon}>
          <Icon name={iconNameLeft} size='small' />
        </Text>
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
              textareaName: (name && name) || '',
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
        placeholderTextColor={
          disabled ? getColorStyle(TrilogyColor.DISABLED) : grayscale(getColorStyle(TrilogyColor.FONT))
        }
      />

      {iconNameRight && (
        <Text style={styles.rightIcon}>
          <Icon name={iconNameRight} size='small' color={status && (status.toUpperCase() as IconColor)} />
        </Text>
      )}

      {displayDynamicLabel && dynamicPlaceholder && <Text style={styles.dynamicLabel}>{label}</Text>}
      {maxLength && (
        <Text style={styles.counter}>{_value ? `${_value?.length} / ${maxLength}` : `0 / ${maxLength}`}</Text>
      )}
      {help && <Text style={styles.help}>{help}</Text>}
    </View>
  )
}

Textarea.displayName = ComponentName.Textarea

export default forwardRef(Textarea)
