import clsx from 'clsx'
import { Radio, RadioTile } from '@/components/radio'
import * as React from 'react'
import { SelectOptionProps } from './SelectOptionProps'

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
 */
const SelectOption = React.forwardRef((allProps: SelectOptionProps, ref: React.LegacyRef<HTMLOptionElement>) => {
  const {
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
  } = allProps

  const { checked, native, focused, ...props } = others as {checked:boolean, native:boolean, focused:boolean}
  const selectClasses = React.useMemo(() => clsx(focused && 'focus', className), [focused, className])

  if (native) {
    return (
      <option
        ref={ref}
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

  return (
    <RadioTile
      checked={checked}
      horizontal
      className={selectClasses}
      value={value}
      disabled={disabled}
      onChange={onClick}
      icon={iconName}
      description={label || children}
      {...others}
    />
  )
})

export default SelectOption
