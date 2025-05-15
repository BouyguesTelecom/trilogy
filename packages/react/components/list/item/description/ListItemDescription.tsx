import * as React from "react"
import { ListItemDescriptionProps, ListItemDescriptionRef } from "./ListItemDescriptionProps"
import clsx from "clsx"
import { hashClass } from "@/helpers"
import { useTrilogyContext } from "@/context"
import { ComponentName } from "@/components/enumsComponentsName"

/**
 * ListItemDescription Component
 * @param children {React.ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 */
const ListItemDescription = React.forwardRef<ListItemDescriptionRef, ListItemDescriptionProps>(({
  children,
  className,
}, ref): JSX.Element => {
  const { styled } = useTrilogyContext()

  return <dd ref={ref} className={hashClass(styled, clsx(className))}>{children}</dd>
})

ListItemDescription.displayName = ComponentName.ListItemDescription
export default ListItemDescription
