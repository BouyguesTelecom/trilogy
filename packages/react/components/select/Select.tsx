import { SelectProps } from '@/components/select/SelectProps'
import { SelectDynamic, SelectNative } from '@/components/select/web'
import React from 'react'

/**
 * Select Component
 * @param children {React.ReactNode} Children for Select
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param custom {boolean} Display native-old select web
 *  * - -------------------------- NATIVE PROPERTIES -------------------------------
 */
const Select = ({ custom, multiple, ...props }: SelectProps): JSX.Element => {
  if (custom || multiple) return <SelectDynamic {...props} multiple={multiple} />
  return <SelectNative {...props} />
}

export default Select
