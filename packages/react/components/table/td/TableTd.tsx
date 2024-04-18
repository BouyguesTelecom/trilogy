import * as React from "react"
import clsx from "clsx"
import { TableTdProps } from "./TableTdProps"
import { hashClass } from "../../../helpers"
import { useTrilogyContext } from "../../../context"

/**
 * Table TD Component
 * @param children {ReactNode} Table TD children
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param rowSpan {number} Specifies the number of rows a cell should span
 * @param colSpan {number} Defines the number of columns a cell should span
 * @param onClick {ClickEvent} On click event
 */
const TableTd = ({
  className,
  rowSpan,
  colSpan,
  ...others
}: TableTdProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(styled, clsx(className))
  return (
    <td className={classes} rowSpan={rowSpan} colSpan={colSpan} {...others} />
  )
}

export default TableTd
