import clsx from 'clsx'
import React from 'react'

import { AutoCompletePropsWeb, Item } from '@/components/autocomplete/AutoCompleteProps'
import { defaultMatching, getLabel } from '@/components/autocomplete/Autocomplete.helpers'
import { useAutocomplete } from '@/components/autocomplete/hook/useAutocomplete'
import AutoCompleteItem from '@/components/autocomplete/item'
import AutoCompleteMenu from '@/components/autocomplete/menu'
import { Input } from '@/components/input'
import { InputAutoCompleteType } from '@/components/input/InputEnum'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'

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
const AutoComplete = <T extends string | Item<unknown> = string>(
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
    testId,
    onChange,
    name,
    matching = defaultMatching,
    displayMenu = true,
    onItemSelected,
    customIcon,
    disabled,
    children,
    accessibilityLabel,
    onIconClick,
    getSuggestions,
    debounceSuggestionsTimeout,
    onFocus,
    loading,
    ...others
  }: AutoCompletePropsWeb<T>,
  ref: React.Ref<HTMLInputElement>,
): JSX.Element => {
  const {
    handleFocus,
    handleKeyPress,
    suggestionSelected,
    _inputValue,
    isAutocompleteMenuVisible,
    search,
    activeItem,
    handleBlur,
    handleChange,
  } = useAutocomplete({
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
  })

  const autocompleteClasses = hashClass(clsx(is('autocomplete'), is('active')))

  return (
    <div className={hashClass(clsx('control'))}>
      <Input
        ref={ref}
        defaultValue={defaultValue}
        accessibilityLabel={accessibilityLabel}
        {...(customIcon ? { customIcon: customIcon } : {})}
        placeholder={placeholder}
        {...(name ? { name: name } : {})}
        className='autocomplete-input'
        type='text'
        testId={testId}
        status={status}
        autoCompleteType={InputAutoCompleteType.OFF}
        disabled={disabled}
        // Add delay for selection of suggestion
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyUp={handleKeyPress}
        value={_inputValue}
        onChange={handleChange}
        onIconClick={onIconClick}
        loading={loading}
      />

      {isAutocompleteMenuVisible && (
        <div className={autocompleteClasses}>
          {search.length > 0 && (
            <AutoCompleteMenu
              testId={testId}
              absolute={absoluteMenu}
              fullwidth={fullwidthMenu}
              className={classNameMenu}
            >
              {search.map((item, i) => (
                <AutoCompleteItem<T>
                  active={activeItem === i}
                  key={i}
                  testId={testId}
                  item={item}
                  suggestionSelected={suggestionSelected ? (v: T) => suggestionSelected(v, data, search) : undefined}
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

export default React.forwardRef(AutoComplete)
