import * as React from 'react'

import { ComponentName } from '../enumsComponentsName'
import { SelectContext } from './context'
import { SelectedValue, SelectProps, SelectRef } from './SelectProps'
import { SelectDynamic, SelectNative } from './web'

/**
 * Select Component
 * @param children {React.ReactNode} Children for Select
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param custom {boolean} Display native-old select web
 *  * - -------------------------- NATIVE PROPERTIES -------------------------------
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
