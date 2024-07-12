import React from "react"
import { has, is } from "@/services"
import { ChipsProps } from "./ChipsProps"
import clsx from "clsx"
import { hashClass } from "@/helpers"
import { useTrilogyContext } from "@/context"
import { getColorClassName, TrilogyColor } from "@/objects/facets/Color"

/**
 * Chips Component - has to be in a ChipsList component
 * @param children {string} Chips content
 * @param id {string} Chips id
 * @param onClick {Function} onClick Event for all Chips
 * @param active {boolean} active Render Chips Active
 * @param disabled {boolean} Disabled chips
 * @param inverted {boolean} inverted chips - white
 *  * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param others
 */
const Chips = ({
  className,
  onClick,
  children,
  active,
  disabled,
  id,
  inverted,
  testId,
  ...others
}: ChipsProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      "chips",
      active && is("active"),
      inverted && has(`background-${getColorClassName(TrilogyColor.BACKGROUND)}`),
      className
    )
  )

  return (
    <button
      {...{ disabled: disabled }}
      aria-disabled={disabled}
      data-testid={testId}
      id={id}
      aria-checked={!!active}
      className={classes}
      onClick={(e) => {
        onClick?.(e)
      }}
      {...others}
    >
      {children}
    </button>
  )
}

export default Chips
