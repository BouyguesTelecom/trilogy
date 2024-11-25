import React, { useEffect, useRef, useState } from 'react'
import { Pressable, SafeAreaView, StyleSheet, TextInput, View } from 'react-native'

import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconColor, IconName, IconSize } from '@/components/icon'
import { OtpProps } from '@/components/otp/OtpProps'
import { Text, TextLevels } from '@/components/text'
import { Title, TitleLevels } from '@/components/title'
import { TypographyAlign } from '@/objects'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'

/**
 * OTP Code Component
 * @param code {string} Code Text Input
 * @param codeSize {number} Code Size Number
 * @param disabled {boolean} Disabled OTP Code Input
 * @param error {boolean} OTP Code Input has error | Display error icon
 * @param onCompleted {Function} Return code input string
 * @param onFocus {Function} onFocus return if focused opt
 * @param activated {boolean} Activated OTP
 * @param onChange {Function} onChange Input return current code
 * @param label {string} Label for OTP
 * @param errorMessage {string} error message to display
 */
const Otp = React.forwardRef(
  (
    { code, codeSize = 6, disabled, error, onCompleted, onFocus, activated, onChange, label, ...others }: OtpProps,
    reff: React.Ref<SafeAreaView>,
  ): JSX.Element => {
    const [codeInput, setCodeInput] = useState<string>(code || '')
    // eslint-disable-next-line prefer-spread
    const [codeDigitsArray] = useState([...Array(codeSize).keys()])

    const [focused, setFocused] = useState(false)
    const color =
      (disabled && getColorStyle(TrilogyColor.DISABLED)) ||
      (activated && getColorStyle(TrilogyColor.MAIN)) ||
      (error && getColorStyle(TrilogyColor.ERROR)) ||
      (focused && getColorStyle(TrilogyColor.MAIN)) ||
      getColorStyle(TrilogyColor.MAIN)

    useEffect(() => {
      if (/^-?\d*\.?\d*$/.test(codeInput) && !disabled) {
        setCodeInput(code || '')
      }
    }, [code])

    useEffect(() => {
      if (!disabled && codeInput && codeInput.length >= codeSize) {
        onCompleted?.(codeInput)
      }
    }, [code, codeSize, codeInput])

    const ref = useRef<TextInput>(null)

    const handleOnPress = () => {
      ref?.current?.focus()
    }

    const style = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignSelf: 'center',
      },
      inputsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputContainer: {
        borderColor:
          (disabled && getColorStyle(TrilogyColor.DISABLED)) ||
          (activated && getColorStyle(TrilogyColor.MAIN)) ||
          (error && getColorStyle(TrilogyColor.ERROR)) ||
          getColorStyle(TrilogyColor.NEUTRAL),
        borderWidth: 1,
        borderRadius: 4,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: 28,
        height: 35,
      },
      inputSelectedContainer: {
        borderColor: color,
        borderWidth: 1,
        borderRadius: 4,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: 28,
        height: 35,
      },
      hiddenCodeInput: {
        position: 'absolute',
        height: 1,
        width: 1,
        opacity: 0,
      },
      icon: {
        marginHorizontal: 8,
        marginBottom: 8,
      },
      currentInput: {
        width: 15,
        height: 1,
        backgroundColor: (focused && getColorStyle(TrilogyColor.MAIN)) || 'transparent',
      },
      text: {
        paddingLeft: 5,
        marginBottom: 8,
        color: color,
      },
    })

    const toDigitInput = (_value: number, idx: number): JSX.Element => {
      const emptyInputChar = ' '
      const digit = codeInput[idx] || emptyInputChar
      if (idx <= codeInput.length) {
        return (
          <View key={idx} style={style.inputSelectedContainer}>
            <Text typo={TypographyAlign.TEXT_CENTERED} level={TextLevels.TWO}>
              {digit}
            </Text>
            {Boolean(idx === codeInput.length) && <View style={style.currentInput} />}
          </View>
        )
      }

      return (
        <View key={idx} style={style.inputContainer}>
          <Title level={TitleLevels.FOUR}>{digit}</Title>
        </View>
      )
    }

    return (
      <SafeAreaView style={style.container} ref={reff} {...others}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {Boolean(label) && (
            <Text style={style.text} level={TextLevels.FOUR}>
              {label}
            </Text>
          )}
          {error && (
            <Icon style={style.icon} name={IconName.EXCLAMATION_CIRCLE} color={IconColor.ERROR} size={IconSize.SMALL} />
          )}
        </View>
        <Pressable style={style.inputsContainer} onPress={handleOnPress}>
          {codeDigitsArray.map((_item: number, index: number) => (
            <View key={index}>{toDigitInput(index, index)}</View>
          ))}
        </Pressable>
        <TextInput
          ref={ref}
          value={codeInput}
          onChangeText={(code) => {
            if (/^-?\d*\.?\d*$/.test(code) && !disabled) {
              if (onChange) {
                onChange(code)
              }
              setCodeInput(code)
            }
          }}
          keyboardType={'numeric'}
          returnKeyType={'send'}
          textContentType='oneTimeCode'
          maxLength={codeSize}
          onFocus={() => {
            if (!disabled) {
              setFocused(true)
              onFocus?.(true)
            }
          }}
          onBlur={() => {
            setFocused(false)
            onFocus?.(false)
          }}
          editable={!disabled}
          style={style.hiddenCodeInput}
          testID='input-id'
        />
      </SafeAreaView>
    )
  },
)

Otp.displayName = ComponentName.Otp
export default Otp
