import { Text, TextMarkup } from '@/components/text'
import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { TypographyColor } from '@/objects/Typography'
import { is } from '@/services/classify'
import { otpLocale } from '@trilogy-ds/locales'
import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { ComponentName } from '../enumsComponentsName'
import { OtpProps, OtpRef } from './OtpProps'

type NumberOrNull = number | null

const stringToCode = (str: string | undefined, codeSize: number): Array<NumberOrNull> => {
  if (!str) return new Array(codeSize).fill(null)
  return str.split('').map((char) => (char === '' ? null : Number(char)))
}

const codeToString = (code: NumberOrNull[]): string => {
  return code.map((char) => (char === null ? '_' : char)).join('')
}

const isCompleted = (myCode: NumberOrNull[]) => {
  return myCode.every((code) => code !== null)
}

const focusToNextInput = (target: HTMLInputElement, value?: string) => {
  const nextElementSibling = target.nextElementSibling as HTMLInputElement | null

  if (nextElementSibling) {
    if (value) nextElementSibling.value = value

    if (target.value.length) nextElementSibling.focus()
  } else {
    target.focus()
  }
}
const focusToPrevInput = (target: HTMLElement) => {
  const previousElementSibling = target.previousElementSibling as HTMLInputElement | null
  if (previousElementSibling) {
    previousElementSibling.focus()
  } else {
    target.focus()
  }
}

const updateCodeInput = (value: string, index: number, code: NumberOrNull[]): NumberOrNull[] => {
  const numberValue = Number(value)
  if (isNaN(numberValue) || value.length < 1) {
    return code
  }
  const newCodeInput = code.map((code, idx) => {
    return idx === index ? Number(value.slice(0, 1)) : code
  })
  return updateCodeInput(value.slice(1), index + 1, newCodeInput)
}

const inputOnKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const { key } = e
  const target = e.target as HTMLInputElement

  if (key === 'ArrowRight' || key === 'ArrowDown') {
    return focusToNextInput(target)
  }
  if (key === 'ArrowLeft' || key === 'ArrowUp') {
    return focusToPrevInput(target)
  }
  if (key === 'Backspace') {
    return target.value === '' && focusToPrevInput(target)
  }
  if (key >= '0' && key <= '9') {
    focusToNextInput(target)
  }
}

const formatTranslation = (translation: string, x: string, y: string) => {
  return translation.replace(/:x/g, x).replace(/:y/g, y)
}

/**
 * OTP Code Component
 * @param value {string} Code Text Input
 * @param length {number} Code Size Number
 * @param disabled {boolean} Disabled OTP Code Input
 * @param error {boolean} OTP Code Input has error | Display error icon
 * @param onCompleted {Function} Return code input string
 * @param onChange {Function} onChange Input return current code
 * @param onFocus {Function} onFocus return if focused opt
 * @param autoFocus {boolean} Should auto focus otp
 * @param label {string} Label for OTP
 * @param help {string} error message to display
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional css classes
 */
const Otp = React.forwardRef<OtpRef, OtpProps>(
  (
    {
      className,
      id,
      value,
      length = 6,
      disabled,
      error,
      onCompleted,
      onChange,
      onFocus,
      label,
      help,
      autoFocus,
      ...others
    },
    ref,
  ): JSX.Element => {
    const [codeInput, setCodeInput] = useState<NumberOrNull[]>(
      stringToCode(value, length) || new Array(length).fill(null),
    )
    const hasChanged = useRef(false)
    const { styled } = useTrilogyContext()

    const classes = hashClass(styled, clsx('otp-list', error && is('error'), className))

    useEffect(() => {
      if (!disabled) {
        isCompleted(codeInput) && onCompleted?.(codeToString(codeInput))
      }
    }, [length, codeInput, onCompleted, disabled])

    useEffect(() => {
      hasChanged.current = codeInput.find((code) => code !== null) !== undefined
      if (hasChanged.current) {
        onChange?.(codeToString(codeInput))
      }
    }, [codeInput])

    const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
      const { target } = e
      const targetValue = target.value.trim()

      if (targetValue.length > 0) {
        setCodeInput(updateCodeInput(targetValue, idx, codeInput))
      } else {
        setCodeInput(
          codeInput.map((code, index) => {
            return index === idx ? null : code
          }),
        )
      }
    }

    const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      const { target } = e
      target.setSelectionRange(0, target.value.length)
    }

    return (
      <>
        {label && (
          <Text
            markup={TextMarkup.P}
            typo={
              (disabled && TypographyColor.TEXT_NEUTRAL) ||
              (error && TypographyColor.TEXT_ERROR) ||
              TypographyColor.TEXT_MAIN
            }
          >
            {label}
          </Text>
        )}
        <div
          ref={ref}
          id={id}
          className={classes}
          onClick={() => {
            if (!disabled) {
              onFocus?.(true)
            }
          }}
        >
          {codeInput.map((digit, idx) => (
            <input
              aria-disabled={disabled}
              key={idx}
              type={'tel'} // To display the numeric keypad and avoid showing the plus/minus arrows.
              inputMode='numeric'
              autoComplete='one-time-code'
              autoFocus={idx === 0 && autoFocus}
              pattern='\d{1}'
              maxLength={length}
              className={hashClass(styled, clsx('otp'))}
              value={`${digit ?? ''}`}
              onKeyUp={inputOnKeyUp}
              onFocus={inputOnFocus}
              onChange={(e) => inputOnChange(e, idx)}
              disabled={disabled}
              title={formatTranslation(otpLocale.inputTitle, String(idx + 1), String(length))}
              {...others}
            />
          ))}
        </div>
        {help && (
          <Text
            className={hashClass(styled, clsx('help'))}
            markup={TextMarkup.P}
            typo={(error && TypographyColor.TEXT_ERROR) || TypographyColor.TEXT_MAIN}
          >
            {help}
          </Text>
        )}
      </>
    )
  },
)

Otp.displayName = ComponentName.Otp
export default Otp
