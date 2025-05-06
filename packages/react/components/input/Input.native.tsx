import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName, IconSize } from '@/components/icon'
import { Text, TextLevels } from '@/components/text'
import { isIOS } from '@/helpers/device.native'
import { grayscale, TypographyColor } from '@/objects'
import { Alignable } from '@/objects/facets/Alignable'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { StatusState } from '@/objects/facets/Status'
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
import { Spacer, SpacerSize } from '../spacer'
import {
  InputAutoCapitalize,
  InputKeyboardAppearance,
  InputKeyboardType,
  InputStatus,
  InputTextContentType,
  InputType,
} from './InputEnum'
import { InputNativeEvents, InputNativeRef, InputProps } from './InputProps'
import InputGauge from './gauge/InputGauge.native'

export interface InputNativeProps extends InputProps, InputNativeEvents {}

/**
 * Input Native Component
 * @param name {string} Input name
 * @param label {string} Label for input
 * @param sample {string} Sample for input (below label)
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
 * @param readOnly {boolean} Read only input
 */
const Input = React.forwardRef<InputNativeRef, InputNativeProps>(
  (
    {
      defaultValue,
      name,
      label,
      sample,
      onChange,
      onFocus,
      onBlur,
      disabled,
      status,
      help,
      placeholder,
      type,
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
      iconNameLeft,
      iconNameRight,
      securityGauge,
      validationRules,
      onIconClick,
      required,
      readOnly,
      ...others
    },
    ref,
  ): JSX.Element => {
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
        return 10
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

    const hasIcon = iconNameLeft || iconNameRight || false

    const styles = StyleSheet.create({
      input: {
        paddingLeft:
          (((iconNameLeft && isFocused) || (type === InputType.SEARCH && isFocused)) && 39) ||
          ((iconNameLeft || type === InputType.SEARCH) && 40) ||
          (!iconNameLeft && type !== InputType.SEARCH && isFocused && 9) ||
          10,
        paddingRight: ((iconNameRight || type === InputType.SEARCH) && 32) || 0,
        marginTop: paddingTopByPlatform(Platform.OS, dynamicPlaceholder),
        width: hasIcon && status ? '85%' : '95%',
        height: 46,
        color: disabled ? getColorStyle(TrilogyColor.DISABLED) : inputColor,
      },
      dynamicPlaceholder: {
        position: 'absolute',
        left: iconNameLeft ? 40 : 10,
        color: grayscale(getColorStyle(TrilogyColor.FONT)),
        marginTop: isFocused ? -1 : 0,
        marginLeft: isFocused ? -1 : 0,
      },
      help: {
        fontSize: 12,
        color:
          (status && status === 'success' && getColorStyle(StatusState.SUCCESS)) ||
          (status && status === 'warning' && getColorStyle(StatusState.WARNING)) ||
          (status && status === 'error' && getColorStyle(StatusState.ERROR)) ||
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
        backgroundColor: disabled ? getColorStyle(TrilogyColor.DISABLED_FADE) : getColorStyle(TrilogyColor.BACKGROUND),
        borderWidth: isFocused ? 2 : 1,
        borderRadius: 3,
        borderColor:
          (status && status === 'success' && getColorStyle(StatusState.SUCCESS)) ||
          (status && status === 'warning' && getColorStyle(StatusState.WARNING)) ||
          (status && status === 'error' && getColorStyle(StatusState.ERROR)) ||
          (status && status === 'default' && inputColor) ||
          (isFocused && getColorStyle(TrilogyColor.MAIN)) ||
          getColorStyle(TrilogyColor.NEUTRAL),
        height: 46,
        width: '100%',
      },
      inputContainer: {
        height: 46,
        width: 46,
        position: 'absolute',
        right: isFocused ? -1 : 0,
        justifyContent: 'center',
      },
      inputContainerLeft: {
        height: 46,
        width: 46,
        position: 'absolute',
        left: isFocused ? -1 : 0,
        justifyContent: 'center',
      },
      inputContainerRight: {
        height: 46,
        width: 46,
        position: 'absolute',
        right: isFocused ? -1 : 0,
        justifyContent: 'center',
      },
      inputIconLeft: {
        position: 'absolute',
        left: isFocused ? 9 : 10,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        zIndex: -1,
        position: 'absolute',
        fontSize: 14,
        color: getColorStyle(TrilogyColor.BACKGROUND),
        bottom: isIOS ? 9 : 5,
        left: iconNameLeft ? (isIOS ? 38 : 37.5) : isIOS ? 8 : 7.5,
      },
      domain: {
        zIndex: 1,
        color: getColorStyle(TrilogyColor.NEUTRAL),
        fontSize: 13,
        height: '100%',
        marginTop: 3,
        marginBottom: isIOS ? 0 : -3,
      },
    })

    return (
      <View
        style={{ width: '100%' }}
        accessible={!!inputAccessibilityLabel}
        accessibilityLabel={inputAccessibilityLabel}
        testID={inputTestId}
      >
        {!dynamicPlaceholder && label && (
          <>
            <Text typo={TypographyColor.TEXT_DISABLED}>
              {label} {label && required && <Text typo={TypographyColor.TEXT_ERROR}>*</Text>}
            </Text>
            <Spacer size={SpacerSize.THREE} />
          </>
        )}

        {!dynamicPlaceholder && label && sample && (
          <>
            <Text level={TextLevels.THREE} typo={TypographyColor.TEXT_DISABLED}>
              {sample}
            </Text>
            <Spacer size={SpacerSize.THREE} />
          </>
        )}

        <View testID='input-wrapper-id' style={styles.inputWrapper}>
          {dynamicPlaceholder && type !== InputType.SEARCH && (
            <Animated.Text style={[styles.dynamicPlaceholder, { top: animation, fontSize: sizeAnimation }]}>
              {placeholder}
            </Animated.Text>
          )}

          <TextInput
            ref={ref}
            testID='input-id'
            readOnly={readOnly}
            clearTextOnFocus={false}
            secureTextEntry={!!(type && type === InputType.PASSWORD && iconPassword === IconName.EYE)}
            value={value}
            editable={!disabled}
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
            placeholderTextColor={
              disabled ? getColorStyle(TrilogyColor.DISABLED) : getColorStyle(TrilogyColor.FONT_PLACEHOLDER)
            }
            style={styles.input}
            {...others}
          />
          {type === 'email' && (
            <Text style={styles.text}>
              {value}
              <Text style={styles.domain}>{email}</Text>
            </Text>
          )}
          {hasIcon && type !== InputType.PASSWORD && type !== InputType.SEARCH && (
            <View style={styles.inputIconLeft}>
              <Icon
                align={Alignable.ALIGNED_START}
                name={iconNameLeft as unknown as IconName}
                size={IconSize.SMALL}
                color={
                  (status && status === 'success' && StatusState.SUCCESS) ||
                  (status && status === 'warning' && StatusState.WARNING) ||
                  (status && status === 'error' && StatusState.ERROR) ||
                  (disabled && TrilogyColor.DISABLED) ||
                  TrilogyColor.MAIN
                }
              />
            </View>
          )}
          {hasIcon &&
            type !== InputType.SEARCH &&
            status &&
            status !== InputStatus.DEFAULT &&
            type !== InputType.PASSWORD && (
              <TouchableOpacity
                style={styles.inputContainer}
                activeOpacity={onIconClick ? 0.2 : 1}
                onPress={(e) => {
                  onIconClick?.({
                    inputName: (name && name) || '',
                    inputValue: value,
                    target: e,
                  })
                }}
              >
                <Icon
                  testId='icon-status-id'
                  align={Alignable.ALIGNED_CENTER}
                  name={
                    (iconNameLeft as unknown as IconName) ||
                    (iconNameRight as unknown as IconName) ||
                    inputIcon.get(status).replace('tri-', '').replace('ui-', '')
                  }
                  size={IconSize.SMALL}
                  color={
                    (status && status === 'success' && StatusState.SUCCESS) ||
                    (status && status === 'warning' && StatusState.WARNING) ||
                    (status && status === 'error' && StatusState.ERROR) ||
                    (status && TrilogyColor.MAIN) ||
                    (disabled && TrilogyColor.DISABLED) ||
                    TrilogyColor.MAIN
                  }
                />
              </TouchableOpacity>
            )}
          {type === InputType.PASSWORD && (
            <>
              {iconNameLeft && (
                <View style={[{ paddingLeft: 10 }, styles.inputContainerLeft]}>
                  <Icon name={iconNameLeft} />
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
                    (status && status === 'success' && StatusState.SUCCESS) ||
                    (status && status === 'warning' && StatusState.WARNING) ||
                    (status && status === 'error' && StatusState.ERROR) ||
                    (status && status === 'default' && TrilogyColor.MAIN) ||
                    (disabled && TrilogyColor.DISABLED) ||
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
                  color={disabled ? TrilogyColor.DISABLED : TrilogyColor.NEUTRAL}
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
                    color={disabled ? TrilogyColor.DISABLED : TrilogyColor.NEUTRAL}
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
  },
)

Input.displayName = ComponentName.Input

export default Input
