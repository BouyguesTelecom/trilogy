import React from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import { SelectProps } from '@/components/select/SelectProps'
import { SelectDynamic, SelectNative } from '@/components/select/web'

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
 * @param multiple {boolean} select multiple options (for dynamic select only)
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
const Select = React.forwardRef(
  ({ native, ...props }: SelectProps, ref: React.Ref<HTMLInputElement | HTMLSelectElement>): JSX.Element => {
    if (native) return <SelectNative {...props} ref={ref as React.Ref<HTMLSelectElement>} />
    return <SelectDynamic {...props} ref={ref as React.Ref<HTMLInputElement>} />
  },
)

Select.displayName = ComponentName.Select
export default Select
