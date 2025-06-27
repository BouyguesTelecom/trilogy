import { OtpProps, OtpRef } from '@/components/otp/OtpProps'
import { Text, TextMarkup } from '@/components/text'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { TypographyColor } from '@/objects/Typography'
import { is } from '@/services/classify'
import translation from '@trilogy-ds/locales/lib/otp'
import clsx from 'clsx'
import React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { useOtp } from './hooks/useOtp'

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
    const { codeInput, inputOnChange, inputOnFocus, inputOnKeyUp, formatTranslation, handleClick } = useOtp({
      value,
      disabled,
      onChange,
      onCompleted,
      length,
    })

    const classes = hashClass(clsx('otp-list', error && is('error'), className))

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
        <div ref={ref} id={id} className={classes} onClick={handleClick}>
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
              className={hashClass(clsx('otp'))}
              value={`${digit ?? ''}`}
              onKeyUp={inputOnKeyUp}
              onFocus={inputOnFocus}
              onChange={inputOnChange ? (e) => inputOnChange(e, idx) : undefined}
              disabled={disabled}
              title={formatTranslation(translation.inputTitle, String(idx + 1), String(length))}
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
  },
)

Otp.displayName = ComponentName.Otp
export default Otp
