import * as React from "react"
import { ListItemDescriptionProps } from "./ListItemDescriptionProps"
import clsx from "clsx"
import { hashClass } from "@/helpers"
import { useTrilogyContext } from "@/context"

/**
 * ListItemDescription Component
 * @param children {React.ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const ListItemDescription = ({
  children,
  className,
}: ListItemDescriptionProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  return <dd className={hashClass(styled, clsx(className))}>{children}</dd>
}

export default ListItemDescription
