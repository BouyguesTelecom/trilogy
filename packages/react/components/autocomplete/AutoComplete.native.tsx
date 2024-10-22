import Input from '@/components/input/Input.native'
import { InputChangeEventNative } from '@/components/input/InputProps'
import React, { useEffect, useMemo, useState } from 'react'
import { Keyboard, StyleSheet, View } from 'react-native'
import { AutoCompletePropsNative } from './AutoCompleteProps'
import { defaultMatching, getLabel } from './Autocomplete.helpers'
import AutoCompleteMenuNative from './menu/AutoCompleteMenu.native'
import { debounce } from './utils'


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
 * @param onItemSelected {Function} OnSelectedItemList event
 * @param customIcon {string} Additional icon classes
 * @param debounceSuggestionsTimeout {number} Timeout for getSuggestions debounce
 * @param getSuggestions {Function} getSuggestions event
 */
const AutoComplete = ({
  value,
  data,
  onChange,
  displayMenu,
  onItemSelected,
  customIcon,
  placeholder,
  matching = defaultMatching,
  getSuggestions,
  debounceSuggestionsTimeout,
  onFocus,
  testId,
  status,
  onBlur,
  disabled,
  onIconClick,
  ...others
}: AutoCompletePropsNative): JSX.Element => {
  const [valueInput, setValueInput] = useState<string>(value ?? '')
  const [suggestions, setSuggestions] = useState(data ?? [])
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(displayMenu ?? false)

  const updateSuggestions = async (valueInput: string) => {
    if (getSuggestions) {
      const suggestions = await getSuggestions(valueInput)
      suggestions && setSuggestions(suggestions)
      setIsOpenMenu(Boolean(suggestions?.length))
    } else if (matching && data.length) {
      const suggestions = matching(data, valueInput)
      setSuggestions(suggestions)
      setIsOpenMenu(Boolean(suggestions.length))
    }
  }
  const updateSuggestionsFn = useMemo(() => {
    return debounceSuggestionsTimeout ? debounce(updateSuggestions, debounceSuggestionsTimeout) : updateSuggestions
  }, [debounceSuggestionsTimeout])

  useEffect(() => {
    updateSuggestionsFn(valueInput)
  }, [valueInput])

  useEffect(() => {
    setValueInput(value || '')
  }, [value])

  const onTextChanged = async (e: InputChangeEventNative) => {
    const { inputValue, inputName, inputSelectionStart } = e
    setValueInput(inputValue)
    if (onChange) {
      onChange({
        inputName,
        inputValue,
        inputSelectionStart,
      })
    }
  }

  const handleSelectItem = (item: string) => {
    setValueInput(getLabel(item))
    setIsOpenMenu(false)
    Keyboard.dismiss()
    if (onItemSelected && (data || suggestions)) {
      onItemSelected({
        value: item,
        index: (data.length ? data : suggestions).indexOf(item),
      })
    }
  }

  const handleFocus = (event: React.FocusEvent | React.BaseSyntheticEvent) => {
    setIsOpenMenu(true)
    if (onFocus) onFocus(event)
  }

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => setIsOpenMenu(true))
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => setIsOpenMenu(false))

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [])

  return (
    <View style={styles.autoComplete}>
      <View>
        <Input
          status={status}
          testId={testId}
          placeholder={placeholder}
          type='text'
          customIcon={customIcon}
          value={valueInput}
          hasIcon={Boolean(customIcon)}
          onChange={onTextChanged}
          onFocus={handleFocus}
          onBlur={onBlur}
          disabled={disabled}
          onClick={onIconClick}
        />
      </View>
      {isOpenMenu && <AutoCompleteMenuNative suggestions={suggestions} handleSelectItem={handleSelectItem} />}
    </View>
  )
}

const styles = StyleSheet.create({
  autoComplete: {
    position: 'relative',
  },
})

export default AutoComplete
