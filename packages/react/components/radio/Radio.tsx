import { RadioProps, RadioRef } from '@/components/radio/RadioProps'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React from 'react'
import { ComponentName } from '../enumsComponentsName'

/**
 * radio Component
 * @param checked {boolean} Checked radio
 * @param disabled {boolean} Disabled
 * @param readOnly {boolean} readonly radio
 * @param id {string} Id for button, by default id is generate
 * @param label {string} Label for radio
 * @param onChange {ChangeEvent}
 * @param name {string} Name for radio
 * @param value {string} Value for radio
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes (ONLY FOR WEB)
 * @param required {boolean} Required radio
 */
const Radio = React.forwardRef<RadioRef, RadioProps>(({
  checked,
  className,
  disabled,
  readonly,
  id = React.useId(),
  label,
  onChange,
  name,
  value,
  required,
  ...others
}, ref): JSX.Element => {
  const { styled } = useTrilogyContext()

  return (
    <div ref={ref} className={hashClass(styled, clsx('radio', className))}>
      <input
        type='radio'
        readOnly={readonly}
        id={id}
        disabled={disabled}
        name={name}
        value={value}
        checked={checked}
        required={required}
        onChange={(e) => {
          if (onChange && !disabled && !readonly) {
            onChange({
              radioId: e.target.id,
              radioValue: e.target.value,
              radioName: e.target.name,
              radioChecked: e.target.checked,
            })
          }
        }}
        {...others}
      />
      <label htmlFor={id} className={hashClass(styled, clsx('radio-label'))}>
        {label}
      </label>
    </div>
  )
})

Radio.displayName = ComponentName.Radio
export default Radio
