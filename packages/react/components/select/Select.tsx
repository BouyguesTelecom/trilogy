import { SelectDynamic, SelectNative } from '@/components/select/web'
import React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { SelectProps, SelectRef } from './SelectProps'

/**
 * Select Component
 * @param children {React.ReactNode} Children for Select
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param custom {boolean} Display native-old select web
 *  * - -------------------------- NATIVE PROPERTIES -------------------------------
 */
const Select = React.forwardRef<SelectRef, SelectProps>(({ custom, multiple, ...props }, ref): JSX.Element => {
  if (custom || multiple) return <SelectDynamic ref={ref} {...props} multiple={multiple} />
  return <SelectNative ref={ref} {...props} />
})

Select.displayName = ComponentName.Select
export default Select
