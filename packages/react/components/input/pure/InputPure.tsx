import clsx from 'clsx'
import React, { useCallback, useEffect, useState } from 'react'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { has, is } from '@/services'
import { Icon, IconColor, IconName, IconNameValues, IconSize } from '../icon'
import { Text, TextLevels, TextMarkup } from '@/components/text'
import { InputStatus, InputStatusValues, InputType, InputTypeValues } from './InputEnum'
import { InputProps, InputWebEvents } from './InputProps'
import InputGauge from './gauge/InputGauge'
import { TypographyColor } from '@/objects'

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
const InputPure = ({
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
  reference,
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
  props,
  ...others
}: any): JSX.Element => {
  const { styled } = useTrilogyContext()

  const hasPlaceholder = placeholder !== undefined && placeholder.length > 0
  const inputIcon = new Map()
  inputIcon.set(InputStatus.SUCCESS, IconName.CHECK_CIRCLE)
  inputIcon.set(InputStatus.WARNING, IconName.EXCLAMATION_CIRCLE)
  inputIcon.set(InputStatus.ERROR, IconName.EXCLAMATION_CIRCLE)

  const [_value, setValue] = useState<string>(defaultValue ?? '')
  const [isFocused, setIsFocused] = useState<boolean>(focused ?? false)
  const [isDirty, setIsDirty] = useState<boolean>(false)
  const [isTouched, setIsTouched] = useState<boolean>(false)
  const [localStatus, setLocalStatus] = useState<InputStatus | InputStatusValues>(status || InputStatus.DEFAULT)
  const [inputType, setInputType] = useState<InputType | InputTypeValues>(type)
  const [isShowPwd, setIsShowPwd] = useState<boolean>(false)

  const helpClasses = clsx('help', localStatus && is(localStatus))
  const classes = hashClass(styled, clsx('input', localStatus && is(localStatus)))
  const wrapperClasses = hashClass(
    styled,
    clsx('field', className, type === 'password' && securityGauge && 'has-gauge'),
  )
  const controlClasses = hashClass(
    styled,
    clsx('control', hasPlaceholder && type !== InputType.SEARCH && has('dynamic-placeholder'), {
      [has('icons-right')]: hasIcon ?? (customIcon || customIconRight || type === 'password'),
      ['has-icons-left']: customIconLeft || type === InputType.SEARCH,
    }),
  )

  const onPressKey = useCallback((e: React.KeyboardEvent) => {
    const target = e.target as HTMLFormElement
    return {
      inputName: target.name,
      inputValue: target.value,
      inputKeyCode: e.keyCode,
      inputTarget: target,
      preventDefault: () => e.preventDefault(),
    }
  }, [])

  const IconWrapper = useCallback(
    ({ className, name, color, closeIconSearch, onPress }: IconWrapper) => {
      return (
        <div
        {...type === "password" && { "data-show-pwd": true }}
          onClick={(e) => {
            onPress && onPress()
            if (onIconClick) {
              onIconClick({ inputName: name ?? '', inputValue: _value, inputTarget: e.target })
            }
          }}
        >
          <Icon className={className} name={name} size={IconSize.SMALL} color={color} />
          {_value && _value.length > 0 && closeIconSearch && (
            <Icon
              onClick={() => setValue('')}
              className={hashClass(styled, clsx(is('justified-self')))}
              name={IconName.TIMES_CIRCLE}
              size={IconSize.SMALL}
            />
          )}
        </div>
      )
    },
    [_value, styled],
  )

  const validator =
    !customValidator && patternValidator
      ? (value: string) => (patternValidator.test(value) ? InputStatus.SUCCESS : InputStatus.ERROR)
      : customValidator

  useEffect(() => {
    setValue(value ?? defaultValue ?? '')
  }, [value, defaultValue])

  useEffect(() => {
    setIsFocused(focused ?? false)
  }, [focused])

  useEffect(() => {
    if (isFocused) setIsDirty(true)
    else if (isDirty) setIsTouched(true)
  }, [isFocused, isDirty])

  useEffect(() => {
    if (!validator || !isTouched) return
    setLocalStatus(validator(_value))
  }, [isFocused, isTouched])

  useEffect(() => {
    setLocalStatus(status || InputStatus.DEFAULT)
  }, [status])

  useEffect(() => {
    if (onStatusChange) onStatusChange(localStatus)
  }, [localStatus])

  return (
    <div className={wrapperClasses} data-has-gauge={securityGauge ? true : undefined}>
      {!hasPlaceholder && <label className='input-label'>{label} {label && required && <Text markup={TextMarkup.SPAN} typo={TypographyColor.TEXT_ERROR}>*</Text>}</label>}
      {!hasPlaceholder && label && sample && <Text className='input-sample' level={TextLevels.TWO} typo={TypographyColor.TEXT_DISABLED}>{sample}</Text>}
      <div className={controlClasses}>
        <input
          {...props}
          {...others}
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
            onPress={() => {
              if (inputType === 'password') {
                setInputType('text')
                setIsShowPwd(true)
              } else {
                setInputType('password')
                setIsShowPwd(false)
              }
            }}
          />
        )}
        {customIcon && localStatus && !loading && <IconWrapper className={iconClassname} name={customIcon} />}
        {type === InputType.SEARCH && !customIcon && localStatus === 'default' && !loading && (
          <IconWrapper color={IconColor.MAIN} className={iconClassname} name={IconName.SEARCH} closeIconSearch={true} />
        )}
        {loading && <span className={hashClass(styled, clsx(is('searching')))} />}
      </div>
      {help && <Text className={helpClasses}>{help}</Text>}

      {securityGauge && type === 'password' && (
        <InputGauge validationRules={validationRules} styled={styled} inputValue={_value} />
      )}
    </div>
  )
}

export default InputPure
