import * as React from "react"
import { ListItemDescriptionProps } from "./ListItemDescriptionProps"
import clsx from "clsx"
import { hashClass } from "../../../../helpers"
import { useTrilogyContext } from "../../../../context"

/**
 * ListItem Component
 * @param className {string} Additionnal CSS Classes
 * @param children {React.ReactNode}
 */

const ListItemDescription = ({
  children,
  className,
}: ListItemDescriptionProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  return <dd className={hashClass(styled, clsx(className))}>{children}</dd>
}

export default ListItemDescription
