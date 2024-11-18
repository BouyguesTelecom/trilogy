import clsx from 'clsx'
import React from 'react'

import { IconColor } from '@/components/icon/IconEnum'
import { IconName } from '@/components/icon/IconNameEnum'
import { InputStatus, InputType } from '@/components/input/InputEnum'
import { InputProps, InputWebEvents } from '@/components/input/InputProps'
import InputGauge from '@/components/input/gauge/InputGauge'
import { useInput } from '@/components/input/hook/useInput'
import { Text, TextLevels, TextMarkup } from '@/components/text'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { TypographyColor } from '@/objects/Typography/TypographyColor'
import { has, is } from '@/services/classify'

export interface InputProp extends InputProps, InputWebEvents {}

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
 * @param customIcon {IconName} Adding if you want custom icon
 * @param status {InputStatus} Input with status - (SUCCESS|WARNING|ERROR|DEFAULT)
 * @param patternValidator {RegExp} regex validator
 * @param customValidator {Function} custom function validator
 * @param onStatusChange {Function} status change event
 * @param help {string} Help for input
 * @param ref Pass a ref for input
 * @param onSubmit {Function} onSubmit Event
 * @param maxLength {number} Textarea max length
 * @param customIconLeft {IconName} Adding if you want custom icon left
 * @param customIconRight {IconName} Adding if you want custom icon right
 * @param securityGauge {boolean} add security gauge for input type password
 * @param validationRules {IValidationRules} Textarea max length

 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param loading {boolean} Loading input
 * @param value {string} Value for Input
 * @param focused {boolean} Fucus mode
 * @param className {string} Additionnal CSS Classes
 * @param onMouseEnter {Function} onMouseEnter Input Event
 * @param onMouseLeave {Function} onMouseLeave Input Event
 * @param iconClassname {string} Additional icon classes
 * @param onKeyPress {Function} onKeyPress Input Event
 * @param onKeyUp {Function} onKeyUp Input Event
 * @param onIconClick {Function} onIconClick Input Event
 * @param onClick {Function} onClick Input Event
 * @param forceControl {boolean} Force the control of the input value
 * @param minLength {number} Textarea min length
 * @param accessibilityLabel {string} Accessibility label
 * @param testId {string} Test Id for Test Integration
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
    type = 'text',
    defaultValue,
    value,
    loading,
    focused,
    hasIcon,
    customIcon,
    status,
    help,
    iconClassname,
    onStatusChange,
    customValidator,
    onSubmit,
    minLength,
    maxLength,
    testId,
    accessibilityLabel,
    autoCompleteType,
    customIconLeft,
    customIconRight,
    securityGauge,
    validationRules,
    required,
    ...others
  }: InputProp,
  ref: React.Ref<HTMLInputElement>,
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

  const hasPlaceholder = placeholder !== undefined && placeholder.length > 0
  const inputIcon = new Map()
  inputIcon.set(InputStatus.SUCCESS, IconName.CHECK_CIRCLE)
  inputIcon.set(InputStatus.WARNING, IconName.EXCLAMATION_CIRCLE)
  inputIcon.set(InputStatus.ERROR, IconName.EXCLAMATION_CIRCLE)

  const helpClasses = clsx('help', localStatus && is(localStatus))
  const classes = hashClass(clsx('input', localStatus && is(localStatus)))
  const wrapperClasses = hashClass(clsx('field', className, type === 'password' && securityGauge && 'has-gauge'))

  const controlClasses = hashClass(
    clsx('control', hasPlaceholder && type !== InputType.SEARCH && has('dynamic-placeholder'), {
      [has('icons-right')]: hasIcon ?? (customIcon || customIconRight || type === 'password'),
      ['has-icons-left']: customIconLeft || type === InputType.SEARCH,
    }),
  )

  return (
    <div className={wrapperClasses} data-has-gauge={securityGauge ? true : undefined}>
      {!hasPlaceholder && (
        <label className='input-label'>
          {label}{' '}
          {label && required && (
            <Text markup={TextMarkup.SPAN} typo={TypographyColor.TEXT_ERROR}>
              *
            </Text>
          )}
        </label>
      )}
      {!hasPlaceholder && label && sample && (
        <Text className='input-sample' level={TextLevels.TWO} typo={TypographyColor.TEXT_DISABLED}>
          {sample}
        </Text>
      )}
      <div className={controlClasses}>
        <input
          required={required}
          role={'textbox'}
          {...others}
          data-testid={testId}
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
        {hasPlaceholder && type !== InputType.SEARCH && <label>{placeholder}</label>}
        {hasIcon && localStatus && !customIcon && !loading && !customIconLeft && !customIconRight && (
          <IconWrapper className={iconClassname} name={inputIcon.get(localStatus)} />
        )}
        {customIcon && !localStatus && !loading && <IconWrapper className={iconClassname} name={customIcon} />}
        {customIconLeft && !loading && (
          <IconWrapper className={clsx(customIconLeft && 'icon-left', iconClassname)} name={customIconLeft} />
        )}
        {customIconRight && !loading && type !== 'password' && (
          <IconWrapper className={clsx(customIconRight && 'icon-right', iconClassname)} name={customIconRight} />
        )}
        {!loading && type === 'password' && (
          <IconWrapper
            className={clsx('icon-right', iconClassname)}
            name={isShowPwd ? 'tri-eye-slash' : 'tri-eye'}
            onPress={handlePressIconPwd}
          />
        )}
        {customIcon && localStatus && !loading && <IconWrapper className={iconClassname} name={customIcon} />}
        {type === InputType.SEARCH && !customIcon && localStatus === 'default' && !loading && (
          <IconWrapper color={IconColor.MAIN} className={iconClassname} name={IconName.SEARCH} closeIconSearch={true} />
        )}
        {loading && <span className={hashClass(clsx(is('searching')))} />}
      </div>
      {help && <Text className={helpClasses}>{help}</Text>}

      {securityGauge && type === 'password' && <InputGauge validationRules={validationRules} inputValue={_value} />}
    </div>
  )
}

export default React.forwardRef(Input)
