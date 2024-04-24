import { Text, TextMarkup } from "../text"
import React, { useEffect, useMemo, useState } from "react"
import { OtpProps } from "./OtpProps"
import { TypographyColor } from "../../objects/Typography"
import clsx from "clsx"
import { hashClass } from "../../helpers/hashClassesHelpers"
import { is } from "../../services/classify"
import { useTrilogyContext } from "../../context/index"

/**
 * OTP Code Component
 * @param className {string} Additionnal css classes
 * @param code {string} Code Text Input
 * @param codeSize {number} Code Size Number
 * @param disabled {boolean} Disabled OTP Code Input
 * @param error {boolean} OTP Code Input has error | Display error icon
 * @param onCompleted {Function} Return code input string
 * @param onChange {Function} onChange Input return current code
 * @param onFocus {Function} onFocus return if focused opt
 * @param autoFocus {boolean} Should auto focus otp
 */
const Otp = ({
  className,
  code,
  codeSize = 6,
  disabled,
  error,
  onCompleted,
  onChange,
  onFocus,
  label,
  errorMessage,
  autoFocus,
  ...others
}: OtpProps): JSX.Element => {
  const [codeInput, setCodeInput] = useState<string>(code || "")
  const [, setFocused] = useState(false)
  const { styled } = useTrilogyContext()

  const testDigit = /^-?\d*\.?\d*$/
  const classes = hashClass(
    styled,
    clsx("otp-list", error && is("error"), className)
  )

  useEffect(() => {
    if (!disabled && codeInput.length >= codeSize) {
      onCompleted?.(codeInput)
    }
  }, [codeSize, codeInput])

  const valueItems = useMemo(() => {
    const valueArray = codeInput.split("")
    const items: Array<string> = []

    for (let i = 0; i < codeSize; i++) {
      const char = valueArray[i]

      if (testDigit.test(char)) {
        items.push(char)
      } else {
        items.push("")
      }
    }

    return items
  }, [codeInput, codeSize])

  const focusToNextInput = (target: HTMLElement) => {
    const nextElementSibling =
      target.nextElementSibling as HTMLInputElement | null

    if (nextElementSibling) {
      nextElementSibling.focus()
    }
  }
  const focusToPrevInput = (target: HTMLElement) => {
    const previousElementSibling =
      target.previousElementSibling as HTMLInputElement | null

    if (previousElementSibling) {
      previousElementSibling.focus()
    }
  }
  const inputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const { target } = e
    let targetValue = target.value.trim()
    const isTargetValueDigit = testDigit.test(targetValue)

    if (!isTargetValueDigit && targetValue !== "") {
      return
    }

    const nextInputEl = target.nextElementSibling as HTMLInputElement | null

    if (!isTargetValueDigit && nextInputEl && nextInputEl.value !== "") {
      return
    }

    targetValue = isTargetValueDigit ? targetValue : ""

    const targetValueLength = targetValue.length

    if (targetValueLength === 1) {
      const newValue =
        codeInput.substring(0, idx) +
        targetValue +
        codeInput.substring(idx + 1)

      if (onChange) {
        onChange(newValue)
      }
      setCodeInput(newValue)
      if (!isTargetValueDigit) {
        return
      }

      focusToNextInput(target)
    } else if (targetValueLength === codeSize) {
      if (onChange) {
        onChange(codeInput)
      }
      setCodeInput(targetValue)
      target.blur()
    }
  }
  const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e
    const target = e.target as HTMLInputElement

    if (key === "ArrowRight" || key === "ArrowDown") {
      e.preventDefault()
      return focusToNextInput(target)
    }

    if (key === "ArrowLeft" || key === "ArrowUp") {
      e.preventDefault()
      return focusToPrevInput(target)
    }

    const targetValue = target.value
    target.setSelectionRange(0, targetValue.length)
    if (e.key !== "Backspace" || targetValue !== "") {
      target.value = ""
      return
    }

    focusToPrevInput(target)
  }
  const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { target } = e
    const prevInputEl =
      target.previousElementSibling as HTMLInputElement | null

    if (prevInputEl && prevInputEl.value === "") {
      return prevInputEl.focus()
    }

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
        data-testid={"otp-input"}
        className={classes}
        onClick={() => {
          if (!disabled) {
            setFocused(true)
            onFocus?.(true)
          }
        }}
      >
        {valueItems.map((digit, idx) => (
          <input
            aria-disabled={disabled}
            tabIndex={0}
            key={idx}
            type='text'
            inputMode='numeric'
            autoComplete='one-time-code'
            autoFocus={idx === 0 && autoFocus}
            pattern='\d{1}'
            maxLength={codeSize}
            className='otp'
            value={digit}
            onKeyDown={inputOnKeyDown}
            onFocus={inputOnFocus}
            onChange={(e) => inputOnChange(e, idx)}
            disabled={disabled}
            {...others}
          />
        ))}
      </div>
      {errorMessage && (
        <Text
          className={hashClass(styled, clsx("otp-error-message"))}
          markup={TextMarkup.P}
          typo={
            (error && TypographyColor.TEXT_ERROR) || TypographyColor.TEXT_MAIN
          }
        >
          {errorMessage}
        </Text>
      )}
    </>
  )
}

export default Otp
