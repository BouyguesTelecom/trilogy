import clsx from 'clsx'
import { Radio } from 'components/radio'
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
}: SelectOptionProps): JSX.Element => {
  const props = others as any
  const { checked, native, focused } = props
  const selectClasses = React.useMemo(() => clsx(focused && 'focus', className), [focused, className])

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
        {...others}
      >
        {children || label}
      </option>
    )
  }

  return (
    <Radio
      checked={checked}
      tile
      horizontalTile
      marginless
      className={selectClasses}
      value={value}
      disabled={disabled}
      onClick={onClick}
      iconTile={iconName}
      description={label || children}
      {...others}
    />
  )
}

export default SelectOption
