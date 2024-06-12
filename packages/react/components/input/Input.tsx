import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { useTrilogyContext } from '../../context'
import { hashClass } from '../../helpers'
import { has, is } from '../../services'
import { Icon, IconColor, IconName, IconSize } from '../icon'
import { Text } from '../text'
import { InputStatus, InputStatusValues, InputType, InputTypeValues } from './InputEnum'
import { InputProps, InputWebEvents } from './InputProps'
import InputGauge from './gauge/InputGauge'

interface InputProp extends InputProps, InputWebEvents {}

/**
 * Input Component
 * @param name {string} Input name
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
 * @param search {boolean} define if input is a search type
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
 * @param hovered {boolean} Hover mode
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
const Input = ({
  forceControl,
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
  hovered,
  focused,
  hasIcon,
  customIcon,
  status,
  help,
  iconClassname,
  search = false,
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
  ...others
}: InputProp): JSX.Element => {
  const hasPlaceholder = placeholder !== undefined && placeholder.length > 0
  const inputIcon = new Map()
  inputIcon.set(InputStatus.SUCCESS, IconName.CHECK_CIRCLE)
  inputIcon.set(InputStatus.WARNING, IconName.EXCLAMATION_CIRCLE)
  inputIcon.set(InputStatus.ERROR, IconName.EXCLAMATION_CIRCLE)

  const { styled } = useTrilogyContext()

  const [_value, setValue] = useState<string>(defaultValue ?? '')
  const [isHovered, setIsHovered] = useState<boolean>(hovered ?? false)
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
    clsx('control', hasPlaceholder && !search && has('dynamic-placeholder'), {
      [has('icons-right')]: hasIcon ?? (customIcon || customIconRight || type === 'password'),
      ['has-icons-left']: customIconLeft || search,
    }),
  )

  const validator =
    !customValidator && patternValidator
      ? (value: string) => (patternValidator.test(value) ? InputStatus.SUCCESS : InputStatus.ERROR)
      : customValidator

  useEffect(() => {
    setValue(value ?? defaultValue ?? '')
  }, [value, defaultValue])

  useEffect(() => {
    setIsHovered(hovered ?? false)
  }, [hovered])

  useEffect(() => {
    setIsFocused(focused ?? false)
  }, [focused])

  useEffect(() => {
    if (isFocused) {
      setIsDirty(true)
    } else if (isDirty) {
      setIsTouched(true)
    }
  }, [isFocused, isDirty])

  useEffect(() => {
    if (!validator || !isTouched) {
      return
    }
    setLocalStatus(validator(_value))
  }, [isFocused, isTouched])

  useEffect(() => {
    setLocalStatus(status || InputStatus.DEFAULT)
  }, [status])

  useEffect(() => {
    if (onStatusChange) {
      onStatusChange(localStatus)
    }
  }, [localStatus])

  return (
    <div className={wrapperClasses} data-has-gauge={securityGauge ? true : undefined}>
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
          ref={reference}
          disabled={disabled}
          minLength={minLength}
          maxLength={maxLength}
          autoComplete={autoCompleteType}
          onClick={(e: React.MouseEvent<Element>) => {
            const target = e.target as HTMLFormElement
            if (onClick) {
              onClick({
                inputName: target.name,
                inputValue: target.value,
              })
            }
          }}
          onKeyUp={(e: React.KeyboardEvent) => {
            const target = e.target as HTMLFormElement
            if (onKeyUp) {
              onKeyUp({
                inputName: target.name,
                inputValue: target.value,
                inputKeyCode: e.keyCode,
                preventDefault: () => e.preventDefault(),
              })
            }
          }}
          onKeyPress={(e: React.KeyboardEvent) => {
            const target = e.target as HTMLFormElement
            if (onKeyPress) {
              onKeyPress({
                inputName: target.name,
                inputValue: target.value,
                inputKeyCode: e.keyCode,
                preventDefault: () => e.preventDefault(),
              })
            }
          }}
          onChange={(e) => {
            // --- solution to prevent cursor jump ---
            if (
              inputType !== InputType.DATE &&
              inputType !== InputType.DATETIME_LOCAL &&
              inputType !== InputType.NUMBER &&
              inputType !== InputType.EMAIL
            ) {
              const caret = e.target.selectionStart
              const element = e.target
              window.requestAnimationFrame(() => {
                element.selectionStart = caret
                element.selectionEnd = caret
              })
            }
            // ---------------------------------------

            // eslint-disable-next-line no-console
            if (!forceControl) setValue(e.target.value)
            if (onChange) {
              onChange({
                inputName: e.target.name,
                inputValue: e.target.value,
                inputSelectionStart: e.target.selectionStart,
              })
            }
          }}
          onFocus={(e) => {
            onFocus?.(e)
            setIsFocused(true)
          }}
          onBlur={(e) => {
            onBlur?.(e)
            setIsFocused(false)
          }}
          onMouseEnter={(e) => {
            onMouseEnter?.(e)
            setIsHovered(true)
          }}
          onMouseLeave={(e) => {
            onMouseLeave?.(e)
            setIsHovered(false)
          }}
          placeholder={placeholder}
        />
        {hasPlaceholder && !search && <label>{placeholder}</label>}
        {hasIcon && localStatus && !customIcon && !loading && !customIconLeft && !customIconRight && (
          <div
            onClick={() => {
              if (onIconClick) {
                onIconClick({ inputName: name ?? '', inputValue: _value })
              }
            }}
          >
            <Icon className={iconClassname} name={inputIcon.get(localStatus)} size={IconSize.SMALL} />
          </div>
        )}
        {customIcon && !localStatus && !loading && (
          <div
            onClick={() => {
              if (onIconClick) {
                onIconClick({ inputName: name ?? '', inputValue: _value })
              }
            }}
          >
            <Icon className={iconClassname} name={customIcon} size={IconSize.SMALL} />
          </div>
        )}
        {customIconLeft && !loading && (
          <div
            onClick={() => {
              if (onIconClick) {
                onIconClick({ inputName: name ?? '', inputValue: _value })
              }
            }}
          >
            <Icon
              className={clsx(customIconLeft && 'icon-left', iconClassname)}
              name={customIconLeft}
              size={IconSize.SMALL}
            />
          </div>
        )}
        {customIconRight && !loading && type !== 'password' && (
          <div
            onClick={() => {
              if (onIconClick) {
                onIconClick({ inputName: name ?? '', inputValue: _value })
              }
            }}
          >
            <Icon
              className={clsx(customIconRight && 'icon-right', iconClassname)}
              name={customIconRight}
              size={IconSize.SMALL}
            />
          </div>
        )}
        {!loading && type === 'password' && (
          <div
            data-show-pwd
            onClick={() => {
              if (inputType === 'password') {
                setInputType('text')
                setIsShowPwd(true)
              } else {
                setInputType('password')
                setIsShowPwd(false)
              }

              if (onIconClick) {
                onIconClick({ inputName: name ?? '', inputValue: _value })
              }
            }}
          >
            <Icon
              className={clsx('icon-right', iconClassname)}
              name={isShowPwd ? 'tri-eye-slash' : 'tri-eye'}
              size={IconSize.SMALL}
            />
          </div>
        )}
        {customIcon && localStatus && !loading && (
          <div
            onClick={() => {
              if (onIconClick) {
                onIconClick({ inputName: name ?? '', inputValue: _value })
              }
            }}
          >
            <Icon className={iconClassname} name={customIcon} size={IconSize.SMALL} />
          </div>
        )}
        {search && !customIcon && localStatus === 'default' && !loading && (
          <div
            onClick={() => {
              if (onIconClick) {
                onIconClick({ inputName: name ?? '', inputValue: _value })
              }
            }}
          >
            <Icon color={IconColor.MAIN} className={iconClassname} name={IconName.SEARCH} size={IconSize.SMALL} />

            {/* Close icon search */}
            {_value && _value.length > 0 && (
              <Icon
                onClick={() => setValue('')}
                className={hashClass(styled, clsx(is('justified-self')))}
                name={IconName.TIMES_CIRCLE}
                size={IconSize.SMALL}
              />
            )}
          </div>
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

export default Input
