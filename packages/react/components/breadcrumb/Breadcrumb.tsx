import { hashClass } from '@/helpers'
import clsx from 'clsx'
import * as React from 'react'
import { BreadcrumbWebProps } from './BreadcrumbProps'

/**
 * Breadcrumb Component
 * @param children {React.ReactNode} Breadcrumb Children
 * @param testId {string} Test id
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param accessibilityLabel {string} Accessibility label
 */
const Breadcrumb = ({ children, className, id, accessibilityLabel = 'Breadcrumb', ...others }: BreadcrumbWebProps) => {
  return (
    <nav
      id={id}
      role='navigation'
      className={hashClass(clsx('breadcrumb', className))}
      aria-label={accessibilityLabel}
      {...others}
    >
      <ul>{children}</ul>
    </nav>
  )
}

export default Breadcrumb
