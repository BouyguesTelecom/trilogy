import * as React from "react"
import { BreadcrumbItemPropsWeb } from "./BreadcrumbItemProps"
import { is } from "@/services/classify"
import clsx from "clsx"
import { hashClass } from "@/helpers"
import { useTrilogyContext } from "@/context"
import { Link } from '@/components/link'

/**
 * Breadcrumb Item Component
 * @param children {string} Breadcrumb Item Text
 * @param active {boolean} Active link
 * @param to {string} Url. Use React Router Link instead of a native-old <a> tag.
 * @param onClick {Function} Click Event
 * @param testId {string} data attribute
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param routerLink Custom Router Link as props
 * @param href {string} Url. Use native-old <a> tag (only when the `to` property is not filled)
 * @param className {string} Additionnal CSS Classes
 */
const BreadcrumbItem = ({
  children,
  active,
  className,
  href,
  to,
  routerLink,
  testId,
  onClick,
  ...others
}: BreadcrumbItemPropsWeb): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(styled, clsx(active && is("active"), className))

  if (routerLink && to) {
    const RouterLink = (routerLink ? routerLink : "a") as React.ElementType
    return (
      <li data-testid={testId} className={classes} onClick={onClick} aria-current={active ? 'page' : undefined}>
        <RouterLink className={hashClass(styled, clsx("link"))} to={to} {...others}>
          {children}
        </RouterLink>
      </li>
    )
  }

  return (
    <li className={classes} onClick={onClick} aria-current={active ? 'page' : undefined}>
      <Link href={active ? undefined : href} {...others}>
        {children}
      </Link>
    </li>
  )
}

export default BreadcrumbItem
