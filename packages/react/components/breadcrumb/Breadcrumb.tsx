import * as React from 'react'
import { BreadcrumbWebProps } from './BreadcrumbProps'
import clsx from 'clsx'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'

/**
 * Breadcrumb Component
 * @param children {React.ReactNode} Breadcrumb Children
 * @param testId {string} Test id
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param accessibilityLabel {string} Accessibility label
 */
const Breadcrumb = ({ children, className, id, accessibilityLabel, ...others }: BreadcrumbWebProps) => {
  const { styled } = useTrilogyContext()

  return (
    <nav
      id={id}
      role="navigation"
      className={hashClass(styled, clsx('breadcrumb', className))}
      aria-label={accessibilityLabel}
      {...others}
    >
      <ul>{children}</ul>
    </nav>
  )
}

export default Breadcrumb
