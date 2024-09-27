import * as React from "react"
import { BreadcrumbWebProps } from "./BreadcrumbProps"
import clsx from "clsx"
import { hashClass } from "@/helpers"
import { useTrilogyContext } from "@/context"

/**
 * Breadcrumb Component
 * @param children {React.ReactNode} Breadcrumb Children
 * @param testId {string} Test id
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const Breadcrumb = React.forwardRef((props: BreadcrumbWebProps, ref: React.LegacyRef<HTMLElement>) => {
  const {
    children,
    className,
    testId,
    accessibilityLabel,
    ...others
  } = props 

  const { styled } = useTrilogyContext()

  return (
    <nav
      ref={ref}
      role='navigation'
      data-testid={testId}
      className={hashClass(styled, clsx("breadcrumb", className))}
      aria-label={accessibilityLabel}
      {...others}
    >
      <ul>{children}</ul>
    </nav>
  )
})

export default Breadcrumb
