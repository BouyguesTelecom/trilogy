import { Icon } from '@/components/icon'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { SelectOptionProps, SelectOptionRef } from './SelectOptionProps'
import { ComponentName } from '@/components/enumsComponentsName'

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
const SelectOption = React.forwardRef<SelectOptionRef, SelectOptionProps>(({
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
}, ref) => {
  const { styled } = useTrilogyContext()
  const { checked, native, focused, ...props } = others as { checked: boolean; native: boolean; focused: boolean }
  const selectClasses = hashClass(styled, clsx('option', focused && 'focus', disabled && is('disabled'), className))

  if (native) {
    return (
      <option
        ref={ref as React.RefObject<HTMLOptionElement>}
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
      ref={ref as React.RefObject<HTMLLIElement>}
      id={id}
      className={selectClasses}
      data-selected={checked}
      role='option'
      aria-selected={checked}
      data-value={value}
      onClick={!disabled && onClick ? onClick : undefined}
      {...others}
    >
      {iconName && <Icon name={iconName} />}
      {label || children}
    </li>
  )
})

SelectOption.displayName = ComponentName.SelectOption
export default SelectOption
