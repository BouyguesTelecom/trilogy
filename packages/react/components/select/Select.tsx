import * as React from 'react'

import { ComponentName } from '../enumsComponentsName'
import { SelectContext } from './context'
import { SelectedValue, SelectProps, SelectRef } from './SelectProps'
import { SelectDynamic, SelectNative } from './web'

/**
 * Select Component
 * @param id {string} Select id
 * @param name {string} Select name
 * @param selected {string} Selected value
 * @param children {React.ReactNode} Children for Select
 * @param label {string} label for select
 * @param iconName {IconName} icon for left of selector
 * @param onChange {Function} onChange Event
 * @param disabled {boolean} disable Select
 * @param multiple {boolean} select multiple options
 * @param nullable {boolean} Unselect Select Option Item
 * @param status {InputStatus} Select with status - (SUCCESS|WARNING|ERROR|DEFAULT)
 * @param help {string} Help for select
 * @param sample {string} Sample for select (below label)
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param accessibilityLabel {string} Accessibility label
 * @param onFocus {Function} OnFocus Select Event
 * @param onBlur {Function} onBlur Select Event
 * @param custom {boolean} Display native-old select web
 */
const Select = React.forwardRef<SelectRef, SelectProps>(({ selected, ...props }, ref): JSX.Element => {
  const [isVisibleOptions, setIsVisibleOptions] = React.useState<boolean>(false)
  const [selectedOptionValues, setSelectedOptionValues] = React.useState<SelectedValue[] | []>([])

  React.useEffect(() => {
    const value =
      typeof selected === 'string' || typeof selected === 'number'
        ? [selected]
        : !selected || selected === null
        ? []
        : selected

    setSelectedOptionValues(value)
  }, [selected])

  if (props.custom || props.multiple)
    return (
      <SelectContext.Provider
        value={{
          custom: props.custom || false,
          multiple: props.multiple || false,
          selectedOptionValues,
          isVisibleOptions,
          setSelectedOptionValues,
          setIsVisibleOptions,
          onChange: props.onChange,
        }}
      >
        <SelectDynamic ref={ref} selected={selected} {...props} />
      </SelectContext.Provider>
    )
  return <SelectNative ref={ref} selected={selected} {...props} />
})

Select.displayName = ComponentName.Select
export default Select
