import * as React from "react"
import clsx from "clsx"
import { TableBodyProps } from "./TableBodyProps"
import { hashClass } from "../../..//helpers/hashClassesHelpers"
import { is, has } from "../../..//services/classify"
import { useTrilogyContext } from "../../../context/index"
import { getBackgroundClassName } from "../../../objects/atoms/Background"
import { getColorClassName } from "../../../objects/facets/Color"

/**
 * Table Body Component
 * @param children {ReactNode} children of Table Body
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param color {TrilogyColor} text color
 * @param backgroundColor {TrilogyColor} background color
 */
const TableBody = ({
  className,
  color,
  backgroundColor,
  ...others
}: TableBodyProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(
    styled,
    clsx(
      className,
      backgroundColor && has(getBackgroundClassName(backgroundColor)),
      color && is(getColorClassName(color))
    )
  )
  return <tbody className={classes} {...others} />
}

export default TableBody
