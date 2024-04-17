import * as React from "react"
import { SubMenuItemWebProps } from "./SubMenuItemProps"
import { hashClass } from "../../../helpers"
import clsx from "clsx"
import { useTrilogyContext } from "../../../context"

/**
 * SubMenuItem Component - A Sub Item Menu Component
 * @param children {ReactNode} Children for SubMenuItem
 * @param className {string} Additionnal CSS Classes
 */

const SubMenuItem = ({
  className,
  testId,
  ...others
}: SubMenuItemWebProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  return (
    <ul
      data-testid={testId}
      className={hashClass(styled, clsx(className))}
      {...others}
    />
  )
}

export default SubMenuItem
