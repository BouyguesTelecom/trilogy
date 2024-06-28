import React, { useEffect, useState } from "react"
import shortid from "shortid"
import clsx from "clsx"
import { SwitchProps } from "./SwitchProps"
import { is } from "@/services/classify"
import { getAlertClassName } from "@/objects"
import { hashClass } from "@/helpers"
import { useTrilogyContext } from "@/context"

/**
 * Switch Component
 * @param id {string} Is auto generate by default
 * @param label {string} Switch label
 * @param value {string} Switch value
 * @param checked {boolean} Checked switch
 * @param onChange {Function} onChange event
 * @param alert {AlertState} Alert Variant (INFO|SUCCESS|WARNING|ERROR)
 * @param disabled {boolean} Switch disabled
 * @param readonly {boolean} Switch readonly
 * @param name {string} Switch name
 * @param reversed {boolean} change switch position
 * -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param onClick {Function} onClick event
 */

const Switch = ({
  className,
  id = shortid.generate(),
  label,
  value,
  checked,
  onChange,
  onClick,
  alert,
  disabled,
  readonly,
  name,
  reversed,
  ...others
}: SwitchProps): JSX.Element => {
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
      className={hashClass(
        styled,
        clsx("switch", reversed && is("reversed"), className)
      )}
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
        className={hashClass(
          styled,
          clsx(alert && is(getAlertClassName(alert)))
        )}
        {...others}
      />
      <label htmlFor={`switch-${id}`}>{label}</label>
    </div>
  )
}

export default Switch
