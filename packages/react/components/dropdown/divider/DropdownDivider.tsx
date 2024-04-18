import * as React from "react"
import { DropdownDividerWebProps } from "./DropdownDividerProps"
import { is } from "../../../services"
import clsx from "clsx"
import { hashClass } from "../../../helpers"
import { useTrilogyContext } from "../../../context"

/**
 * Dropdown Divider Component
 * @param className {string} Additionnal CSS Classes
 */
const DropdownDivider = ({
  className,
  ...others
}: DropdownDividerWebProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx("dropdown-divider", is("divider"), className)
  )
  return <hr className={classes} {...others} />
}

export default DropdownDivider
