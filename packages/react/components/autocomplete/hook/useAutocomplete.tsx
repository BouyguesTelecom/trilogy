import React from 'react'

import { getLabel } from '@/components/autocomplete/Autocomplete.helpers'
import { Item, ItemSelectedEvent } from '@/components/autocomplete/AutoCompleteProps'
import { debounce } from '@/components/autocomplete/utils'
import { InputChangeEventWeb, InputKeyboardEvent } from '@/components/input/InputProps'

interface IParams<T> {
  value?: string
  name?: string
  data: T[]
  matching: (data: T[], value: string) => T[]
  onChange?: (event: InputChangeEventWeb) => void
  onItemSelected?: (event: ItemSelectedEvent<T | null>) => void
  displayMenu?: boolean
  getSuggestions?: (search: string) => Promise<T[]>
  debounceSuggestionsTimeout?: number
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
}

export const useAutocomplete = <T extends string | Item<unknown> = string>({
  value,
  data,
  displayMenu,
  matching,
  onChange,
  name,
  getSuggestions,
  debounceSuggestionsTimeout,
  onItemSelected,
  onFocus,
  onBlur,
}: IParams<T>) => {
  try {
    const [itemSelected, setItemSelected] = React.useState<T | null>(null)
    const [_inputValue, setInputValue] = React.useState<string>(value ?? '')
    const [activeItem, setActiveItem] = React.useState<number>(0)
    const [isAutocompleteMenuVisible, setIsAutocompleteMenuVisible] = React.useState<boolean>(displayMenu || false)
    const [search, setSearch] = React.useState<T[]>([])

    const onTextChanged = React.useCallback(
      async (e: InputChangeEventWeb) => {
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
      },
      [onChange, name, getSuggestions, matching],
    )

    const onInputChange = debounceSuggestionsTimeout
      ? debounce(onTextChanged, debounceSuggestionsTimeout)
      : onTextChanged

    const suggestionSelected = React.useCallback(
      (value: T, data: T[], search: T[]) => {
        setIsAutocompleteMenuVisible(false)
        setInputValue(getLabel(value))
        setItemSelected(value)
        if ((data || search) && onItemSelected) {
          onItemSelected({
            value: value,
            index: value ? (data.length ? data : search).indexOf(value) : -1,
          })
        }
      },
      [onItemSelected],
    )

    const handleKeyPress = React.useCallback(
      (e: InputKeyboardEvent) => {
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
      },
      [suggestionSelected, search, activeItem],
    )

    const handleFocus = React.useCallback(
      (event: React.FocusEvent<HTMLInputElement, Element>) => {
        setIsAutocompleteMenuVisible(true)
        if (onFocus) onFocus(event)
      },
      [onFocus],
    )

    const handleBlur = React.useCallback(
      (e: React.FocusEvent<HTMLInputElement, Element>) => {
        setTimeout(() => setIsAutocompleteMenuVisible(false), 250)
        if (onBlur) onBlur(e)
      },
      [onBlur],
    )

    const handleChange = React.useCallback(
      (event: InputChangeEventWeb) => {
        onInputChange(event)
      },
      [onInputChange],
    )

    React.useEffect(() => {
      setInputValue(value || '')
    }, [value])

    React.useEffect(() => {
      setActiveItem(0)
      if (data?.length && matching) setSearch(matching(data, _inputValue))
      if (itemSelected && getLabel(itemSelected) !== _inputValue) setItemSelected(null)
    }, [_inputValue, matching, data])

    React.useEffect(() => {
      setSearch(matching(data, _inputValue))
    }, [data, _inputValue])

    return {
      handleChange,
      handleFocus,
      handleKeyPress,
      suggestionSelected,
      onInputChange,
      _inputValue,
      isAutocompleteMenuVisible,
      search,
      activeItem,
      handleBlur,
    }
  } catch {
    return {
      _inputValue: value,
      isAutocompleteMenuVisible: displayMenu,
      search: [],
      activeItem: 0,
    }
  }
}
