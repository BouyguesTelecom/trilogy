import * as React from 'react'
import { SelectProps } from './SelectProps'
import SelectNativeOption from './option/SelectNativeOption'
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
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param classNameOptions {string} Additionnal CSS Classes for wrapper option
 * @param nullable {boolean} Unselect Select Option Item
 * @param disabled {boolean} disable Select
 * @param onBlur {Function} onBlur Event
 * @param onFocus {Function} onFocus Event
 * @param testId {string} id for testing
 * @param native {boolean} Display native-old select web
 *  * - -------------------------- NATIVE PROPERTIES -------------------------------
 * @param placeholder {string} Select Placeholder
 */
const Select = (props: SelectProps): JSX.Element => {
  const {
    children,
    className,
    label,
    onChange,
    disabled,
    onBlur,
    onFocus,
    id,
    name,
    iconName,
    nullable,
    testId,
    selected,
    native,
    multiple,
    ...others
  } = props

  if (native) {
    return (
      <SelectNative
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        id={id}
        name={name}
        disabled={disabled}
        label={label}
        iconName={iconName}
        testId={testId}
        selected={selected}
        {...others}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return <SelectNativeOption {...child.props} />
          }
          return null
        })}
      </SelectNative>
    )
  }

  return <SelectDynamic {...props} />
}

export default Select
