import * as React from "react"
import { SelectOptionProps } from "./SelectOptionProps"
import clsx from "clsx"
import { hashClass } from "../../../helpers"
import { useTrilogyContext } from "../../../context"
import { Icon } from "../../icon"

/**
 * Select Option Component
 * @param value {string} Select option value
 * @param children {React.ReactNode}
 * @param label {string} option name
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param testId {string} id for testing
 * @param iconName {IconName | IconNameValues} icon
 * @param disabled {boolean} disable option
 * @param onClick {function} onclick function
 * @param selected {boolean} Selected option
 * @param id {string} Select option custom id
 */
const SelectOption = ({
  id,
  className,
  selected,
  value,
  disabled,
  children,
  onClick,
  label,
  iconName,
  testId,
  ...others
}: SelectOptionProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  return (
    <div
      role='option'
      tabIndex={0}
      className={hashClass(
        styled,
        clsx(
          "select-options-option",
          selected && !disabled && "select-options-option-activated",
          disabled && !selected && "select-options-option-disabled",
          iconName && "has-icon",
          className
        )
      )}
      data-testid={testId}
      id={id}
      data-option-name={children || label}
      data-option-value={value}
      onMouseUp={onClick}
      aria-disabled={disabled}
      aria-selected={selected ? "true" : "false"}
      {...others}
    >
      <div className={hashClass(styled, clsx(iconName && "has-icon"))}>
        {iconName && <Icon name={iconName} size='small' />}
        {children || label}
      </div>
    </div>
  )
}

export default SelectOption
