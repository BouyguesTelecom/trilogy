import { RadioProps, RadioRef } from '@/components/radio/RadioProps'
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
 */
const Radio = React.forwardRef<RadioRef, RadioProps>(
  (
    { checked, className, disabled, readonly, id = React.useId(), label, onChange, name, value, ...others },
    ref,
  ): JSX.Element => {
    return (
      <div ref={ref} className={hashClass(clsx('radio', className))}>
        <input
          type='radio'
          readOnly={readonly}
          id={id}
          disabled={disabled}
          name={name}
          value={value}
          checked={checked}
          onChange={
            onChange && !disabled && !readonly
              ? (e) => {
                  onChange({
                    radioId: e.target.id,
                    radioValue: e.target.value,
                    radioName: e.target.name,
                    radioChecked: e.target.checked,
                  })
                }
              : undefined
          }
          {...others}
        />
        <label htmlFor={id} className={hashClass(clsx('radio-label'))}>
          {label}
        </label>
      </div>
    )
  },
)

Radio.displayName = ComponentName.Radio
export default Radio
