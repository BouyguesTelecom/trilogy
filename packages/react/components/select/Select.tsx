import * as React from 'react'

import { ComponentName } from '../enumsComponentsName'
import { useSelect } from './hook/useSelect'
import { SelectProps, SelectRef } from './SelectProps'
import { SelectDynamic, SelectNative } from './web'

/**
 * Select Component
 * @param children {React.ReactNode} Children for Select
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param custom {boolean} Display native-old select web
 *  * - -------------------------- NATIVE PROPERTIES -------------------------------
 */
const Select = React.forwardRef<SelectRef, SelectProps>(({ selected, ...props }, ref): JSX.Element => {
  const { SelectProvider, isClient } = useSelect({ selected, ...props })

  if ((props.custom || props.multiple) && isClient)
    return (
      <SelectProvider>
        <SelectDynamic ref={ref} selected={selected} {...props} />
      </SelectProvider>
    )
  return <SelectNative ref={ref} selected={selected} {...props} />
})

Select.displayName = ComponentName.Select
export default Select
