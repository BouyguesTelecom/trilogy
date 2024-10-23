import * as React from 'react'

import { SelectProps } from './SelectProps'
import { SelectDynamic, SelectNative } from './web'

/**
 * Select Component
 * @param children {React.ReactNode} Children for Select
 * @param id {string} Select id
 * @param name {string} Select name
 * @param label {string} Select label
 * @param onChange {Function} onChange Event
 * @param selected {string|number} Selected OptionItem for Native
 * @param iconName {IconName} icon for left of selector
 * @param disabled {boolean} disable Select
 * @param multiple {boolean} select multiple options
 * @param nullable {boolean} Unselect Select Option Item
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param onBlur {Function} onBlur Event
 * @param onFocus {Function} onFocus Event
 * @param testId {string} id for testing
 * @param native {boolean} Display native-old select web
 *  * - -------------------------- NATIVE PROPERTIES -------------------------------
 * @param placeholder {string} Select Placeholder
 */
const Select = ({ native, ...props }: SelectProps): JSX.Element => {
  if (native) return <SelectNative {...props} />
  return <SelectDynamic {...props} />
}

export default Select
