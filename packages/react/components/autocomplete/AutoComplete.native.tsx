import React, { useEffect, useMemo, useState } from 'react'
import { Keyboard, StyleSheet, View } from 'react-native'
import Input from '../input/Input.native'
import { AutoCompleteProps } from './AutoCompleteProps'
import { InputChangeEvent } from '../input/InputProps'
import AutoCompleteMenuNative from './menu/AutoCompleteMenu.native'
import { getLabel, defaultMatching } from './Autocomplete.helpers'
import { ComponentName } from '../enumsComponentsName'
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
}: AutoCompleteProps): JSX.Element => {
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
    if (valueInput) {
      updateSuggestionsFn(valueInput)
    }
  }, [valueInput])

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
      onItemSelected({ value: item, index: (data.length ? data : suggestions).indexOf(item) })
    }
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
          onFocus={() => setIsOpenMenu(true)}
          customIcon={customIcon}
          value={valueInput}
          hasIcon={Boolean(customIcon)}
          onChange={onTextChanged}
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

AutoComplete.displayName = ComponentName.AutoComplete

export default AutoComplete
