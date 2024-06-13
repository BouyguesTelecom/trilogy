import clsx from 'clsx'
import { AutoCompleteItem, AutoCompleteMenu } from 'components/autocomplete'
import { defaultMatching, getLabel } from 'components/autocomplete/Autocomplete.helpers'
import { debounce } from 'components/autocomplete/utils'
import React, { useCallback, useEffect, useState } from 'react'
import { useTrilogyContext } from '../../context'
import { hashClass } from '../../helpers'
import { has, is } from '../../services'
import { Icon, IconColor, IconName, IconNameValues, IconSize } from '../icon'
import { Text } from '../text'
import { InputStatus, InputStatusValues, InputType, InputTypeValues } from './InputEnum'
import { InputProp, Item } from './InputProps'
import InputGauge from './gauge/InputGauge'

interface IconWrapper {
  className?: string
  name: IconName | IconNameValues
  color?: IconColor
  onPress?: () => void
  closeIconSearch?: boolean
}

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
const Input = <T extends string | Item<unknown> = string>({
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

  mode = 'input',
  data,
  classNameMenu,
  absoluteMenu,
  fullwidthMenu,
  matching = defaultMatching,
  onItemSelected,
  displayMenu = true,
  getSuggestions,
  debounceSuggestionsTimeout,
  ...others
}: InputProp<T>): JSX.Element => {
  const { styled } = useTrilogyContext()

  const hasPlaceholder = placeholder !== undefined && placeholder.length > 0
  const inputIcon = new Map()
  inputIcon.set(InputStatus.SUCCESS, IconName.CHECK_CIRCLE)
  inputIcon.set(InputStatus.WARNING, IconName.EXCLAMATION_CIRCLE)
  inputIcon.set(InputStatus.ERROR, IconName.EXCLAMATION_CIRCLE)
  const { children, ...othersProps } = others

  const [_value, setValue] = useState<string>(defaultValue ?? '')
  const [isFocused, setIsFocused] = useState<boolean>(focused ?? false)
  const [isDirty, setIsDirty] = useState<boolean>(false)
  const [isTouched, setIsTouched] = useState<boolean>(false)
  const [localStatus, setLocalStatus] = useState<InputStatus | InputStatusValues>(status || InputStatus.DEFAULT)
  const [inputType, setInputType] = useState<InputType | InputTypeValues>(type)
  const [isShowPwd, setIsShowPwd] = useState<boolean>(false)
  const [itemSelected, setItemSelected] = useState<T | null>(null)
  const [activeItem, setActiveItem] = useState<number>(0)
  const [isAutocompleteMenuVisible, setIsAutocompleteMenuVisible] = useState<boolean>(displayMenu || false)
  const [searchAutocomplete, setSearchAutocomplete] = useState<T[]>([])

  const helpClasses = clsx('help', localStatus && is(localStatus))
  const classes = hashClass(styled, clsx('input', localStatus && is(localStatus)))
  const wrapperClasses = hashClass(
    styled,
    clsx(
      'field',
      className,
      type === 'password' && securityGauge && 'has-gauge',
      mode === 'autocomplete' && 'autocomplete-input',
    ),
  )
  const controlClasses = hashClass(
    styled,
    clsx('control', hasPlaceholder && !search && has('dynamic-placeholder'), {
      [has('icons-right')]: hasIcon ?? (customIcon || customIconRight || type === 'password'),
      ['has-icons-left']: customIconLeft || search,
    }),
  )

  const onPressKey = useCallback((e: React.KeyboardEvent) => {
    const target = e.target as HTMLFormElement
    return {
      inputName: target.name,
      inputValue: target.value,
      inputKeyCode: e.keyCode,
      preventDefault: () => e.preventDefault(),
    }
  }, [])

  const IconWrapper = useCallback(
    ({ className, name, color, closeIconSearch, onPress }: IconWrapper) => {
      return (
        <div
          data-show-pwd
          onClick={() => {
            onPress && onPress()
            if (onIconClick) {
              onIconClick({ inputName: name ?? '', inputValue: _value })
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

  useEffect(() => {
    if (mode === 'autocomplete') {
      setActiveItem(0)
      if (data?.length) {
        if (matching) {
          setSearchAutocomplete(matching(data, _value))
        }
      }
      if (itemSelected && getLabel(itemSelected) !== _value) {
        setItemSelected(null)
      }
    }
  }, [_value, mode, matching])

  useEffect(() => {
    if (mode === 'autocomplete') {
      matching && data && setSearchAutocomplete(matching(data, _value))
    }
  }, [data, matching])

  const onTextChanged = async (e) => {
    setIsAutocompleteMenuVisible(true)

    if (onChange) {
      onChange({
        inputName: name || '',
        inputValue: e.inputValue,
        inputSelectionStart: null,
      })
    }

    // Check if the input value is a regular expression or a string
    if (e.inputValue.startsWith('/') && e.inputValue.endsWith('/')) {
      try {
        const pattern = e.inputValue.substring(1, e.inputValue.lastIndexOf('/'))
        setValue(new RegExp(pattern, 'i').source)
      } catch (error) {
        // If the regular expression is invalid, keep the input value as a string
        setValue(e.inputValue)
      }
    } else {
      setValue(e.inputValue)
    }

    if (getSuggestions) {
      const data = await getSuggestions(e.inputValue)
      setSearchAutocomplete(data)
    } else if (matching && data) {
      setSearchAutocomplete(matching(data, e.inputValue))
    }
  }
  const onInputChange = debounceSuggestionsTimeout ? debounce(onTextChanged, debounceSuggestionsTimeout) : onTextChanged

  const suggestionSelected = (value: T, data: T[], search: T[]) => {
    setIsAutocompleteMenuVisible(false)
    setValue(getLabel(value))
    setItemSelected(value)
    if (data || search) {
      if (onItemSelected) {
        onItemSelected({
          value: value,
          index: value ? (data.length ? data : searchAutocomplete).indexOf(value) : -1,
        })
      }
    }
  }

  const handleKeyPress = (e) => {
    switch (e.inputKeyCode) {
      case 38:
        if (activeItem === 0) return
        setActiveItem(activeItem - 1)
        break
      case 40:
        if (activeItem === searchAutocomplete.length - 1) return
        setActiveItem(activeItem + 1)
        break
      case 13:
        if (searchAutocomplete[activeItem] != null) {
          suggestionSelected(searchAutocomplete[activeItem], data, search)
        }
        break
      default:
    }
  }

  const handleFocus = (event: React.FocusEvent | React.BaseSyntheticEvent) => {
    setIsAutocompleteMenuVisible(true)
    if (onFocus) onFocus(event)
  }

  return (
    <div className={hashClass(styled, clsx('control'))}>
      <div className={wrapperClasses} data-has-gauge={securityGauge ? true : undefined}>
        <div className={controlClasses}>
          <input
            required={required}
            role={'textbox'}
            {...othersProps}
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
            onKeyUp={(e: React.KeyboardEvent) => {
              onKeyUp && onKeyUp(onPressKey(e))
              mode === 'autocomplete' && handleKeyPress(e)
            }}
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
                mode === 'input' &&
                  onChange({
                    inputName: e.target.name,
                    inputValue: e.target.value,
                    inputSelectionStart: e.target.selectionStart,
                  })
                mode === 'autocomplete' &&
                  onInputChange({
                    inputName: e.target.name,
                    inputValue: e.target.value,
                    inputSelectionStart: e.target.selectionStart,
                  })
              }
            }}
            onFocus={(e) => {
              onFocus?.(e)
              setIsFocused(true)
              mode === 'autocomplete' && handleFocus(e)
            }}
            onBlur={(e) => {
              onBlur?.(e)
              setIsFocused(false)
            }}
          />
          {hasPlaceholder && !search && <label>{placeholder}</label>}
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
          {search && !customIcon && localStatus === 'default' && !loading && (
            <IconWrapper
              color={IconColor.MAIN}
              className={iconClassname}
              name={IconName.SEARCH}
              closeIconSearch={true}
            />
          )}
          {loading && <span className={hashClass(styled, clsx(is('searching')))} />}
        </div>
        {help && <Text className={helpClasses}>{help}</Text>}

        {securityGauge && type === 'password' && (
          <InputGauge validationRules={validationRules} styled={styled} inputValue={_value} />
        )}
      </div>
      {isAutocompleteMenuVisible && mode === 'autocomplete' && (
        <div className={hashClass(styled, clsx(is('autocomplete'), is('active')))}>
          {searchAutocomplete.length > 0 && (
            <AutoCompleteMenu
              testId={testId}
              absolute={absoluteMenu}
              fullwidth={fullwidthMenu}
              className={classNameMenu}
            >
              {searchAutocomplete.map((item, i) => (
                <AutoCompleteItem<T>
                  active={activeItem === i}
                  key={i}
                  testId={testId}
                  item={item}
                  suggestionSelected={(v: T) => suggestionSelected(v, data, search)}
                >
                  {children ? children(item) : getLabel(item)}
                </AutoCompleteItem>
              ))}
            </AutoCompleteMenu>
          )}
        </div>
      )}
    </div>
  )
}

export default Input
