import * as React from "react"
import clsx from "clsx"
import { ListProps } from "./ListProps"
import { hashClass } from "@/helpers"
import { useTrilogyContext } from "@/context"

/**
 * List Component
 * @param children {React.ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param hasIcon {boolean} If Have icon
 * @param testId {string} Test Id for Test Integration
 */
const List = React.forwardRef((props: ListProps, ref: React.LegacyRef<HTMLUListElement>) => {
  const {
    className,
    hasIcon,
    children,
    testId,
    ...others
  } = props

  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(hasIcon ? "icon-list" : "list", className)
  )
  return (
    <ul ref={ref} data-testid={testId} className={classes} {...others}>
      {children}
    </ul>
  )
})

export default List
