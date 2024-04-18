import React from "react"
import { has, is } from "../../services"
import { ChipsProps } from "./ChipsProps"
import clsx from "clsx"
import { hashClass } from "../../helpers"
import { useTrilogyContext } from "../../context"

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
      inverted && has(`background-white`),
      className
    )
  )

  return (
    <div
      {...{ disabled: disabled }}
      tabIndex={0}
      data-testid={testId}
      id={id}
      className={classes}
      onClick={(e) => {
        onClick?.(e)
      }}
      {...others}
    >
      {children}
    </div>
  )
}

export default Chips
