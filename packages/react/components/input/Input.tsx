import { IconName } from '@/components/icon'
import { InputStatus, InputType } from '@/components/input/InputEnum'
import { InputProps, InputWebEvents } from '@/components/input/InputProps'
import InputGauge from '@/components/input/gauge/InputGauge'
import { useInput } from '@/components/input/hook/useInput'
import { Text, TextLevels, TextMarkup } from '@/components/text'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { TypographyColor } from '@/objects/Typography/TypographyColor'
import { Accessibility } from '@/objects/facets/Accessibility'
import { has, is } from '@/services'
import clsx from 'clsx'
import React, { forwardRef, LegacyRef, useId } from 'react'
import { ComponentName } from '../enumsComponentsName'

export interface InputProp extends Accessibility, InputProps, InputWebEvents {}

/**
 * Input Component
 * @param name {string} Input name
 * @param label {string} Label for input
 * @param sample {string} Sample for input (below label)
 * @param disabled {boolean} Disabled input
 * @param onChange {Function} OnChange Input Event
 * @param onFocus {Function} onFocus Input Event
 * @param onBlur {Function} onBlur Input Event
 * @param placeholder {string} Placeholder Input
 * @param type {InputType} Type for input
 * @param defaultValue {string} Default Value for Input
 * @param hasIcon {boolean} Adding if you want icon - Default icon is defined by status
 * @param status {InputStatus} Input with status - (SUCCESS|WARNING|ERROR|DEFAULT)
 * @param patternValidator {RegExp} regex validator
 * @param customValidator {Function} custom function validator
 * @param onStatusChange {Function} status change event
 * @param help {string} Help for input
 * @param ref Pass a ref for input
 * @param onSubmit {Function} onSubmit Event
 * @param maxLength {number} Textarea max length
 * @param securityGauge {boolean} add security gauge for input type password
 * @param validationRules {IValidationRules} Textarea max length

 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param loading {boolean} Loading input
 * @param value {string} Value for Input
 * @param focused {boolean} Fucus mode
 * @param className {string} Additionnal CSS Classes
 * @param onMouseEnter {Function} onMouseEnter Input Event
 * @param onMouseLeave {Function} onMouseLeave Input Event
 * @param onKeyPress {Function} onKeyPress Input Event
 * @param onKeyUp {Function} onKeyUp Input Event
 * @param onIconClick {Function} onIconClick Input Event
 * @param onClick {Function} onClick Input Event
 * @param forceControl {boolean} Force the control of the input value
 * @param minLength {number} Textarea min length
 * @param accessibilityLabel {string} Accessibility label
 * @param required {boolean} Required input
 * - -------------------------- NATIVE PROPERTIES -------------------------------
 * @param autoCompleteType {InputAutoCompleteType} Auto complete input type
 */
const Input = (
  {
    forceControl,
    label,
    sample,
    className,
    id = React.useId(),
    disabled,
    onChange,
    onKeyPress,
    onKeyUp,
    onIconClick,
    onClick,
    onFocus,
    onBlur,
    patternValidator,
    onMouseEnter,
    onMouseLeave,
    name,
    placeholder,
    type = InputType.TEXT,
    defaultValue,
    value,
    loading,
    focused,
    status,
    help,
    onStatusChange,
    customValidator,
    onSubmit,
    minLength,
    maxLength,
    accessibilityLabel,
    autoCompleteType,
    iconNameLeft,
    iconNameRight,
    textContentType,
    securityGauge,
    validationRules,
    required,
    ...others
  }: InputProp,
  ref: LegacyRef<HTMLInputElement>,
): JSX.Element => {
  const validator =
    !customValidator && patternValidator
      ? (value: string) => (patternValidator.test(value) ? InputStatus.SUCCESS : InputStatus.ERROR)
      : customValidator

  const {
    localStatus,
    inputType,
    _value,
    handleBlur,
    handleChange,
    handleClick,
    handleFocus,
    handleKeyPress,
    handleKeyUp,
    handleMouseEnter,
    handleMouseLeave,
    IconWrapper,
    isShowPwd,
    handlePressIconPwd,
  } = useInput({
    defaultValue,
    focused,
    status,
    type,
    value,
    validator,
    onStatusChange,
    onKeyUp,
    onKeyPress,
    onMouseEnter,
    onMouseLeave,
    onClick,
    forceControl,
    onChange,
    onFocus,
    onBlur,
    onIconClick,
  })
  const idHelp = useId()
  const idSample = useId()

  const inputIcon = new Map()
  inputIcon.set(InputStatus.SUCCESS, IconName.CHECK_CIRCLE)
  inputIcon.set(InputStatus.WARNING, IconName.EXCLAMATION_CIRCLE)
  inputIcon.set(InputStatus.ERROR, IconName.EXCLAMATION_CIRCLE)

  const helpClasses = clsx('help', localStatus && is(localStatus))
  const classes = hashClass(clsx('input', localStatus && is(localStatus)))
  const wrapperClasses = hashClass(clsx('field', className, type === 'password' && securityGauge && 'has-gauge'))
  const hasIcon = iconNameLeft || iconNameRight

  const controlClasses = hashClass(
    clsx('control', {
      [has('icons-right')]: hasIcon ?? (iconNameRight || type === 'password'),
      ['has-icons-left']: iconNameLeft || type === InputType.SEARCH,
    }),
  )

  return (
    <div className={wrapperClasses} data-has-gauge={securityGauge ? true : undefined}>
      {label && (
        <label className='input-label' htmlFor={id}>
          {label}{' '}
          {required && (
            <Text markup={TextMarkup.SPAN} typo={TypographyColor.TEXT_ERROR}>
              *
            </Text>
          )}
        </label>
      )}
      {sample && (
        <Text className='input-sample' level={TextLevels.TWO} id={idSample}>
          {sample}
        </Text>
      )}
      <div className={controlClasses}>
        <input
          aria-describedby={`${idHelp} ${idSample}`}
          id={id}
          required={required}
          role={'textbox'}
          {...others}
          aria-label={accessibilityLabel}
          type={inputType}
          className={classes}
          value={_value}
          defaultValue={defaultValue}
          name={name}
          onSubmit={onSubmit}
          ref={ref}
          disabled={disabled}
          minLength={minLength}
          maxLength={maxLength}
          autoComplete={autoCompleteType}
          onKeyUp={handleKeyUp}
          onKeyPress={handleKeyPress}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          placeholder={placeholder}
          onClick={handleClick}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {hasIcon && !localStatus && !loading && iconNameLeft && <IconWrapper name={iconNameLeft} />}

        {(iconNameLeft || type === 'search') && (
          <IconWrapper className={'icon-left'} name={iconNameLeft || IconName.SEARCH} />
        )}

        {iconNameRight && !loading && type !== 'password' && (
          <IconWrapper className={'icon-right'} name={iconNameRight} />
        )}

        {!loading && type === 'password' && (
          <IconWrapper
            className={'icon-right'}
            name={isShowPwd ? IconName.EYE_SLASH : IconName.EYE}
            onPress={handlePressIconPwd}
          />
        )}
        {loading && <span className={hashClass(clsx(is('searching')))} />}
      </div>
      {help && (
        <Text className={helpClasses} id={idHelp}>
          {help}
        </Text>
      )}

      {securityGauge && type === 'password' && <InputGauge validationRules={validationRules} inputValue={_value} />}
    </div>
  )
}
Input.displayName = ComponentName.Input
export default forwardRef(Input)
