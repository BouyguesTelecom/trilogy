import * as React from "react"
import { BoxTableContainerProps } from "./BoxTableContainerProps"
import clsx from "clsx"
import { hashClass } from "@/helpers"
import { useTrilogyContext } from "@/context"

/**
 * Box Table Component
 * @param children {React.ReactNode} Children
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param testId {string} Test Id for Test Integration
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
