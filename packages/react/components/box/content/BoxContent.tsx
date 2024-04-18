import * as React from "react"
import { BoxContentProps } from "./BoxContentProps"
import { has } from "../../../services/classify"
import { getBackgroundClassName } from "../../../objects/atoms/Background"
import clsx from "clsx"
import { hashClass } from "../../../helpers"
import { useTrilogyContext } from "../../../context"

/**
 * Box Content
 * @param children {React.ReactNode} Box Content Children
 * @param background {TrilogyColor} Box Content Background Color
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param testId test id
 */
const BoxContent = ({
  children,
  className,
  background,
  testId,
  ...others
}: BoxContentProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      "box-content",
      background && has(getBackgroundClassName(background)),
      className
    )
  )
  return (
    <div data-testid={testId} className={classes} {...others}>
      {children}
    </div>
  )
}

export default BoxContent
