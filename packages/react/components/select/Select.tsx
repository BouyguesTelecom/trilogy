import * as React from 'react'

import { SelectProps } from './SelectProps'
import { SelectDynamic, SelectNative } from './web'

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
