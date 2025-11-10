import translation from '@trilogy-ds/locales/lib/input'
import clsx from 'clsx'
import React, { useCallback, useEffect, useId, useState } from 'react'
import { Text, TextLevels, TextMarkup } from '../../components/text'
import { useTrilogyContext } from '../../context'
import { hashClass } from '../../helpers'
import { Accessibility, TypographyColor } from '../../objects'
import { has, is } from '../../services'
import { ComponentName } from '../enumsComponentsName'
import { Icon, IconColor, IconName, IconNameValues, IconSize } from '../icon'
import { InputStatus, InputStatusValues, InputType, InputTypeValues } from './InputEnum'
import { InputProps, InputRef, InputWebEvents } from './InputProps'
import InputGauge from './gauge/InputGauge'

export interface InputProp extends Accessibility, InputProps, InputWebEvents {}

interface IconWrapper {
  className?: string
  name: IconName | IconNameValues
  color?: IconColor
  onPress?: () => void
  closeIconSearch?: boolean
  srOnly?: string
  showPassword?: boolean
}

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
 * @param readOnly {boolean} Read only input
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param loading {boolean} Loading input
 * @param value {string} Value for Input
 * @param focused {boolean} Fucus mode
 * @param className {string} Additional CSS Classes
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
const Input = React.forwardRef<InputRef, InputProp>(
  (
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
      securityGauge,
      validationRules,
      securityRules,
      required,
      readOnly,
      ...others
    },
    ref,
  ): JSX.Element => {
    const { styled } = useTrilogyContext()
    const idHelp = useId()
    const idSample = useId()

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
    const loader = hashClass(styled, clsx(is('searching')))
    const inputLabelClasses = hashClass(styled, 'input-label')
    const iconTimesClasses = hashClass(styled, clsx(is('justified-self')))
    const srOnlyClasses = hashClass(styled, clsx('sr-only'))
    const classes = hashClass(styled, clsx('input', localStatus && is(localStatus)))
    const wrapperClasses = hashClass(
      styled,
      clsx('field', className, type === InputType.PASSWORD && securityGauge && has('gauge')),
    )

    const hasIcon = iconNameLeft || iconNameRight

    const controlClasses = hashClass(
      styled,
      clsx('control', {
        [has('icons-right')]: hasIcon ?? (iconNameRight || type === InputType.PASSWORD),
        [has('icons-left')]: iconNameLeft || type === InputType.SEARCH,
      }),
    )

    const onPressKey = useCallback((e: React.KeyboardEvent) => {
      const target = e.target as HTMLFormElement
      return {
        inputName: target.name,
        inputValue: target.value,
        inputKeyCode: e.keyCode,
        target,
        event: e,
        preventDefault: () => e.preventDefault(),
      }
    }, [])

    const IconWrapper = useCallback(
      ({ className, name, color, closeIconSearch, onPress, srOnly, showPassword }: IconWrapper) => {
        const Markup = showPassword ? 'button' : 'div'
        return (
          <Markup
            {...(showPassword && { 'data-show-pwd': true, type: 'button' })}
            onClick={(e) => {
              onPress && onPress()
              if (onIconClick) {
                onIconClick({ inputName: name ?? '', inputValue: _value, target: e.target })
              }
            }}
          >
            <Icon className={className} name={name} size={IconSize.SMALL} color={color} />
            {_value && _value.length > 0 && closeIconSearch && (
              <Icon
                onClick={() => setValue('')}
                className={iconTimesClasses}
                name={IconName.TIMES_CIRCLE}
                size={IconSize.SMALL}
              />
            )}
            {showPassword && srOnly && <span className={srOnlyClasses}>{srOnly}</span>}
          </Markup>
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
        {label && (
          <label className={inputLabelClasses} htmlFor={id}>
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
            readOnly={readOnly}
            {...others}
            aria-label={!label ? accessibilityLabel : undefined}
            type={inputType}
            className={classes}
            value={value}
            defaultValue={defaultValue}
            name={name}
            onSubmit={onSubmit}
            autoCapitalize={inputType === InputType.PASSWORD ? 'off' : undefined}
            ref={ref}
            disabled={disabled}
            minLength={minLength}
            maxLength={maxLength}
            autoComplete={autoCompleteType}
            onKeyUp={(e: React.KeyboardEvent) => onKeyUp && onKeyUp(onPressKey(e))}
            onKeyPress={(e: React.KeyboardEvent) => onKeyPress && onKeyPress(onPressKey(e))}
            onMouseEnter={(e) => onMouseEnter?.(e)}
            onMouseLeave={(e) => onMouseLeave?.(e)}
            placeholder={placeholder}
            onClick={(e: React.MouseEvent<Element>) => {
              const target = e.target as HTMLFormElement
              if (onClick) {
                onClick({
                  inputName: target.name,
                  inputValue: target.value,
                  target: target,
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
                  target: e.target,
                  event: e,
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
          />
          {hasIcon && !localStatus && !loading && iconNameLeft && <IconWrapper name={iconNameLeft} />}

          {(iconNameLeft || type === InputType.SEARCH) && (
            <IconWrapper className='icon-left' name={iconNameLeft || IconName.SEARCH} />
          )}

          {iconNameRight && !loading && type !== InputType.PASSWORD && (
            <IconWrapper className='icon-right' name={iconNameRight} />
          )}

          {!loading && type === InputType.PASSWORD && (
            <IconWrapper
              showPassword
              srOnly={!isShowPwd ? translation.showPassword : translation.hidePassword}
              className='icon-right'
              name={isShowPwd ? IconName.EYE_SLASH : IconName.EYE}
              onPress={() => {
                if (inputType === InputType.PASSWORD) {
                  setInputType(InputType.TEXT)
                  setIsShowPwd(true)
                } else {
                  setInputType(InputType.PASSWORD)
                  setIsShowPwd(false)
                }
              }}
            />
          )}
          {loading && <span className={loader} />}
        </div>
        {help && (
          <Text className={helpClasses} id={idHelp}>
            {help}
          </Text>
        )}

        {securityGauge && type === InputType.PASSWORD && (
          <InputGauge
            validationRules={validationRules}
            securityRules={securityRules}
            styled={styled}
            inputValue={_value}
          />
        )}
      </div>
    )
  },
)

Input.displayName = ComponentName.Input
export default Input
