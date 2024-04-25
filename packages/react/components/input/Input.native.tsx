import React, { useCallback, useEffect, useRef, useState } from "react"
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
} from "react-native"
import { InputNativeEvents, InputProps } from "./InputProps"
import { AlertState, getAlertStyle } from "../../objects/facets/Alert"
import {
  InputAutoCapitalize,
  InputKeyboardAppearance,
  InputKeyboardType,
  InputStatus,
  InputTextContentType,
  InputType,
} from "./InputEnum"
import { Icon, IconColor, IconName, IconSize } from "../icon"
import { Text } from "../text"
import { getColorStyle, TrilogyColor } from "../../objects/facets/Color"
import { Alignable } from "../../objects/facets/Alignable"
import { ComponentName } from "../enumsComponentsName"

interface InputNativeProps extends InputProps, InputNativeEvents {}

interface IStateVerify {
  isVerify: boolean;
  color: IconColor;
}

interface IVerifies {
  [key: string]: {
    test: (e: string) => boolean;
    setVerify: (e: IStateVerify) => void;
  };
}

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
 * @param search {boolean} define if input is a search type
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
  search,
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
  const [value, setValue] = useState<string>(defaultValue || "")
  const [email, setEmail] = useState<string>("")
  const [dynamicPlaceholder, setDynamicPlaceholder] = useState<boolean>(false)
  const animationDuration = 200
  const placeholderDefaultSize = 20
  const animation = useRef(new Animated.Value(25)).current
  const sizeAnimation = useRef(
    new Animated.Value(placeholderDefaultSize)
  ).current

  useEffect(() => {
    setValue(defaultValue || "")
  }, [defaultValue, placeholder])

  useEffect(() => {
    if (value && value.length > 0 && placeholder && placeholder.length > 0) {
      setDynamicPlaceholder(true)
    } else {
      setDynamicPlaceholder(false)
    }
  }, [placeholder, value])

  useEffect(() => {
    if (dynamicPlaceholder && !search) {
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

  const inputIcon = new Map()
  inputIcon.set(InputStatus.SUCCESS, IconName.CHECK_CIRCLE)
  inputIcon.set(InputStatus.WARNING, IconName.EXCLAMATION_CIRCLE)
  inputIcon.set(InputStatus.ERROR, IconName.EXCLAMATION_CIRCLE)

  const inputColor = getColorStyle(TrilogyColor.MAIN)

  const [iconPassword, setIconPassword] = useState(IconName.EYE)

  const paddingTopByPlatform = (
    os: PlatformOSType,
    dynamicPlaceholder: boolean
  ): number => {
    if (dynamicPlaceholder && !search && os === "ios") {
      return 10
    }

    if (dynamicPlaceholder && !search && os === "android") {
      return 15
    }

    return 0
  }

  const inputTestId = testId
    ? testId
    : placeholder
    ? placeholder
    : "NotSpecified"
  const inputAccessibilityLabel = accessibilityLabel
    ? accessibilityLabel
    : placeholder
    ? placeholder
    : "NotSpecified"

  const handleChange = useCallback((text: string) => {
    setValue(text)
    setEmail("")
    const domain = text.split("@")?.[1]
    if (domain) {
      const domains = ["gmail.com", "bbox.fr"]
      domains.forEach((item) => {
        const domainSplit = domain.split("")
        const itemSplit = item.split("").slice(0, domainSplit.length)
        if (JSON.stringify(domainSplit) == JSON.stringify(itemSplit))
          setEmail(item.slice(domain.length))
      })
    }
  }, [])

  const handleClick = () => {
    setValue(value + email)
    setEmail("")
  }

  const handleSubmit = (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {
    onSubmit?.(e)
    type === InputType.EMAIL && handleClick()
  }

  const [isKeyboardVisible, setKeyboardVisible] = useState<null | boolean>(
    null
  )

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setKeyboardVisible(true)
    )
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setKeyboardVisible(false)
    )

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [])

  useEffect(() => {
    handleClick()
  }, [isKeyboardVisible])

  const initStateVerifies = { isVerify: false, color: IconColor.NEUTRAL }
  const [points, setPoints] = React.useState<number>(0)
  const [isLengthVerify, setIsLengthVerify] = React.useState(initStateVerifies)
  const [isSpecialCharsVerify, setIsSpecialCharsVerify] =
    React.useState(initStateVerifies)
  const [isNumberVerify, setIsNumberVerify] = React.useState(initStateVerifies)
  const [isUppercaseVerify, setIsUppercaseVerify] =
    React.useState(initStateVerifies)
  const [isLowerercaseVerify, setisLowerercaseVerify] =
    React.useState(initStateVerifies)
  const [nbAllVerifies, setNbAllVerifies] = React.useState<number>(0)
  const [verifies, setVerifies] = React.useState<IVerifies>({})

  const lengthVerify = {
    test: (e: string) => {
      if (validationRules?.length?.max && !validationRules.length.min) {
        return e.length > 0 && e.length <= validationRules.length.max
      }
      if (validationRules?.length?.min && !validationRules?.length?.max) {
        return e.length >= validationRules.length.min
      }
      if (validationRules?.length?.max && validationRules.length.min) {
        return (
          e.length >= validationRules.length.min &&
          e.length <= validationRules.length.max
        )
      }
      return false
    },
    setVerify: setIsLengthVerify,
  }

  const specialCharsverify = {
    // eslint-disable-next-line
    test: (e: string) => /[^\w\*]/.test(e),
    setVerify: setIsSpecialCharsVerify,
  }

  const numberVerify = {
    // eslint-disable-next-line
    test: (e: string) => /[0-9]/.test(e),
    setVerify: setIsNumberVerify,
  }

  const uppercaseVerify = {
    // eslint-disable-next-line
    test: (e: string) => /[A-Z]/.test(e),
    setVerify: setIsUppercaseVerify,
  }

  const lowercaseVerify = {
    // eslint-disable-next-line
    test: (e: string) => /[a-z]/.test(e),
    setVerify: setisLowerercaseVerify,
  }

  React.useEffect(() => {
    const data = {}
    validationRules &&
      Object.keys(validationRules).map((key) => {
        if (key === "number") Object.assign(data, { numberVerify })
        if (key === "length") Object.assign(data, { lengthVerify })
        if (key === "lowercase") Object.assign(data, { lowercaseVerify })
        if (key === "uppercase") Object.assign(data, { uppercaseVerify })
        if (key === "specialChars") Object.assign(data, { specialCharsverify })
      })
    setVerifies(data)
    setNbAllVerifies(Object.keys(data).length)
  }, [validationRules])

  const handleVerifyPwd = (e: string) => {
    const verifiesTests: boolean[] = []

    Object.keys(verifies).map((key: string) => {
      const test = verifies[key].test(e)
      verifiesTests.push(test)

      if (test) {
        verifies[key].setVerify({ isVerify: true, color: IconColor.SUCCESS })
      } else {
        verifies[key].setVerify(initStateVerifies)
      }
    })
    setPoints(verifiesTests.filter((item) => item).length)
  }

  const widthGauge = React.useMemo(() => {
    const calc = Number(((points / nbAllVerifies) * 100).toFixed(0))
    if (calc <= 50 && calc > 0) return "50%"
    if (calc <= 99 && calc > 50) return "75%"
    if (calc === 100) return "100%"
    return "0%"
  }, [points, nbAllVerifies])

  const errorColor = getColorStyle(TrilogyColor.ERROR)
  const warningColor = getColorStyle(TrilogyColor.WARNING)
  const successColor = getColorStyle(TrilogyColor.SUCCESS)

  const colorGauge = React.useMemo(() => {
    const calc = Number(((points / nbAllVerifies) * 100).toFixed(0))
    if (calc <= 50 && calc > 0) return errorColor
    if (calc <= 99 && calc > 50) return warningColor
    if (calc === 100) return successColor
    return getColorStyle(TrilogyColor.FONT, 1)
  }, [points, nbAllVerifies])

  const styles = StyleSheet.create({
    input: {
      paddingLeft: customIconLeft || search ? 40 : 10,
      paddingRight: customIcon || customIconRight || search ? 32 : 0,
      marginTop: paddingTopByPlatform(Platform.OS, dynamicPlaceholder),
      width: hasIcon && (status || customIcon) ? "85%" : "95%",
      height: 46,
      color: disabled ? getColorStyle(TrilogyColor.DISABLED) : inputColor,
    },
    dynamicPlaceholder: {
      position: "absolute",
      left: customIconLeft ? 40 : 10,
      color: getColorStyle(TrilogyColor.MAIN),
    },
    help: {
      fontSize: 12,
      color:
        (status && status === "success" && getAlertStyle(AlertState.SUCCESS)) ||
        (status && status === "warning" && getAlertStyle(AlertState.WARNING)) ||
        (status && status === "error" && getAlertStyle(AlertState.ERROR)) ||
        (status && status === "default" && inputColor) ||
        (disabled && getColorStyle(TrilogyColor.DISABLED)) ||
        inputColor,
      paddingLeft: 4,
      paddingTop: 2,
    },
    inputWrapper: {
      position: "relative",
      justifyContent: "center",
      alignSelf: "stretch",
      backgroundColor: disabled
        ? getColorStyle(TrilogyColor.DISABLED, 1)
        : getColorStyle(TrilogyColor.WHITE),
      borderWidth: 1,
      borderRadius: 3,
      borderColor:
        (status && status === "success" && getAlertStyle(AlertState.SUCCESS)) ||
        (status && status === "warning" && getAlertStyle(AlertState.WARNING)) ||
        (status && status === "error" && getAlertStyle(AlertState.ERROR)) ||
        (status && status === "default" && inputColor) ||
        getColorStyle(TrilogyColor.FONT, 1),
      height: 46,
      width: "100%",
    },
    inputContainer: {
      height: 46,
      width: 46,
      position: "absolute",
      right: 0,
      justifyContent: "center",
    },
    inputContainerLeft: {
      height: 46,
      width: 46,
      position: "absolute",
      left: 0,
      justifyContent: "center",
    },
    inputContainerRight: {
      height: 46,
      width: 46,
      position: "absolute",
      right: 0,
      justifyContent: "center",
    },
    inputIcon: {
      position: "absolute",
      right: 10,
      top: !value ? -33 : -38,
    },
    inputIconLeft: {
      position: "absolute",
      left: 10,
      top: !value ? -33 : -38,
    },
    textWhitte: {
      zIndex: -1,
      position: "absolute",
      fontSize: 14,
      color: "#ffffff00",
      bottom: Platform.OS === "ios" ? 9 : 5,
      left: customIconLeft
        ? Platform.OS === "ios"
          ? 38
          : 37.5
        : Platform.OS === "ios"
        ? 8
        : 7.5,
    },
    domain: {
      zIndex: 1,
      color: getColorStyle(TrilogyColor.NEUTRAL),
      fontSize: 13,
      height: "100%",
      marginTop: 3,
      marginBottom: Platform.OS === "ios" ? 0 : -3,
    },
    gauge: {
      backgroundColor: colorGauge,
      height: 4,
      width: widthGauge,
      borderRadius: 4,
    },
    verifies: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    containerGauge: {
      backgroundColor: getColorStyle(TrilogyColor.FONT, 1),
      height: 4,
      width: "100%",
      borderRadius: 4,
      marginVertical: 8,
    },
    verify: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 4,
    },
    textVerify: {
      marginLeft: 8,
    },
  })

  return (
    <View
      style={{ width: "100%" }}
      accessible={!!inputAccessibilityLabel}
      accessibilityLabel={inputAccessibilityLabel}
      testID={inputTestId}
    >
      <View testID='input-wrapper-id' style={styles.inputWrapper}>
        {dynamicPlaceholder && !search && (
          <Animated.Text
            style={[
              styles.dynamicPlaceholder,
              { top: animation, fontSize: sizeAnimation },
            ]}
          >
            {placeholder}
          </Animated.Text>
        )}

        <TextInput
          testID='input-id'
          clearTextOnFocus={false}
          secureTextEntry={
            !!(
              type &&
              type === InputType.PASSWORD &&
              iconPassword === IconName.EYE
            )
          }
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
                inputName: (name && name) || "",
                inputValue: text,
                inputSelectionStart: null,
              })
            }
            if (securityGauge) {
              handleVerifyPwd(text)
            }
          }}
          onFocus={(e) => {
            onFocus?.(e)
          }}
          onBlur={(e) => {
            onBlur?.(e)
          }}
          placeholder={placeholder}
          placeholderTextColor={
            disabled
              ? getColorStyle(TrilogyColor.DISABLED)
              : getColorStyle(TrilogyColor.MAIN)
          }
          style={styles.input}
          {...others}
        />
        {type === "email" && (
          <Text style={styles.textWhitte}>
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
                (customIconLeft &&
                  customIconLeft.replace("tri-", "").replace("ui-", "")) ||
                inputIcon.get(status).replace("tri-", "").replace("ui-", "")
              }
              size={IconSize.SMALL}
              color={
                (status &&
                  status === "success" &&
                  getAlertStyle(AlertState.SUCCESS)) ||
                (status &&
                  status === "warning" &&
                  getAlertStyle(AlertState.WARNING)) ||
                (status &&
                  status === "error" &&
                  getAlertStyle(AlertState.ERROR)) ||
                (status && status === "default" && inputColor) ||
                (disabled && getColorStyle(TrilogyColor.DISABLED)) ||
                inputColor
              }
            />
          )}
        {hasIcon &&
          !search &&
          ((status && status !== InputStatus.DEFAULT) ||
            customIcon ||
            customIconRight) &&
          type !== InputType.PASSWORD && (
            <TouchableOpacity
              style={styles.inputContainer}
              activeOpacity={onIconClick ? 0.2 : 1}
              onPress={() => {
                onIconClick?.({
                  inputName: (name && name) || "",
                  inputValue: value,
                })
              }}
            >
              <Icon
                testId='icon-status-id'
                align={Alignable.ALIGNED_CENTER}
                name={
                  (customIcon &&
                    customIcon.replace("tri-", "").replace("ui-", "")) ||
                  (customIconRight &&
                    customIconRight.replace("tri-", "").replace("ui-", "")) ||
                  inputIcon.get(status).replace("tri-", "").replace("ui-", "")
                }
                size={IconSize.SMALL}
                color={
                  (status &&
                    status === "success" &&
                    getAlertStyle(AlertState.SUCCESS)) ||
                  (status &&
                    status === "warning" &&
                    getAlertStyle(AlertState.WARNING)) ||
                  (status &&
                    status === "error" &&
                    getAlertStyle(AlertState.ERROR)) ||
                  (status && status === "default" && inputColor) ||
                  (disabled && getColorStyle(TrilogyColor.DISABLED)) ||
                  inputColor
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
                  inputName: (name && name) || "",
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
                  (status &&
                    status === "success" &&
                    getAlertStyle(AlertState.SUCCESS)) ||
                  (status &&
                    status === "warning" &&
                    getAlertStyle(AlertState.WARNING)) ||
                  (status &&
                    status === "error" &&
                    getAlertStyle(AlertState.ERROR)) ||
                  (status && status === "default" && inputColor) ||
                  (disabled && getColorStyle(TrilogyColor.DISABLED)) ||
                  inputColor
                }
              />
            </TouchableOpacity>
          </>
        )}
        {search && !status && (
          <>
            <View style={styles.inputContainerLeft}>
              <Icon
                align={Alignable.ALIGNED_CENTER}
                name={IconName.SEARCH}
                size={IconSize.SMALL}
                color={getColorStyle(TrilogyColor.NEUTRAL)}
              />
            </View>
            {value.length > 0 && (
              <TouchableOpacity
                testID='search-id'
                style={styles.inputContainerRight}
                onPressIn={() => {
                  onChange?.({
                    inputName: (name && name) || "",
                    inputValue: "",
                    inputSelectionStart: null,
                  })
                  onIconClick?.({
                    inputName: (name && name) || "",
                    inputValue: "",
                  })
                  setValue("")
                }}
              >
                <Icon
                  align={Alignable.ALIGNED_CENTER}
                  name={IconName.TIMES_CIRCLE}
                  size={IconSize.SMALL}
                  color={getColorStyle(TrilogyColor.NEUTRAL)}
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
        <View>
          <View style={styles.containerGauge}>
            <View style={styles.gauge}></View>
          </View>
          <View style={styles.verifies}>
            <View>
              {validationRules && validationRules.length && (
                <View style={styles.verify}>
                  <Icon
                    color={isLengthVerify.color}
                    name={
                      isLengthVerify.isVerify
                        ? IconName.CHECK_CIRCLE
                        : IconName.TIMES
                    }
                    size={IconSize.SMALLER}
                  />
                  <Text style={styles.textVerify}>
                    {validationRules.length.min &&
                      validationRules.length.max &&
                      `Entre ${validationRules.length.min} et ${validationRules.length.max} caractères`}
                    {validationRules.length.min &&
                      !validationRules.length.max &&
                      `Minimum ${validationRules.length.min} caractères`}
                    {validationRules.length.max &&
                      !validationRules.length.min &&
                      `Maximum ${validationRules.length.max} caractères`}
                  </Text>
                </View>
              )}
              {validationRules && validationRules.specialChars && (
                <View style={styles.verify}>
                  <Icon
                    color={isSpecialCharsVerify.color}
                    name={
                      isSpecialCharsVerify.isVerify
                        ? IconName.CHECK_CIRCLE
                        : IconName.TIMES
                    }
                    size={IconSize.SMALLER}
                  />
                  <Text style={styles.textVerify}>Caractères spéciaux</Text>
                </View>
              )}
              {validationRules && validationRules.number && (
                <View style={styles.verify}>
                  <Icon
                    color={isNumberVerify.color}
                    name={
                      isNumberVerify.isVerify
                        ? IconName.CHECK_CIRCLE
                        : IconName.TIMES
                    }
                    size={IconSize.SMALLER}
                  />
                  <Text style={styles.textVerify}>Chiffre</Text>
                </View>
              )}
            </View>
            <View>
              {validationRules && validationRules.uppercase && (
                <View style={styles.verify}>
                  <Icon
                    color={isUppercaseVerify.color}
                    name={
                      isUppercaseVerify.isVerify
                        ? IconName.CHECK_CIRCLE
                        : IconName.TIMES
                    }
                    size={IconSize.SMALLER}
                  />
                  <Text style={styles.textVerify}>Majuscule</Text>
                </View>
              )}
              {validationRules && validationRules.lowercase && (
                <View style={styles.verify}>
                  <Icon
                    color={isLowerercaseVerify.color}
                    name={
                      isLowerercaseVerify.isVerify
                        ? IconName.CHECK_CIRCLE
                        : IconName.TIMES
                    }
                    size={IconSize.SMALLER}
                  />
                  <Text style={styles.textVerify}>Minuscule</Text>
                </View>
              )}
            </View>
          </View>
        </View>
      )}
    </View>
  )
}

Input.displayName = ComponentName.Input

export default Input
