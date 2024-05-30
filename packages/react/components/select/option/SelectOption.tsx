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
  const { checked } = props

  return (
    <Radio
      checked={checked}
      testId={testId}
      tile
      horizontalTile
      marginless
      className={className}
      value={value}
      disabled={disabled}
      onClick={onClick}
      iconTile={iconName}
      description={label || children}
    />
  )
}

export default SelectOption
