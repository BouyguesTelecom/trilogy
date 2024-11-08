import * as React from 'react'

import { SelectProps } from './SelectProps'
import { SelectDynamic, SelectNative } from './web'

/**
 * Select Component
 * @param children {React.ReactNode} Children for Select
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param native {boolean} Display native-old select web
 *  * - -------------------------- NATIVE PROPERTIES -------------------------------
 */
const Select = ({ native, ...props }: SelectProps): JSX.Element => {
  if (native) return <SelectNative {...props} />
  return <SelectDynamic {...props} />
}

export default Select
