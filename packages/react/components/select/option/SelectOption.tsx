import { Icon } from '@/components/icon'
import { SelectOptionProps } from '@/components/select/option/SelectOptionProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import React from 'react'

/**
 * Select Option Component
 * @param value {string} Select option value
 * @param children {React.ReactNode}
 * @param label {string} option name
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param testId {string} id for testing
 * @param iconName {IconName | IconNameValues} icon
 * @param disabled {boolean} disable option
 * @param onClick {function} onclick function
 * @param id {string} Select option custom id
 * @param others
 */
const SelectOption = ({
  id,
  className,
  value,
  disabled,
  children,
  onClick,
  label,
  iconName,
  testId,
  ...others
}: SelectOptionProps) => {
  const { checked, native, focused, ...props } = others as { checked: boolean; native: boolean; focused: boolean }
  const selectClasses = hashClass(clsx('option', focused && 'focus', disabled && is('disabled'), className))

  if (native) {
    return (
      <option
        role='option'
        id={id}
        value={value}
        disabled={disabled}
        aria-label={label}
        data-testid={testId}
        onClick={onClick}
        {...props}
      >
        {children || label}
      </option>
    )
  }

  // return (
  //   <RadioTile
  //     checked={checked}
  //     horizontal
  //     className={selectClasses}
  //     value={value}
  //     disabled={disabled}
  //     onChange={onClick}
  //     icon={iconName}
  //     description={label || children}
  //     {...others}
  //   />
  // )

  return (
    <li
      id={id}
      className={selectClasses}
      data-selected={checked}
      role='option'
      aria-selected={checked}
      data-value={value}
      onClick={!disabled && onClick ? onClick : undefined}
      {...props}
    >
      {iconName && <Icon name={iconName} />}
      {label || children}
    </li>
  )
}

export default SelectOption
