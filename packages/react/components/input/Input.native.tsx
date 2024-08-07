import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  Animated,
  Keyboard,
  NativeSyntheticEvent,
  Platform,
  PlatformOSType,
  StyleSheet,
  TextInput,
  TextInputSubmitEditingEventData,
  TouchableOpacity,
  View,
} from 'react-native'
import { AlertState, getAlertStyle } from '@/objects/facets/Alert'
import { Alignable } from '@/objects/facets/Alignable'
import { TrilogyColor, getColorStyle } from '@/objects/facets/Color'
import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName, IconSize } from '@/components/icon'
import { Text } from '@/components/text'
import {
  InputAutoCapitalize,
  InputKeyboardAppearance,
  InputKeyboardType,
  InputStatus,
  InputTextContentType,
  InputType,
} from './InputEnum'
import { InputNativeEvents, InputProps } from './InputProps'
import { AutoCompleteProps } from './autocomplete'
import AutoComplete from './autocomplete/AutoComplete.native'
import InputGauge from './gauge/InputGauge.native'

export interface InputNativeProps extends InputProps, InputNativeEvents {}

/**
 * Input Native Component
 * @param name {string} Input name
 * @param disabled {boolean} Disabled input
 * @param onChange {Function} OnChange Input Event
 * @param onFocus {Function} OnFocus Input Event
 * @param onBlur {Function} OnBlur Input Event
 * @param placeholder {string} Placeholder Input
 * @param type {InputType} Type for input
 * @param defaultValue {string} Default Value for Input
 * @param status {InputStatus} Input with status - (SUCCESS|WARNING|ERROR|DEFAULT)
 * @param help {string} Help for input
 * @param hasIcon {boolean} Input Has Icon, Precise IconName with customIcon
 * @param ref Pass a ref for input
 * @param customIcon {IconName} Adding if you want custom icon
 * @param keyboardStyle {InputKeyboardAppearance} Custom appearance for keyboard
 * @param autoCapitalize {InputAutoCapitalize} Capitalize => NONE | SENTENCES | WORDS | CHARS
 * @param autoCorrect {boolean} Auto correct sentence
 * @param autoCompleteType {InputAutoCompleteType} Auto complete input type
 * @param textContentType {InputTextContentType} Give the keyboard and the system information
 * @param keyboardType {InputKeyboardType} Keybaord type
 * @param keyType {KeyType} Keyboard key return type
 * @param onSubmit {Function} onSubmit
 * @param maxLength {number} Textarea max length
 * @param accessibilityLabel {string} Accessibility label
 * @param testId {string} Test Id for Test Integration
 * @param required {boolean} Required input
 * @param accessibilityActivate {boolean}
 */
const Input = ({
  defaultValue,
  name,
  onChange,
  onFocus,
  onBlur,
  disabled,
  status,
  help,
  placeholder,
  type,
  hasIcon,
  customIcon,
  reference,
  keyboardStyle,
  autoCapitalize,
  autoCorrect,
  autoCompleteType,
  textContentType,
  keyboardType,
  keyType,
  onSubmit,
  maxLength,
  testId,
  accessibilityLabel,
  customIconRight,
  customIconLeft,
  securityGauge,
  validationRules,
  onIconClick,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  required,
  ...others
}: InputNativeProps): JSX.Element => {
  const inputTestId = testId ? testId : placeholder ? placeholder : 'NotSpecified'
  const inputAccessibilityLabel = accessibilityLabel ? accessibilityLabel : placeholder ? placeholder : 'NotSpecified'
  const animationDuration = 200
  const placeholderDefaultSize = 20
  const inputIcon = new Map()
  const inputColor = getColorStyle(TrilogyColor.MAIN)
  inputIcon.set(InputStatus.SUCCESS, IconName.CHECK_CIRCLE)
  inputIcon.set(InputStatus.WARNING, IconName.EXCLAMATION_CIRCLE)
  inputIcon.set(InputStatus.ERROR, IconName.EXCLAMATION_CIRCLE)

  const [value, setValue] = useState<string>(defaultValue || '')
  const [email, setEmail] = useState<string>('')
  const [isFocused, setIsFocused] = useState(false)
  const [iconPassword, setIconPassword] = useState(IconName.EYE)
  const [dynamicPlaceholder, setDynamicPlaceholder] = useState<boolean>(false)
  const [isKeyboardVisible, setKeyboardVisible] = useState<null | boolean>(null)

  const animation = useRef(new Animated.Value(25)).current
  const sizeAnimation = useRef(new Animated.Value(placeholderDefaultSize)).current

  const paddingTopByPlatform = (os: PlatformOSType, dynamicPlaceholder: boolean): number => {
    if (dynamicPlaceholder && type !== InputType.SEARCH && os === 'ios') {
      return isFocused ? 9 : 10
    }

    if (dynamicPlaceholder && type !== InputType.SEARCH && os === 'android') {
      return isFocused ? 14 : 15
    }

    return 0
  }

  const handleChange = useCallback((text: string) => {
    setValue(text)
    setEmail('')
    const domain = text.split('@')?.[1]
    if (domain) {
      const domains = ['gmail.com', 'bbox.fr']
      domains.forEach((item) => {
        const domainSplit = domain.split('')
        const itemSplit = item.split('').slice(0, domainSplit.length)
        if (JSON.stringify(domainSplit) == JSON.stringify(itemSplit)) setEmail(item.slice(domain.length))
      })
    }
  }, [])

  const handleClick = () => {
    setValue(value + email)
    setEmail('')
  }

  const handleSubmit = (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
    onSubmit?.(e)
    type === InputType.EMAIL && handleClick()
  }

  useEffect(() => {
    setValue(defaultValue || '')
  }, [defaultValue, placeholder])

  useEffect(() => {
    if (value && value.length > 0 && placeholder && placeholder.length > 0) {
      setDynamicPlaceholder(true)
    } else {
      setDynamicPlaceholder(false)
    }
  }, [placeholder, value])

  useEffect(() => {
    if (dynamicPlaceholder && type !== InputType.SEARCH) {
      Animated.timing(animation, {
        toValue: 3,
        duration: animationDuration,
        useNativeDriver: false,
      }).start()
      Animated.timing(sizeAnimation, {
        toValue: 12,
        duration: animationDuration,
        useNativeDriver: false,
      }).start()
    } else {
      Animated.timing(animation, {
        toValue: 25,
        duration: animationDuration,
        useNativeDriver: false,
      }).start()
      Animated.timing(sizeAnimation, {
        toValue: placeholderDefaultSize,
        duration: animationDuration,
        useNativeDriver: false,
      }).start()
    }
  }, [dynamicPlaceholder, animation, sizeAnimation])

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true))
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false))

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [])

  useEffect(() => {
    handleClick()
  }, [isKeyboardVisible])

  const styles = StyleSheet.create({
    input: {
      paddingLeft:
        ((customIconLeft || type === InputType.SEARCH) && 40) ||
        (((customIconLeft && isFocused) || (type === InputType.SEARCH && isFocused)) && 39) ||
        (!customIconLeft && type !== InputType.SEARCH && isFocused && 9) ||
        10,
      paddingRight: ((customIcon || customIconRight || type === InputType.SEARCH) && 32) || 0,
      marginTop: paddingTopByPlatform(Platform.OS, dynamicPlaceholder),
      width: hasIcon && (status || customIcon) ? '85%' : '95%',
      height: 46,
      color: disabled ? getColorStyle(TrilogyColor.DISABLED) : inputColor,
    },
    dynamicPlaceholder: {
      position: 'absolute',
      left: customIconLeft ? 40 : 10,
      color: getColorStyle(TrilogyColor.NEUTRAL),
    },
    help: {
      fontSize: 12,
      color:
        (status && status === 'success' && getAlertStyle(AlertState.SUCCESS)) ||
        (status && status === 'warning' && getAlertStyle(AlertState.WARNING)) ||
        (status && status === 'error' && getAlertStyle(AlertState.ERROR)) ||
        (status && status === 'default' && inputColor) ||
        (disabled && getColorStyle(TrilogyColor.DISABLED)) ||
        inputColor,
      paddingLeft: 4,
      paddingTop: 2,
    },
    inputWrapper: {
      position: 'relative',
      justifyContent: 'center',
      alignSelf: 'stretch',
      backgroundColor: disabled ? getColorStyle(TrilogyColor.DISABLED, 1) : getColorStyle(TrilogyColor.BACKGROUND),
      borderWidth: isFocused ? 2 : 1,
      borderRadius: 3,
      borderColor:
        (status && status === 'success' && getAlertStyle(AlertState.SUCCESS)) ||
        (status && status === 'warning' && getAlertStyle(AlertState.WARNING)) ||
        (status && status === 'error' && getAlertStyle(AlertState.ERROR)) ||
        (status && status === 'default' && inputColor) ||
        (isFocused && getColorStyle(TrilogyColor.MAIN)) ||
        getColorStyle(TrilogyColor.FONT, 1),
      height: 46,
      width: '100%',
    },
    inputContainer: {
      height: 46,
      width: 46,
      position: 'absolute',
      right: 0,
      justifyContent: 'center',
    },
    inputContainerLeft: {
      height: 46,
      width: 46,
      position: 'absolute',
      left: 0,
      justifyContent: 'center',
    },
    inputContainerRight: {
      height: 46,
      width: 46,
      position: 'absolute',
      right: 0,
      justifyContent: 'center',
    },
    inputIcon: {
      position: 'absolute',
      right: 10,
      top: !value ? -33 : -38,
    },
    inputIconLeft: {
      position: 'absolute',
      left: 10,
      top: !value ? -33 : -38,
    },
    text: {
      zIndex: -1,
      position: 'absolute',
      fontSize: 14,
      color: getColorStyle(TrilogyColor.BACKGROUND),
      bottom: Platform.OS === 'ios' ? 9 : 5,
      left: customIconLeft ? (Platform.OS === 'ios' ? 38 : 37.5) : Platform.OS === 'ios' ? 8 : 7.5,
    },
    domain: {
      zIndex: 1,
      color: getColorStyle(TrilogyColor.NEUTRAL),
      fontSize: 13,
      height: '100%',
      marginTop: 3,
      marginBottom: Platform.OS === 'ios' ? 0 : -3,
    },
  })

  return (
    <View
      style={{ width: '100%' }}
      accessible={!!inputAccessibilityLabel}
      accessibilityLabel={inputAccessibilityLabel}
      testID={inputTestId}
    >
      <View testID='input-wrapper-id' style={styles.inputWrapper}>
        {dynamicPlaceholder && type !== InputType.SEARCH && (
          <Animated.Text style={[styles.dynamicPlaceholder, { top: animation, fontSize: sizeAnimation }]}>
            {placeholder}
          </Animated.Text>
        )}

        <TextInput
          testID='input-id'
          clearTextOnFocus={false}
          secureTextEntry={!!(type && type === InputType.PASSWORD && iconPassword === IconName.EYE)}
          value={value}
          editable={!disabled}
          ref={reference}
          maxLength={maxLength}
          autoCapitalize={autoCapitalize || InputAutoCapitalize.NONE}
          keyboardAppearance={keyboardStyle || InputKeyboardAppearance.DEFAULT}
          autoCorrect={autoCorrect || false}
          autoComplete={autoCompleteType}
          returnKeyType={keyType}
          textContentType={textContentType || InputTextContentType.NONE}
          keyboardType={keyboardType || InputKeyboardType.DEFAULT}
          onSubmitEditing={handleSubmit}
          onChangeText={(text: string) => {
            handleChange(text)
            if (onChange) {
              onChange({
                inputName: (name && name) || '',
                inputValue: text,
                inputSelectionStart: null,
              })
            }
          }}
          onFocus={(e) => {
            setIsFocused(true)
            onFocus?.(e)
          }}
          onBlur={(e) => {
            setIsFocused(false)
            onBlur?.(e)
          }}
          placeholder={placeholder}
          placeholderTextColor={disabled ? getColorStyle(TrilogyColor.DISABLED) : getColorStyle(TrilogyColor.MAIN)}
          style={styles.input}
          {...others}
        />
        {type === 'email' && (
          <Text style={styles.text}>
            {value}
            <Text style={styles.domain}>{email}</Text>
          </Text>
        )}
        {hasIcon &&
          ((status && status !== InputStatus.DEFAULT) || customIconLeft) &&
          type !== InputType.PASSWORD &&
          !customIcon && (
            <Icon
              style={styles.inputIconLeft}
              align={Alignable.ALIGNED_START}
              name={
                (customIconLeft && customIconLeft.replace('tri-', '').replace('ui-', '')) ||
                inputIcon.get(status).replace('tri-', '').replace('ui-', '')
              }
              size={IconSize.SMALL}
              color={
                (status && status === 'success' && (AlertState.SUCCESS)) ||
                (status && status === 'warning' && (AlertState.WARNING)) ||
                (status && status === 'error' && (AlertState.ERROR)) ||
                (status && status === 'default' && TrilogyColor.MAIN) ||
                (disabled && (TrilogyColor.DISABLED)) ||
                TrilogyColor.MAIN
              }
            />
          )}
        {hasIcon &&
          type !== InputType.SEARCH &&
          ((status && status !== InputStatus.DEFAULT) || customIcon || customIconRight) &&
          type !== InputType.PASSWORD && (
            <TouchableOpacity
              style={styles.inputContainer}
              activeOpacity={onIconClick ? 0.2 : 1}
              onPress={() => {
                onIconClick?.({
                  inputName: (name && name) || '',
                  inputValue: value,
                })
              }}
            >
              <Icon
                testId='icon-status-id'
                align={Alignable.ALIGNED_CENTER}
                name={
                  (customIcon && customIcon.replace('tri-', '').replace('ui-', '')) ||
                  (customIconRight && customIconRight.replace('tri-', '').replace('ui-', '')) ||
                  inputIcon.get(status).replace('tri-', '').replace('ui-', '')
                }
                size={IconSize.SMALL}
                color={
                  (status && status === 'success' && (AlertState.SUCCESS)) ||
                  (status && status === 'warning' && (AlertState.WARNING)) ||
                  (status && status === 'error' && (AlertState.ERROR)) ||
                  (status && status === 'default' && TrilogyColor.MAIN) ||
                  (disabled && (TrilogyColor.DISABLED)) ||
                  TrilogyColor.MAIN
                }
              />
            </TouchableOpacity>
          )}
        {hasIcon && type === InputType.PASSWORD && (
          <>
            {hasIcon && customIconLeft && (
              <View style={[{ paddingLeft: 10 }, styles.inputContainerLeft]}>
                <Icon name={customIconLeft} />
              </View>
            )}
            <TouchableOpacity
              style={styles.inputContainerRight}
              onPress={() => {
                onIconClick?.({
                  inputName: (name && name) || '',
                  inputValue: value,
                })
                if (iconPassword === IconName.EYE) {
                  setIconPassword(IconName.EYE_SLASH)
                } else {
                  setIconPassword(IconName.EYE)
                }
              }}
            >
              <Icon
                testId='password-id'
                align={Alignable.ALIGNED_CENTER}
                name={iconPassword}
                size={IconSize.SMALL}
                color={
                  (status && status === 'success' && (AlertState.SUCCESS)) ||
                  (status && status === 'warning' && (AlertState.WARNING)) ||
                  (status && status === 'error' && (AlertState.ERROR)) ||
                  (status && status === 'default' && TrilogyColor.MAIN) ||
                  (disabled && (TrilogyColor.DISABLED)) ||
                  TrilogyColor.MAIN
                }
              />
            </TouchableOpacity>
          </>
        )}
        {type === InputType.SEARCH && !status && (
          <>
            <View style={styles.inputContainerLeft}>
              <Icon
                align={Alignable.ALIGNED_CENTER}
                name={IconName.SEARCH}
                size={IconSize.SMALL}
                color={disabled ? (TrilogyColor.DISABLED) : (TrilogyColor.NEUTRAL)}
              />
            </View>
            {value.length > 0 && (
              <TouchableOpacity
                testID='search-id'
                style={styles.inputContainerRight}
                onPressIn={() => {
                  onChange?.({
                    inputName: (name && name) || '',
                    inputValue: '',
                    inputSelectionStart: null,
                  })
                  onIconClick?.({
                    inputName: (name && name) || '',
                    inputValue: '',
                  })
                  setValue('')
                }}
              >
                <Icon
                  align={Alignable.ALIGNED_CENTER}
                  name={IconName.TIMES_CIRCLE}
                  size={IconSize.SMALL}
                  color={disabled ? (TrilogyColor.DISABLED) : (TrilogyColor.NEUTRAL)}
                />
              </TouchableOpacity>
            )}
          </>
        )}
      </View>
      {help && (
        <Text testId='help-id' style={styles.help}>
          {help}
        </Text>
      )}
      {type === InputType.PASSWORD && securityGauge && (
        <InputGauge validationRules={validationRules} inputValue={value} />
      )}
    </View>
  )
}

Input.displayName = ComponentName.Input

Input.AutoComplete = (props: AutoCompleteProps) => {
  const newProps = { ...props, Input }
  return <AutoComplete {...newProps} />
}

export default Input
