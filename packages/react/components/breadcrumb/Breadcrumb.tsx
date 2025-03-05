import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { BreadcrumbRef, BreadcrumbWebProps } from './BreadcrumbProps'

/**
 * Breadcrumb Component
 * @param children {React.ReactNode} Breadcrumb Children
 * @param testId {string} Test id
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param accessibilityLabel {string} Accessibility label
 */
const Breadcrumb = React.forwardRef<BreadcrumbRef, BreadcrumbWebProps>(
  ({ children, className, id, accessibilityLabel = 'Breadcrumb', ...others }, ref) => {
    return (
      <nav
        ref={ref}
        id={id}
        role='navigation'
        className={hashClass(clsx('breadcrumb', className))}
        aria-label={accessibilityLabel}
        {...others}
      >
        <ul>{children}</ul>
      </nav>
    )
  },
)
Breadcrumb.displayName = ComponentName.Breadcrumb
export default Breadcrumb
