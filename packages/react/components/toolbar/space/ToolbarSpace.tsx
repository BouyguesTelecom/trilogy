import * as React from "react"
import clsx from "clsx"
import { ToolbarSpaceWebProps } from "./ToolbarSpaceProps"
import { hashClass } from "../../../helpers"
import { useTrilogyContext } from "../../../context"

/**
 * Toolbar Space Component
 * @param children {ReactNode}
 * @param className {string} Additionnal CSS Classes
 */
const ToolbarSpace = ({
  className,
  ...others
}: ToolbarSpaceWebProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  return (
    <div
      className={hashClass(styled, clsx("toolbar-space", className))}
      {...others}
    />
  )
}

export default ToolbarSpace
