import clsx from 'clsx'
import React from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import { useOtp } from '@/components/otp/hook/useOtp'
import { OtpProps } from '@/components/otp/OtpProps'
import { Text, TextMarkup } from '@/components/text'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { TypographyColor } from '@/objects/Typography'
import { is } from '@/services/classify'

/**
 * OTP Code Component
 * @param code {string} Code Text Input
 * @param codeSize {number} Code Size Number
 * @param disabled {boolean} Disabled OTP Code Input
 * @param error {boolean} OTP Code Input has error | Display error icon
 * @param onCompleted {Function} Return code input string
 * @param onChange {Function} onChange Input return current code
 * @param onFocus {Function} onFocus return if focused opt
 * @param autoFocus {boolean} Should auto focus otp
 * @param label {string} Label for OTP
 * @param errorMessage {string} error message to display
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes
 */
const Otp = React.forwardRef(
  (
    {
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
    }: OtpProps,
    ref: React.Ref<HTMLInputElement>,
  ): JSX.Element => {
    const classes = hashClass(clsx('otp-list', error && is('error'), className))

    const { codeInput, inputOnFocus, inputOnKeyUp, inputOnChange, handleClick } = useOtp({
      code,
      codeSize,
      disabled,
      onCompleted,
      onChange,
      onFocus,
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
        <div data-testid={'otp-input'} className={classes} onClick={handleClick}>
          {codeInput.map((digit, idx) => (
            <input
              ref={ref}
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
              value={`${digit ?? ''}`}
              onKeyUp={inputOnKeyUp}
              onFocus={inputOnFocus}
              onChange={inputOnChange ? (e) => inputOnChange(e, idx) : undefined}
              disabled={disabled}
              {...others}
            />
          ))}
        </div>
        {errorMessage && (
          <Text
            className={hashClass(clsx('otp-error-message'))}
            markup={TextMarkup.P}
            typo={(error && TypographyColor.TEXT_ERROR) || TypographyColor.TEXT_MAIN}
          >
            {errorMessage}
          </Text>
        )}
      </>
    )
  },
)

Otp.displayName = ComponentName.Otp
export default Otp
