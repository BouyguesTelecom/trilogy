import * as React from "react"
import { BoxTableContainerProps } from "./BoxTableContainerProps"
import clsx from "clsx"
import { hashClass } from "../../../helpers"
import { useTrilogyContext } from "../../../context"

/**
 * Box Table Component
 * @param className {string} Additionnal CSS Classes
 * @param children {React.ReactNode} Children
 */
const BoxTableContainer = ({
  className,
  testId,
  ...others
}: BoxTableContainerProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  return (
    <div
      data-testid={testId}
      className={hashClass(styled, clsx("box table-container", className))}
      {...others}
    />
  )
}

export default BoxTableContainer
