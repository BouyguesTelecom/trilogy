import React, { RefObject, useEffect, useState } from 'react'
import { has, is } from '../../services'
import { Icon, IconColor, IconName, IconSize } from '../icon'
import { Text } from '../text'
import { InputStatus, InputStatusValues, InputType, InputTypeValues } from './InputEnum'
import { InputProps, InputWebEvents } from './InputProps'
import clsx from 'clsx'
import { hashClass } from '../../helpers'
import { useTrilogyContext } from '../../context'
import { getColorStyle, TrilogyColor } from '../../objects'

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
  const { styled } = useTrilogyContext()

  const [_value, setValue] = useState<string>(defaultValue ?? '')
  const [isHovered, setIsHovered] = useState<boolean>(hovered ?? false)
  const [isFocused, setIsFocused] = useState<boolean>(focused ?? false)
  const [isDirty, setIsDirty] = useState<boolean>(false)
  const [isTouched, setIsTouched] = useState<boolean>(false)
  const [localStatus, setLocalStatus] = useState<InputStatus | InputStatusValues>(status || InputStatus.DEFAULT)

  const validator =
    !customValidator && patternValidator
      ? (value: string) => (patternValidator.test(value) ? InputStatus.SUCCESS : InputStatus.ERROR)
      : customValidator
  const [inputType, setInputType] = useState<InputType | InputTypeValues>(type)
  const [isShowPwd, setIsShowPwd] = useState<boolean>(false)

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

  const inputIcon = new Map()
  inputIcon.set(InputStatus.SUCCESS, IconName.CHECK_CIRCLE)
  inputIcon.set(InputStatus.WARNING, IconName.EXCLAMATION_CIRCLE)
  inputIcon.set(InputStatus.ERROR, IconName.EXCLAMATION_CIRCLE)

  const wrapperClasses = hashClass(
    styled,
    clsx('field', className, type === 'password' && securityGauge && 'has-gauge'),
  )
  const hasPlaceholder = placeholder !== undefined && placeholder.length > 0
  const iconTimesClasse = hashClass(styled, clsx('tri-times'))
  const iconCheckClasse = hashClass(styled, clsx('tri-check-circle'))
  const successClasse = hashClass(styled, clsx('is-success'))
  const iconClasse = hashClass(styled, clsx('icon'))

  const controlClasses = hashClass(
    styled,
    clsx('control', hasPlaceholder && !search && has('dynamic-placeholder'), {
      [has('icons-right')]: hasIcon ?? (customIcon || customIconRight || type === 'password'),
      [is('disabled')]: disabled,
      ['has-icons-left']: customIconLeft || search,
    }),
  )

  const classes = hashClass(
    styled,
    clsx(
      'input',
      localStatus && is(localStatus),
      isHovered && !isFocused && is('hovered'),
      isFocused && !isHovered && is('focused'),
    ),
  )

  const helpClasses = clsx('help', localStatus && is(localStatus))
  const refLengthVerify = React.useRef<HTMLElement>(null)
  const refSpecialCharsVerify = React.useRef<HTMLElement>(null)
  const refNumberVerify = React.useRef<HTMLElement>(null)
  const refUppercaseVerify = React.useRef<HTMLElement>(null)
  const refLowerercaseVerify = React.useRef<HTMLElement>(null)
  const [points, setPoints] = React.useState<number>(0)
  const [nbAllVerifies, setNbAllVerifies] = React.useState<number>(0)
  const [verifies, setVerifies] = React.useState<IVerifies>({})

  interface IVerifies {
    [key: string]: { fn: (e: string) => boolean; ref: RefObject<HTMLElement> }
  }

  const lengthVerify = {
    fn: (e: string) => {
      if (validationRules?.length?.max && !validationRules.length.min) {
        return e.length > 0 && e.length <= validationRules.length.max
      }
      if (validationRules?.length?.min && !validationRules?.length?.max) {
        return e.length >= validationRules.length.min
      }
      if (validationRules?.length?.max && validationRules.length.min) {
        return e.length >= validationRules.length.min && e.length <= validationRules.length.max
      }
      return false
    },
    ref: refLengthVerify,
  }

  const specialCharsverify = {
    // eslint-disable-next-line
    fn: (e: string) => /[^\w\*]/.test(e),
    ref: refSpecialCharsVerify,
  }

  const numberVerify = {
    // eslint-disable-next-line
    fn: (e: string) => /[0-9]/.test(e),
    ref: refNumberVerify,
  }

  const uppercaseVerify = {
    // eslint-disable-next-line
    fn: (e: string) => /[A-Z]/.test(e),
    ref: refUppercaseVerify,
  }

  const lowercaseVerify = {
    // eslint-disable-next-line
    fn: (e: string) => /[a-z]/.test(e),
    ref: refLowerercaseVerify,
  }

  React.useEffect(() => {
    const data = {}
    validationRules &&
      Object.keys(validationRules).map((key) => {
        if (key === 'number') Object.assign(data, { numberVerify })
        if (key === 'length') Object.assign(data, { lengthVerify })
        if (key === 'lowercase') Object.assign(data, { lowercaseVerify })
        if (key === 'uppercase') Object.assign(data, { uppercaseVerify })
        if (key === 'specialChars') Object.assign(data, { specialCharsverify })
      })
    setVerifies(data)
    setNbAllVerifies(Object.keys(data).length)
  }, [validationRules])

  const handleVerifyPwd = (e: string) => {
    const verifiesTests: boolean[] = []

    Object.keys(verifies).map((key: string) => {
      const test = verifies[key].fn(e)
      verifiesTests.push(test)

      if (test) {
        verifies[key].ref.current?.classList.remove(iconTimesClasse)
        verifies[key].ref.current?.classList.add(iconCheckClasse, successClasse)
      } else {
        verifies[key].ref.current?.classList.remove(iconCheckClasse, successClasse)
        verifies[key].ref.current?.classList.add(iconTimesClasse)
      }
    })
    setPoints(verifiesTests.filter((item) => item).length)
  }

  const widthGauge = React.useMemo(() => {
    const calc = Number(((points / nbAllVerifies) * 100).toFixed(0))
    if (calc <= 50 && calc > 0) return '50%'
    if (calc <= 99 && calc > 50) return '75%'
    if (calc === 100) return '100%'
    return '0%'
  }, [points, nbAllVerifies])

  const colorGauge = React.useMemo(() => {
    const calc = Number(((points / nbAllVerifies) * 100).toFixed(0))
    if (calc <= 50 && calc > 0) return getColorStyle(TrilogyColor.ERROR)
    if (calc <= 99 && calc > 50) return getColorStyle(TrilogyColor.WARNING)
    if (calc === 100) return getColorStyle(TrilogyColor.SUCCESS)
    return '#D1D1D1'
  }, [points, nbAllVerifies])

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
              })
            }
          }}
          onChange={(e) => {
            // --- solution to prevent cursor jump ---
            if (inputType !== InputType.DATE && inputType !== InputType.DATETIME_LOCAL && inputType !== InputType.NUMBER && inputType !== InputType.EMAIL ) {
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

            if (type === 'password' && securityGauge) {
              handleVerifyPwd(e.target.value)
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
            <Icon color={IconColor.TERTIARY} className={iconClassname} name={IconName.SEARCH} size={IconSize.SMALL} />

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
        <div data-testid='security-gauge' className={hashClass(styled, clsx('security-gauge-container'))}>
          <div className={hashClass(styled, clsx('security-gauge'))}>
            <div
              data-gauge
              style={{ width: widthGauge, backgroundColor: colorGauge }}
              className={hashClass(styled, clsx('gauge'))}
            ></div>
          </div>
          <div className={hashClass(styled, clsx('security-gauge-verifies'))}>
            <div>
              {validationRules && validationRules.length && (
                <div data-security-length className={hashClass(styled, clsx('security security-length'))}>
                  <span data-icon-securities className={iconClasse}>
                    <i
                      ref={refLengthVerify}
                      className={iconTimesClasse}
                      data-length-min={validationRules.length.min}
                      data-length-max={validationRules.length.max}
                    ></i>
                  </span>
                  <span>
                    {validationRules.length.min &&
                      validationRules.length.max &&
                      `Entre ${validationRules.length.min} et ${validationRules.length.max} caractères`}
                    {validationRules.length.min &&
                      !validationRules.length.max &&
                      `Minimum ${validationRules.length.min} caractères`}
                    {validationRules.length.max &&
                      !validationRules.length.min &&
                      `Maximum ${validationRules.length.max} caractères`}
                  </span>
                </div>
              )}
              {validationRules && validationRules.specialChars && (
                <div data-security-special-chars className={hashClass(styled, clsx('security security-special-chars'))}>
                  <span data-icon-securities className={iconClasse}>
                    <i ref={refSpecialCharsVerify} className={iconTimesClasse}></i>
                  </span>
                  <span>Caractères spéciaux</span>
                </div>
              )}
              {validationRules && validationRules.number && (
                <div data-security-number className={hashClass(styled, clsx('security security-number'))}>
                  <span data-icon-securities className={iconClasse}>
                    <i ref={refNumberVerify} className={iconTimesClasse}></i>
                  </span>
                  <span>Chiffre</span>
                </div>
              )}
            </div>

            <div>
              {validationRules && validationRules.uppercase && (
                <div data-security-uppercase className={hashClass(styled, clsx('security security-uppercase'))}>
                  <span data-icon-securities className={iconClasse}>
                    <i ref={refUppercaseVerify} className={iconTimesClasse}></i>
                  </span>
                  <span>Majuscule</span>
                </div>
              )}
              {validationRules && validationRules.lowercase && (
                <div data-security-lowercase className={hashClass(styled, clsx('security security-lowercase'))}>
                  <span data-icon-securities className={iconClasse}>
                    <i ref={refLowerercaseVerify} className={iconTimesClasse}></i>
                  </span>
                  <span>Minuscule</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Input
