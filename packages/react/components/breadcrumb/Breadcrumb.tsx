import * as React from "react"
import { BreadcrumbWebProps } from "./BreadcrumbProps"
import clsx from "clsx"
import { hashClass } from "../../helpers"
import { useTrilogyContext } from "../../context"

/**
 * Breadcrumb Component
 * @param children {React.ReactNode} Breadcrumb Children
 * @param testId {string} Test id
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const Breadcrumb = ({
  children,
  className,
  testId,
  ...others
}: BreadcrumbWebProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  return (
    <nav
      data-testid={testId}
      className={hashClass(styled, clsx("breadcrumb", className))}
      aria-label='breadcrumbs'
      {...others}
    >
      <ul>{children}</ul>
    </nav>
  )
}

export default Breadcrumb
