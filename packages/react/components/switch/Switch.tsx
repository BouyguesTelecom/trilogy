import { SwitchProps } from '@/components/switch/SwitchProps'
import { useSwitch } from '@/components/switch/hooks/useSwitch'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getStatusClassName } from '@/objects/facets/Status'
import { is } from '@/services/classify'
import clsx from 'clsx'
import React from 'react'

/**
 * Switch Component
 * @param id {string} Is auto generate by default
 * @param checked {boolean} Checked switch
 * @param onChange {Function} onChange event
 * @param status {StatusState} Status Variant (INFO|SUCCESS|WARNING|ERROR)
 * @param disabled {boolean} Switch disabled
 * @param readonly {boolean} Switch readonly
 * @param name {string} Switch name
 * -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param onClick {Function} onClick event
 * @param label {string} Switch label
 * @param value {string} Switch value
 * @param reversed {boolean} change switch position
 */

const Switch = ({
  className,
  id = React.useId(),
  label,
  value,
  checked,
  onChange,
  onClick,
  status,
  disabled,
  readonly,
  name,
  reversed,
  fullWidth,
  ...others
}: SwitchProps): JSX.Element => {
  const { handleChange, handleClick, _checked } = useSwitch({ checked, readonly, onChange, onClick })

  return (
    <div className={hashClass(clsx('switch', reversed && is('reversed'), fullWidth && is('fullwidth'), className))}>
      <input
        onChange={handleChange}
        onClick={handleClick}
        name={name}
        value={value}
        checked={_checked}
        readOnly={readonly}
        id={`switch-${id}`}
        type='checkbox'
        disabled={disabled}
        className={hashClass(clsx(status && is(getStatusClassName(status))))}
        {...others}
      />
      <label htmlFor={`switch-${id}`}>{label}</label>
    </div>
  )
}

export default Switch
