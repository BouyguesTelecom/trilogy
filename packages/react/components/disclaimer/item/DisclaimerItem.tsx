import * as React from "react"
import { DisclaimerItemWebProps } from "./DisclaimerItemProps"
import clsx from "clsx"
import { hashClass } from "../../../helpers"
import { useTrilogyContext } from "../../../context"

/**
 * Disclaimer Item component
 * @param children {ReactNode} Diclaimer Item Children
 * @param className {string} Additionnal css classes
 */
const DisclaimerItem = ({
  className,
  ...others
}: DisclaimerItemWebProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(styled, clsx("disclaimer-item", className))

  return <div className={classes} {...others} />
}

export default DisclaimerItem
