import React, { useEffect, useState, useId } from 'react'
import { CheckboxProps } from './CheckboxProps'
import clsx from 'clsx'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'
import { generateStableId } from '@/helpers/generateStableId'

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
  id,
  label,
  onChange,
  name,
  value,
  children,
  ...others
}: CheckboxProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const computedId = id || (label ? generateStableId('checkbox', label) : `checkbox-default-${useId()}`)

  const [_checked, setChecked] = useState<boolean>(checked || false)

  useEffect(() => {
    if (!readonly) {
      setChecked(checked || false)
    }
  }, [checked, readonly])

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { target } = e
    onChange ? onChange({
      checkboxId: target.id,
      checkboxValue: target.value,
      checkboxName: target.name,
      checkboxChecked: target.checked,
    }) : setChecked(target.checked)
  }

  return (
    <div className={hashClass(styled, clsx('checkbox', className))}>
      <input
        type='checkbox'
        readOnly={readonly}
        id={computedId}
        disabled={disabled}
        name={name}
        value={value}
        checked={readonly ? checked : _checked}
        onChange={handleOnChange}
        {...others}
      />
      <label htmlFor={computedId} className={hashClass(styled, clsx('checkbox-label'))}>
        {label ?? children}
      </label>
    </div>
  )
}

export default Checkbox

