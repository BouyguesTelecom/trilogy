import { hashClass } from '@/helpers'
import clsx from 'clsx'
import React from 'react'
import { CheckboxProps } from './CheckboxProps'

/**
 * Checkbox Component
 * @param checked {boolean} Checked Checkbox
 * @param disabled {boolean} Disabled
 * @param readOnly {boolean} readonly Checkbox
 * @param id {string} Id for button, by default id is generate
 * @param label {string} Label for Checkbox // Incompatible with children
 * @param onChange {ChangeEvent}
 * @param name {string} Name for checkbox
 * @param children {React.ReactNode} Children for Checkbox, should be only [phrasing content](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#technical_summary)
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param value {string} Value for checkbox
 * @param className {string} Additionnal css classes (ONLY FOR WEB)
 */
const Checkbox = ({
  checked,
  className,
  disabled,
  readonly,
  id = React.useId(),
  label,
  onChange,
  name,
  value,
  children,
  ...others
}: CheckboxProps): JSX.Element => {
  return (
    <div className={hashClass(clsx('checkbox', className))}>
      <input
        type='checkbox'
        readOnly={readonly}
        id={id}
        disabled={disabled}
        name={name}
        value={value}
        checked={checked}
        onChange={
          onChange && !disabled && !readonly
            ? (e) =>
                onChange({
                  checkboxId: e.target.id,
                  checkboxValue: e.target.value,
                  checkboxName: e.target.name,
                  checkboxChecked: e.target.checked,
                })
            : undefined
        }
        {...others}
      />
      <label htmlFor={id} className={hashClass(clsx('checkbox-label'))}>
        {label ?? children}
      </label>
    </div>
  )
}

export default Checkbox
