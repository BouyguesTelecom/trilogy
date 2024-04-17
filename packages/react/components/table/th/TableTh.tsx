import * as React from "react"
import clsx from "clsx"
import { TableThProps } from "./TableThProps"
import { hashClass } from "../../../helpers"
import { useTrilogyContext } from "../../../context"

/**
 * Table TH Component
 * @param children {ReactNode} Children of Table TH
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param rowSpan {number} Specifies the number of rows a cell should span
 * @param colSpan {number} Defines the number of columns a cell should span
 * @param onClick {ClickEvent} On click event
 */
const TableTh = ({
  className,
  colSpan,
  rowSpan,
  ...others
}: TableThProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(styled, clsx(className))
  return (
    <th className={classes} colSpan={colSpan} rowSpan={rowSpan} {...others} />
  )
}

export default TableTh
