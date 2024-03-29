import React from 'react'
import { SelectOptionProps } from './SelectOptionProps'

const SelectNativeOption = ({
  id,
  value,
  disabled,
  children,
  onClick,
  label,
  testId,
  ...others
}: SelectOptionProps): JSX.Element => {
  return (
    <option
      role='option'
      id={id}
      value={value}
      disabled={disabled}
      aria-label={label}
      data-testid={testId}
      {...others}
      onClick={(e: React.MouseEvent<HTMLElement>) => {
        onClick && onClick(e)
      }}
    >
      {children || label}
    </option>
  )
}

export default SelectNativeOption
