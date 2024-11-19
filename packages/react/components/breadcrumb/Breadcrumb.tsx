import clsx from 'clsx'
import React from 'react'

import { BreadcrumbWebProps } from '@/components/breadcrumb/BreadcrumbProps'
import { hashClass } from '@/helpers/hashClassesHelpers'

/**
 * Breadcrumb Component
 * @param children {React.ReactNode} Breadcrumb Children
 * @param testId {string} Test id
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param accessibilityLabel {string} Accessibility label
 */
const Breadcrumb = (
  { children, className, testId, accessibilityLabel, ...others }: BreadcrumbWebProps,
  ref: React.Ref<HTMLElement>,
) => {
  return (
    <nav
      ref={ref}
      role='navigation'
      data-testid={testId}
      className={hashClass(clsx('breadcrumb', className))}
      aria-label={accessibilityLabel}
      {...others}
    >
      <ul>{children}</ul>
    </nav>
  )
}

export default React.forwardRef(Breadcrumb)
