import { Text, TextMarkup } from "@/components/text"
import React, {useEffect, useMemo, useRef, useState} from "react"
import { OtpProps } from "./OtpProps"
import { TypographyColor } from "@/objects/Typography"
import clsx from "clsx"
import { hashClass } from "@/helpers/hashClassesHelpers"
import { is } from "@/services/classify"
import { useTrilogyContext } from "@/context/index"

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

type NumberOrNull = number | null;

const stringToCode = (str: string|undefined, codeSize: number): Array<NumberOrNull> => {
  if (!str) return new Array(codeSize).fill(null)
  return str.split("").map((char) => (char === "" ? null : Number(char)))
}

const codeToString = (code: NumberOrNull[]): string => {
  return code.map((char) => (char === null ? '_' : char)).join("")
}

const isCompleted = (myCode:NumberOrNull[]) => {
  return myCode.every((code) => code !== null)
}

const focusToNextInput = (target: HTMLInputElement, value?: string) => {
  const nextElementSibling =
    target.nextElementSibling as HTMLInputElement | null

  if (nextElementSibling) {
    if (value)
      nextElementSibling.value = value

    if(target.value.length)
      nextElementSibling.focus()

  } else {
    target.focus()
  }
}
const focusToPrevInput = (target: HTMLElement) => {
  const previousElementSibling =
    target.previousElementSibling as HTMLInputElement | null
  if (previousElementSibling) {
    previousElementSibling.focus()
  } else {
    target.focus()
  }
}

const updateCodeInput = (value: string, index: number, code: NumberOrNull[]) :NumberOrNull[] => {
  const numberValue = Number(value)
  if( isNaN(numberValue) || value.length < 1 ) {
    return code
  }
  const newCodeInput = code.map((code, idx) => {
    return idx === index ? Number(value.slice(0,1)) : code
  })
  return updateCodeInput(value.slice(1), index + 1, newCodeInput)
}

const inputOnKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const { key } = e
  const target = e.target as HTMLInputElement

  if (key === "ArrowRight" || key === "ArrowDown") {
    return focusToNextInput(target)
  }
  if (key === "ArrowLeft" || key === "ArrowUp") {
    return focusToPrevInput(target)
  }
  if (key === "Backspace") {
    return (target.value === "") && focusToPrevInput(target)
  }
  if (key >= '0' && key <= '9') {
    focusToNextInput(target)
  }
}

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

  const [codeInput, setCodeInput] = useState<NumberOrNull[]>(stringToCode(code, codeSize) || new Array(codeSize).fill(null))
  const hasChanged = useRef(false)
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx("otp-list", error && is("error"), className)
  )

  useEffect(() => {
    if (!disabled ) {
      isCompleted(codeInput) && onCompleted?.(codeToString(codeInput))
    }
  }, [codeSize, codeInput, onCompleted, disabled])

  useEffect(() => {
    hasChanged.current = codeInput.find((code) => code !== null) !== undefined
    if( hasChanged.current ) {
      onChange?.(codeToString(codeInput))
    }
  }, [codeInput])

  const inputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const { target } = e
    const targetValue = target.value.trim()

    if (targetValue.length > 0) {
      setCodeInput(updateCodeInput(targetValue, idx, codeInput))
    } else {
      setCodeInput(codeInput.map((code, index) => {
        return index === idx ? null : code
      }))
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
        data-testid={"otp-input"}
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
            tabIndex={0}
            key={idx}
            type='text'
            inputMode='numeric'
            autoComplete='one-time-code'
            autoFocus={idx === 0 && autoFocus}
            pattern='\d{1}'
            maxLength={codeSize}
            className='otp'
            value={digit === null ?  "" : digit.toString()}
            onKeyUp={inputOnKeyUp}
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
