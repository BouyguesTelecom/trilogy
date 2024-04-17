import * as React from "react"
import { hashClass } from "../../helpers"
import clsx from "clsx"
import { MenuProps } from "./MenuProps"
import { useTrilogyContext } from "../../context"

const a11y = { role: "menu" }

/**
 * Menu Component
 * @param children {ReactNode} Menu Childre
 * ----------------- WEB PROPERTIES -----------------
 * @param className {string} Additionnal CSS Classes
 * @param notASide {ReactNode} Menu is in MenuScrolling
 */

const Menu = ({
  className,
  notASide,
  testId,
  ...others
}: MenuProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  return (
    <ul
      data-testid={testId}
      className={hashClass(
        styled,
        clsx("menu-list", !notASide && "aside-menu-list", className)
      )}
      {...a11y}
      {...others}
    />
  )
}

export default Menu
