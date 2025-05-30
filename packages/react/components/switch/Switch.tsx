import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { SwitchProps, SwitchRef } from './SwitchProps'
import { is } from '@/services/classify'
import { getStatusClassName } from '@/objects'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'
import { ComponentName } from '../enumsComponentsName'

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
 * @param className {string} Additional CSS Classes
 * @param onClick {Function} onClick event
 * @param label {string} Switch label
 * @param value {string} Switch value
 * @param reversed {boolean} change switch position
 */

const Switch = React.forwardRef<SwitchRef, SwitchProps>(({
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
}, ref): JSX.Element => {
  const [_checked, setChecked] = useState<boolean>(checked || false)
  const { styled } = useTrilogyContext()

  React.useEffect(() => {
    setChecked(checked || false)
  }, [checked])

  useEffect(() => {
    if (!readonly) {
      setChecked(checked || false)
    }
  }, [checked, readonly])

  return (
    <div
      ref={ref}
      className={hashClass(styled, clsx('switch', reversed && is('reversed'), fullWidth && is('fullwidth'), className))}
    >
      <input
        onChange={(e) => {
          if (!readonly) {
            setChecked(!_checked)
          }
          if (onChange) {
            onChange({
              switchState: e.target.checked,
              switchName: e.target.name,
            })
          }
        }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onClick={(e: any) => {
          if (!readonly) {
            setChecked(!_checked)
          }
          if (onClick) {
            onClick({
              switchState: e.target.checked,
              switchName: e.target.name,
            })
          }
        }}
        name={name}
        value={value}
        checked={readonly ? checked : _checked}
        readOnly={readonly}
        id={`switch-${id}`}
        type='checkbox'
        disabled={disabled}
        className={hashClass(styled, clsx(status && is(getStatusClassName(status))))}
        {...others}
      />
      <label htmlFor={`switch-${id}`}>{label}</label>
    </div>
  )
})

Switch.displayName = ComponentName.Switch
export default Switch
