import { OtpProps } from '@/components/otp/OtpProps'
import { useOtp } from '@/components/otp/hooks/useOtp'
import { Text, TextMarkup } from '@/components/text'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { TypographyColor } from '@/objects/Typography'
import { is } from '@/services/classify'
import clsx from 'clsx'
import React from 'react'

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
 * @param className {string} Additionnal css classes
 */
const Otp = ({
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
}: OtpProps): JSX.Element => {
  const classes = hashClass(clsx('otp-list', error && is('error'), className))
  const { codeInput, inputOnChange, inputOnFocus, inputOnKeyUp } = useOtp({
    value,
    disabled,
    onChange,
    onCompleted,
    length,
  })

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
        id={id}
        className={classes}
        onClick={
          onFocus
            ? () => {
                if (!disabled) {
                  onFocus?.(true)
                }
              }
            : undefined
        }
      >
        {[...Array(length).keys()].map((_, index) => (
          <input
            aria-disabled={disabled}
            tabIndex={0}
            key={index}
            type='text'
            inputMode='numeric'
            autoComplete='one-time-code'
            autoFocus={index === 0 && autoFocus}
            pattern='\d{1}'
            maxLength={length}
            className={hashClass(clsx('otp'))}
            value={value ? `${codeInput[index] ?? ''}` : undefined}
            onKeyUp={inputOnKeyUp}
            onFocus={inputOnFocus}
            onChange={inputOnChange ? (e) => inputOnChange(e, index) : undefined}
            disabled={disabled}
            {...others}
          />
        ))}
      </div>
      {help && (
        <Text
          className={hashClass(clsx('help'))}
          markup={TextMarkup.P}
          typo={(error && TypographyColor.TEXT_ERROR) || TypographyColor.TEXT_MAIN}
        >
          {help}
        </Text>
      )}
    </>
  )
}

export default Otp
