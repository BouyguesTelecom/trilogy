import React, { useEffect, useState } from "react"
import shortid from "shortid"
import { CheckboxProps } from "./CheckboxProps"
import clsx from "clsx"
import { hashClass } from "@/helpers"
import { Icon, IconSize } from "@/components/icon"
import { is } from "@/services"
import { useTrilogyContext } from "@/context"

/**
 * Checkbox Component
 * @param checked {boolean} Checked Checkbox
 * @param disabled {boolean} Disabled
 * @param readOnly {boolean} readonly Checkbox
 * @param id {string} Id for button, by default id is generate
 * @param label {string} Label for Checkbox
 * @param onClick {ClickEvent}
 * @param onChange {ChangeEvent}
 * @param name {string} Name for checkbox
 * @param children {React.ReactNode}
 * @param tile {boolean} Checbox Tile
 * @param description {string} Description for Checkbox tile
 * @param iconTile {IconName} Name of icon for checkbox tile
 * @param testId {string} Test Id for Test Integration
 * @param horizontalTile {boolean} display horizontal Checkbox tile
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
  onClick,
  name,
  value,
  tile,
  description,
  iconTile,
  horizontalTile,
  testId,
  ...others
}: CheckboxProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const [_checked, setChecked] = useState<boolean>(checked || false)

  useEffect(() => {
    if (!readonly) {
      setChecked(checked || false)
    }
  }, [checked, readonly])

  return (
    <div
      className={hashClass(
        styled,
        clsx(
          tile ? "checkbox-tile" : "checkbox",
          horizontalTile && is("horizontal"),
          className
        )
      )}
      tabIndex={0}
    >
      <input
        aria-checked={checked}
        type='checkbox'
        readOnly={readonly}
        id={id}
        data-testid={testId}
        disabled={disabled}
        name={name}
        value={value}
        checked={readonly ? checked : _checked}
        onChange={(e: React.ChangeEvent) => {
          return e
        }}
        onClick={(e: React.MouseEvent) => {
          const target = e.target as HTMLInputElement
          if (!readonly && target.checked !== undefined) {
            setChecked(target.checked)
          }
          target.value = value || ""
          if (onChange) {
            onChange({
              checkboxId: target.id,
              checkboxValue: target.value,
              checkboxName: target.name,
              checkboxChecked: target.checked,
            })
          }
          if (onClick) {
            onClick({
              checkboxId: target.id,
              checkboxValue: target.value,
              checkboxName: target.name,
              checkboxChecked: target.checked,
            })
          }
        }}
        {...others}
      />
      <label htmlFor={id} className={hashClass(styled, clsx("checkbox-label"))}>
        {iconTile && <Icon name={iconTile} size={IconSize.MEDIUM} />}
        {horizontalTile ? (
          <span>
            {tile ? (
              <span className={hashClass(styled, clsx("checkbox-title"))}>
                {label}
              </span>
            ) : (
              label
            )}
            {tile && description && (
              <span className={hashClass(styled, clsx("checkbox-description"))}>
                {description}
              </span>
            )}
          </span>
        ) : (
          <>
            {tile ? (
              <span className={hashClass(styled, clsx("checkbox-title"))}>
                {label}
              </span>
            ) : (
              label
            )}
            {tile && description && (
              <span className={hashClass(styled, clsx("checkbox-description"))}>
                {description}
              </span>
            )}
          </>
        )}
      </label>
    </div>
  )
}

export default Checkbox
