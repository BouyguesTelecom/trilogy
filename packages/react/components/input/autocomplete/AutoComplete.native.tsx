import React, { useEffect, useMemo, useState } from 'react'
import { Keyboard, StyleSheet, View } from 'react-native'
import { InputNativeProps } from '../../input/Input.native'
import { InputChangeEvent } from '../../input/InputProps'
import { AutoCompleteProps } from './AutoCompleteProps'
import { defaultMatching, getLabel } from './Autocomplete.helpers'
import AutoCompleteMenuNative from './menu/AutoCompleteMenu.native'
import { debounce } from './utils'

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
  ...others
}: AutoCompleteProps): JSX.Element => {
  const [valueInput, setValueInput] = useState<string>(value ?? '')
  const [suggestions, setSuggestions] = useState(data ?? [])
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(displayMenu ?? false)
  const { Input }: { Input: React.ComponentType<InputNativeProps> } = others as any

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

  const onTextChanged = async (e: InputChangeEvent) => {
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
          placeholder={placeholder}
          type='text'
          customIcon={customIcon}
          value={valueInput}
          hasIcon={Boolean(customIcon)}
          onChange={onTextChanged}
          onFocus={handleFocus}
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
