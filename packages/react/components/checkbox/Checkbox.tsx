import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { ComponentName } from '../enumsComponentsName'
import { CheckboxProps, CheckboxRef } from './CheckboxProps'

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
const Checkbox = React.forwardRef<CheckboxRef, CheckboxProps>(
  (
    { checked, className, disabled, readonly, id = React.useId(), label, onChange, name, value, children, ...others },
    ref,
  ): JSX.Element => {
    const { styled } = useTrilogyContext()
    const [_checked, setChecked] = useState<boolean>(checked || false)

    useEffect(() => {
      if (!readonly) {
        setChecked(checked || false)
      }
    }, [checked, readonly])

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { target } = e
      onChange
        ? onChange({
            checkboxId: target.id,
            checkboxValue: target.value,
            checkboxName: target.name,
            checkboxChecked: target.checked,
          })
        : setChecked(target.checked)
    }

    return (
      <div ref={ref} className={hashClass(styled, clsx('checkbox', className))}>
        <input
          type='checkbox'
          readOnly={readonly}
          id={id}
          disabled={disabled}
          name={name}
          value={value}
          checked={readonly ? checked : _checked}
          onChange={handleOnChange}
          {...others}
        />
        <label htmlFor={id} className={hashClass(styled, clsx('checkbox-label'))}>
          {label ?? children}
        </label>
      </div>
    )
  },
)

Checkbox.displayName = ComponentName.Checkbox
export default Checkbox
