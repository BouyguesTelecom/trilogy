import React from 'react'
import { SelectProps } from './SelectProps'
import clsx from 'clsx'
import { hashClass } from '../../helpers/hashClassesHelpers'
import { useTrilogyContext } from '../../context/index'
import { SelectNative, SelectDynamic } from './web'
import SelectNativeOption from './option/SelectNativeOption'

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
const Select = ({
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
  classNameOptions,
  nullable,
  testId,
  selected,
  native,
  ...others
}: SelectProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const selecteClasses = React.useMemo(
    () =>
      hashClass(
        styled,
        clsx('select', disabled && 'select-disabled', iconName && 'has-icon', native && 'select-native', className),
      ),
    [styled, disabled, iconName, className],
  )

  if (native) {
    return (
      <SelectNative
        selecteClasses={selecteClasses}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        id={id}
        name={name}
        disabled={disabled}
        label={label}
        iconName={iconName}
        styled={styled}
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

  return (
    <SelectDynamic
      styled={styled}
      onChange={onChange}
      nullable={nullable}
      disabled={disabled}
      onFocus={onFocus}
      onBlur={onBlur}
      selected={selected}
      name={name}
      id={id}
      testId={testId}
      classNameOptions={classNameOptions}
      selecteClasses={selecteClasses}
      label={label}
      iconName={iconName}
      {...others}
    >
      {children}
    </SelectDynamic>
  )
}

export default Select
