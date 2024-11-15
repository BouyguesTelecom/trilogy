import clsx from 'clsx'
import React from 'react'

import { Radio } from '@/components/radio'
import { SelectOptionProps } from '@/components/select/option/SelectOptionProps'

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
const SelectOption = (
  { id, className, value, disabled, children, onClick, label, iconName, testId, ...others }: SelectOptionProps,
  ref: React.Ref<HTMLOptionElement | HTMLDivElement>,
) => {
  const { checked, native, focused, ...props } = others as { checked: boolean; native: boolean; focused: boolean }

  if (native) {
    return (
      <option
        ref={ref as React.Ref<HTMLOptionElement>}
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
    <Radio
      ref={ref as React.Ref<HTMLDivElement>}
      checked={checked}
      tile
      horizontalTile
      marginless
      className={clsx(focused && 'focus', className)}
      value={value}
      disabled={disabled}
      onClick={onClick}
      iconTile={iconName}
      description={label || children}
      testId={testId}
      {...others}
    />
  )
}

export default React.forwardRef(SelectOption)
