import React, { useEffect, useState } from "react"
import shortid from "shortid"
import { RadioProps } from "./RadioProps"
import { has, is } from "../../services/classify"
import { Icon, IconSize } from "../icon"
import { hashClass } from "../../helpers"
import clsx from "clsx"
import { useTrilogyContext } from "../../context"

/**
 * Radio Component
 * @param checked {boolean} Checked Radio
 * @param className {string} Additionnal CSS Classes
 * @param disabled {boolean} Disabled
 * @param readOnly {boolean} readonly Radio
 * @param id {string} Id for button, by default id is generate
 * @param label {string|ReactNode} Label for Radio
 * @param onClick {ClickEvent}
 * @param onChange {ChangeEvent}
 * @param name {string} Name for radio
 * @param value {string} Value for radio
 * @param iconTile {IconName} Icon for Radio
 * @param narrow {boolean} Apply narrow
 * @param marginless {boolean} delete margin
 * @param children {React.ReactNode} If Children is provided, don't use label / Icon / Description
 */

const Radio = ({
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
  children,
  testId,
  narrow,
  marginless,
  ...others
}: RadioProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const [inputState, setInputState] = useState<{ checked: boolean }>({
    checked: checked || false,
  })

  useEffect(() => {
    if (!readonly) {
      setInputState({ checked: checked || false })
    }
  }, [checked, readonly])

  return (
    <div
      tabIndex={0}
      className={hashClass(
        styled,
        clsx(
          tile ? "radio-tile" : "radio",
          narrow && is("narrow"),
          marginless && is("marginless"),
          horizontalTile && is("horizontal"),
          className
        )
      )}
    >
      <input
        type='radio'
        readOnly={readonly}
        id={id}
        disabled={disabled}
        name={name}
        value={value}
        checked={readonly ? checked : inputState.checked}
        onChange={(e: React.ChangeEvent) => {
          return e
        }}
        onClick={(e: React.MouseEvent) => {
          const target = e.target as HTMLInputElement
          if (!readonly && target.checked) {
            setInputState({ checked: target.checked })
          }
          target.value = value || ""
          if (onChange) {
            onChange({
              radioId: target.id,
              radioValue: target.value,
              radioName: target.name,
              radioChecked: target.checked,
            })
          }
          if (onClick) {
            onClick({
              radioId: target.id,
              radioValue: target.value,
              radioName: target.name,
              radioChecked: target.checked,
            })
          }
        }}
        {...others}
      />

      <label htmlFor={id} className={hashClass(styled, clsx("radio-label"))}>
        {children ? (
          children
        ) : (
          <>
            {iconTile && <Icon name={iconTile} size={IconSize.MEDIUM} />}
            {horizontalTile ? (
              <span>
                {tile ? (
                  <span className={hashClass(styled, clsx("radio-title"))}>
                    {label}
                  </span>
                ) : (
                  label
                )}
                {tile && description && (
                  <span
                    className={hashClass(styled, clsx("radio-description"))}
                  >
                    {description}
                  </span>
                )}
              </span>
            ) : (
              <>
                {tile ? (
                  <span className={hashClass(styled, clsx("radio-title"))}>
                    {label}
                  </span>
                ) : (
                  label
                )}
                {tile && description && (
                  <span
                    className={hashClass(styled, clsx("radio-description"))}
                  >
                    {description}
                  </span>
                )}
              </>
            )}
          </>
        )}
      </label>
    </div>
  )
}

export default Radio
