import * as React from "react"
import { MenuLinkProps } from "./MenuLinkProps"
import { hashClass } from "../../../helpers"
import clsx from "clsx"
import { useTrilogyContext } from "../../../context"

/**
 * Menu Link Component
 * @param children {string} Menu Link Text Content
 * @param arrow {boolean} Adding Right Arrow For Menu Link
 * @param onClick {Function} onClick Event
 */
const MenuLink = ({
  children,
  className,
  arrow,
  onClick,
  testId,
  ...others
}: MenuLinkProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx(arrow && "with-arrow", className))
  return (
    <a data-testid={testId} onClick={onClick} className={classes} {...others}>
      {children}
    </a>
  )
}

export default MenuLink
