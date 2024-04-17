import * as React from "react"
import clsx from "clsx"
import { ListProps } from "./ListProps"
import { hashClass } from "../../helpers"
import { useTrilogyContext } from "../../context"

/**
 * ListItem Component
 * @param className {string} Additionnal CSS Classes
 * @param children {React.ReactNode}
 * @param hasIcon {boolean} If Have icon
 */

const List = ({
  className,
  hasIcon,
  children,
  testId,
  ...others
}: ListProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(hasIcon ? "icon-list" : "list", className)
  )
  return (
    <ul data-testid={testId} className={classes} {...others}>
      {children}
    </ul>
  )
}

export default List
