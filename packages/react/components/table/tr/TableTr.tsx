import * as React from "react"
import clsx from "clsx"
import { TableTrProps } from "./TableTrProps"
import { hashClass } from "@/helpers/hashClassesHelpers"
import { is } from "@/services/classify"
import { useTrilogyContext } from "@/context/index"
import { getColorClassName } from "@/objects/facets/Color"

/**
 * Table TR Component
 * @param children {ReactNode}
 * @param expandable {boolean} Lines can display additional information
 * @param expanded {boolean} An unfolded line will also receive class
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param expansion {boolean} Is expansion
 * @param onClick {ClickEvent} On click event
 * @param color {TrilogyColor} Higlight color
 * @param ref {React.RefObject<HTMLTableRowElement>} Ref of the row
 */
const TableTr = ({
  className,
  id,
  expandable,
  expanded,
  expansion,
  color,
  ...others
}: TableTrProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      className,
      expandable && is("expandable"),
      expanded && is("expanded"),
      expansion && is("expansion"),
      color && is(getColorClassName(color))
    )
  )

  return <tr id={id} className={classes} {...others} />
}

export default TableTr
