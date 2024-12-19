import { hashClass } from '@/helpers'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import shortid from 'shortid'
import { CheckboxProps } from './CheckboxProps'

/**
 * Checkbox Component
 * @param checked {boolean} Checked Checkbox
 * @param disabled {boolean} Disabled
 * @param readOnly {boolean} readonly Checkbox
 * @param id {string} Id for button, by default id is generate
 * @param label {string} Label for Checkbox
 * @param onChange {ChangeEvent}
 * @param name {string} Name for checkbox
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param value {string} Value for checkbox
 * @param className {string} Additionnal css classes (ONLY FOR WEB)
 */
const Checkbox = ({
  checked,
  className,
  disabled,
  readonly,
  id = shortid.generate(),
  label,
  onChange,
  name,
  value,
  ...others
}: CheckboxProps): JSX.Element => {
  const [_checked, setChecked] = useState<boolean>(checked || false)

  useEffect(() => {
    if (!readonly) {
      setChecked(checked || false)
    }
  }, [checked, readonly])

  return (
    <div className={hashClass(clsx('checkbox', className))}>
      <input
        type='checkbox'
        readOnly={readonly}
        id={id}
        disabled={disabled}
        name={name}
        value={value}
        checked={readonly ? checked : _checked}
        onChange={(e) => (onChange ? onChange : setChecked(e.target.checked))}
        {...others}
      />
      <label htmlFor={id} className={hashClass(clsx('checkbox-label'))}>
        {label}
      </label>
    </div>
  )
}

export default Checkbox
