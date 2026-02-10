import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconColor } from '@/components/icon'
import {
  InputAutoCapitalize,
  InputKeyboardAppearance,
  InputKeyboardType,
  InputTextContentType,
} from '@/components/input/InputEnum'
import { TypographyColor } from '@/objects'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { StatusState } from '@/objects/facets/Status'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { SpacerSize } from '../spacer'
import { Text as TrilogyText } from '../text'
import { TextLevels } from '../text/TextEnum'
import { TextareaNativeProps, TextareaNativeRef } from './TextareaProps'

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
 * @param iconNameLeft {IconName | IconNameValues} display Icon on the left
 * @param iconNameRight {IconName | IconNameValues} display Icon on the right
 * @param testId {string} Test Id for Test Integration
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
const Textarea = React.forwardRef<TextareaNativeRef, TextareaNativeProps>(
  (
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
      label,
      iconNameLeft,
      iconNameRight,
      customHeight = 120,
      value,
      required,
      ...others
    },
    ref,
  ): JSX.Element => {
    const [_value, setValue] = useState<string>(value || '')
    const [isFocus, setIsFocus] = useState<boolean>(false)
    const getTextareaColor = isFocus ? TrilogyColor.MAIN : TrilogyColor.NEUTRAL

    const getStatusColor =
      status === 'success'
        ? StatusState.SUCCESS
        : status === 'warning'
        ? StatusState.WARNING
        : status === 'error'
        ? StatusState.ERROR
        : getTextareaColor

    const borderColorTextarea = getColorStyle(getStatusColor)
    const helpColor = getColorStyle(getStatusColor)
    const colorTextarea = getColorStyle(TrilogyColor.MAIN)
    const backgroundColorTeaxtarea = getColorStyle(disabled ? TrilogyColor.DISABLED_FADE : TrilogyColor.BACKGROUND)
    const counterColor = getColorStyle(TrilogyColor.MAIN)
    const counterBackground = getColorStyle(disabled ? TrilogyColor.DISABLED : TrilogyColor.BACKGROUND)
    const placeholderTextColor = getColorStyle(disabled ? TrilogyColor.DISABLED : TrilogyColor.FONT_PLACEHOLDER)

    const styles = StyleSheet.create({
      textarea: {
        borderWidth: isFocus ? 2 : 1,
        borderRadius: 3,
        borderColor: borderColorTextarea,
        height: customHeight,
        justifyContent: 'flex-start',
        paddingLeft: (iconNameLeft && isFocus && 47) || (iconNameLeft && 48) || 16,
        paddingRight: (iconNameRight && 48) || 16,
        paddingTop: isFocus ? 10 : 11,
        textAlignVertical: 'top',
        color: colorTextarea,
        backgroundColor: backgroundColorTeaxtarea,
      },
      help: {
        fontSize: 12,
        color: helpColor,
        paddingLeft: 4,
        paddingTop: 2,
      },
      counter: {
        fontSize: 10,
        color: counterColor,
        position: 'absolute',
        bottom: help ? 24 : 8,
        right: 8,
        backgroundColor: counterBackground,
        padding: 3,
      },
      leftIcon: {
        position: 'absolute',
        top: (label && sample && 67) || (label && !sample && 42) || 45,
        left: 16,
        zIndex: 10,
      },
      rightIcon: {
        position: 'absolute',
        top: (label && sample && 67) || (label && !sample && 42) || 45,
        right: 16,
        zIndex: 10,
      },
    })

    useEffect(() => {
      setValue(value ?? '')
    }, [value])

    return (
      <View style={{ gap: SpacerSize.THREE }}>
        {label && (
          <TrilogyText typo={TypographyColor.TEXT_MAIN}>
            {label} {label && required && <TrilogyText typo={TypographyColor.TEXT_ERROR}>*</TrilogyText>}
          </TrilogyText>
        )}

        {sample && (
          <TrilogyText level={TextLevels.THREE} typo={TypographyColor.TEXT_MAIN}>
            {sample}
          </TrilogyText>
        )}

        {iconNameLeft && (
          <Text style={styles.leftIcon}>
            <Icon name={iconNameLeft} size='small' />
          </Text>
        )}

        <TextInput
          ref={ref}
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
          placeholderTextColor={placeholderTextColor}
          {...others}
        />

        {iconNameRight && (
          <Text style={styles.rightIcon}>
            <Icon name={iconNameRight} size='small' color={status && (status.toUpperCase() as IconColor)} />
          </Text>
        )}

        {maxLength && (
          <Text style={styles.counter}>{_value ? `${_value?.length} / ${maxLength}` : `0 / ${maxLength}`}</Text>
        )}
        {help && <Text style={styles.help}>{help}</Text>}
      </View>
    )
  },
)

Textarea.displayName = ComponentName.Textarea

export default Textarea
