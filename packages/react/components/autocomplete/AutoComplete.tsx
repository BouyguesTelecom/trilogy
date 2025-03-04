import clsx from 'clsx'
import React, { FocusEvent, useEffect, useState } from 'react'

import { Input } from '@/components/input'
import { InputAutoCompleteType } from '@/components/input/InputEnum'
import { InputChangeEventWeb, InputKeyboardEvent } from '@/components/input/InputProps'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { is } from '@/services'
import { ComponentName } from '../enumsComponentsName'
import { AutoCompletePropsWeb, AutocompleteRef, Item } from './AutoCompleteProps'
import { defaultMatching, getLabel } from './Autocomplete.helpers'
import AutoCompleteItem from './item'
import AutoCompleteMenu from './menu'
import { debounce } from './utils'

const AutoCompleteRef = <T extends string | Item<unknown> = string>(
  {
    defaultValue,
    value,
    classNameMenu,
    absoluteMenu,
    fullwidthMenu,
    placeholder,
    data,
    status,
    onBlur,
    onChange,
    name,
    matching = defaultMatching,
    displayMenu = true,
    onItemSelected,
    iconNameLeft,
    iconNameRight,
    disabled,
    children,
    accessibilityLabel,
    onIconClick,
    getSuggestions,
    debounceSuggestionsTimeout,
    onFocus,
    id,
    loading,
  }: AutoCompletePropsWeb<T>,
  ref: React.Ref<HTMLInputElement>,
): JSX.Element => {
  const { styled } = useTrilogyContext()

  const [itemSelected, setItemSelected] = useState<T | null>(null)
  const [_inputValue, setInputValue] = useState<string>(value ?? '')
  const [activeItem, setActiveItem] = useState<number>(0)
  const [isAutocompleteMenuVisible, setIsAutocompleteMenuVisible] = useState<boolean>(displayMenu || false)
  const [search, setSearch] = useState<T[]>([])

  const autocompleteClasses = hashClass(styled, clsx(is('autocomplete'), is('active')))

  useEffect(() => {
    setInputValue(value || '')
  }, [value])

  useEffect(() => {
    setActiveItem(0)
    if (data?.length) {
      if (matching) {
        setSearch(matching(data, _inputValue))
      }
    }
    if (itemSelected && getLabel(itemSelected) !== _inputValue) {
      setItemSelected(null)
    }
  }, [_inputValue])

  useEffect(() => {
    setSearch(matching(data, _inputValue))
  }, [data])

  const onTextChanged = async (e: InputChangeEventWeb) => {
    setIsAutocompleteMenuVisible(true)

    if (onChange) {
      onChange({
        inputName: name || '',
        inputValue: e.inputValue,
        inputSelectionStart: null,
        target: e.target,
      })
    }

    // Check if the input value is a regular expression or a string
    if (e.inputValue.startsWith('/') && e.inputValue.endsWith('/')) {
      try {
        const pattern = e.inputValue.substring(1, e.inputValue.lastIndexOf('/'))
        setInputValue(new RegExp(pattern, 'i').source)
      } catch (error) {
        // If the regular expression is invalid, keep the input value as a string
        setInputValue(e.inputValue)
      }
    } else {
      setInputValue(e.inputValue)
    }

    if (getSuggestions) {
      const data = await getSuggestions(e.inputValue)
      setSearch(data)
    } else if (matching && data) {
      setSearch(matching(data, e.inputValue))
    }
  }
  const onInputChange = debounceSuggestionsTimeout ? debounce(onTextChanged, debounceSuggestionsTimeout) : onTextChanged

  const suggestionSelected = (value: T, data: T[], search: T[]) => {
    setIsAutocompleteMenuVisible(false)
    setInputValue(getLabel(value))
    setItemSelected(value)
    if (data || search) {
      if (onItemSelected) {
        onItemSelected({
          value: value,
          index: value ? (data.length ? data : search).indexOf(value) : -1,
        })
      }
    }
  }

  const handleKeyPress = (e: InputKeyboardEvent) => {
    switch (e.inputKeyCode) {
      case 38:
        if (activeItem === 0) return
        setActiveItem(activeItem - 1)
        break
      case 40:
        if (activeItem === search.length - 1) return
        setActiveItem(activeItem + 1)
        break
      case 13:
        if (search[activeItem] != null) {
          suggestionSelected(search[activeItem], data, search)
        }
        break
      default:
    }
  }

  const handleFocus = (event: FocusEvent<HTMLInputElement, Element>) => {
    setIsAutocompleteMenuVisible(true)
    if (onFocus) onFocus(event)
  }

  return (
    <div className={hashClass(styled, clsx('control'))}>
      <Input
        id={id}
        ref={ref}
        defaultValue={defaultValue}
        accessibilityLabel={accessibilityLabel}
        iconNameLeft={iconNameLeft}
        iconNameRight={iconNameRight}
        placeholder={placeholder}
        {...(name ? { name: name } : {})}
        className='autocomplete-input'
        type='text'
        status={status}
        autoCompleteType={InputAutoCompleteType.OFF}
        disabled={disabled}
        // Add delay for selection of suggestion
        onBlur={(e: FocusEvent<HTMLInputElement, Element>) => {
          setTimeout(() => setIsAutocompleteMenuVisible(false), 250)
          if (onBlur) onBlur(e)
        }}
        onFocus={handleFocus}
        onKeyUp={handleKeyPress}
        value={_inputValue}
        onChange={(event: InputChangeEventWeb) => {
          onInputChange(event)
        }}
        onIconClick={onIconClick}
        loading={loading}
      />

      {isAutocompleteMenuVisible && (
        <div className={autocompleteClasses}>
          {search.length > 0 && (
            <AutoCompleteMenu absolute={absoluteMenu} fullwidth={fullwidthMenu} className={classNameMenu}>
              {search.map((item, i) => (
                <AutoCompleteItem<T>
                  active={activeItem === i}
                  key={i}
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
      <div />
    </div>
  )
}

AutoCompleteRef.displayName = ComponentName.AutoComplete

/**
 * AutoComplete Component
 * @param placeholder {string} placeholder for input
 * @param defaultValue {string} Default Value for Input
 * @param data {string[]} Datas AutoComplete list Item
 * @param value {string} Value of Input
 * @param onChange {Function} OnChange Input Event
 * @param onFocus {Function} OnFocus Input Event
 * @param children {Function} Custom Component for dropdown list
 * @param displayMenu {boolean} Display Autocomplete Menu (default: true)
 * @param matching {Function} matching function
 * @param status {InputStatus} Input with status - (SUCCESS|WARNING|ERROR|DEFAULT)
 * @param onBlur {Function} onBlur Input Event
 * @param testId {string} Test Id for Test Integration
 * @param disabled {boolean} Disabled input
 * @param onIconClick {Function} onIconClick Input Event
 * @param onItemSelected {Function} onSelectedItemList event
 * @param customIcon {string} Additional icon classes
 * @param debounceSuggestionsTimeout {number} Timeout for getSuggestions debounce
 * @param getSuggestions {Function} getSuggestions event
 * - ------------------ WEB PROPERTIES -----------------------
 * @param name {string} Input name
 * @param classNameMenu {string} Additionnal CSS Classes for Menu
 * @param absoluteMenu {boolean} Absolute position for Menu
 * @param fullwidthMenu {boolean} Fullwidth size for Menu
 * @param className {string} Additionnal CSS Classes
 * @param accessibilityLabel {string} Accessibility label
 * @param loading {boolean} Loading input
 */
const AutoComplete = React.forwardRef(AutoCompleteRef) as <T>(
  props: AutoCompletePropsWeb<T> & { ref?: React.ForwardedRef<AutocompleteRef> },
) => JSX.Element

export default AutoComplete
