import { Icon, IconSize } from '@/components/icon'
import { hashClass } from '@/helpers'
import { has, is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { LinkProps } from './LinkProps'

/**
 * Link Component
 * @param children {React.ReactNode} Content children for Link
 * @param id
 * @param href {string} Link to open
 * @param to {string} use for router
 * @param title {string} Title attribute
 * @param onClick {Function} onClick Event
 * @param accessibilityLabel {string} Accessibility label
 * @param iconName {IconName} Adding Icon Link
 * @param inverted {boolean} Inverted link
 * @param others
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param href {string} Href link
 * @param routerLink Custom Router Link as props
 * @param blank Link Target Blank
 * -------------------------- NATIVE PROPERTIES -------------------------------
 */

const Link = ({
  children,
  className,
  id,
  to,
  href,
  onClick,
  accessibilityLabel,
  routerLink,
  iconName,
  inverted,
  blank,
  title,
  ...others
}: LinkProps): JSX.Element => {
  const classes = hashClass(clsx('link', iconName && has('icon'), inverted && is('inverted'), className))

  if (routerLink && to) {
    const RouterLink = (routerLink ? routerLink : 'a') as React.ElementType

    const RouterLinkTrilogy = (): JSX.Element => {
      return (
        <RouterLink
          id={id}
          aria-label={accessibilityLabel}
          onClick={onClick && onClick}
          className={hashClass(clsx(classes))}
          to={to || ''}
          {...(blank && {
            target: '_blank',
          })}
          {...others}
        >
          {children}
        </RouterLink>
      )
    }

    return <RouterLinkTrilogy />
  }

  const LinkTrilogy = (): JSX.Element => {
    return (
      <a
        id={id}
        aria-label={accessibilityLabel}
        onClick={onClick && onClick}
        className={classes}
        title={title}
        href={href}
        {...(blank && {
          target: '_blank',
        })}
        {...others}
      >
        {iconName ? (
          <>
            <span>{children}</span>
            <Icon name={iconName} size={IconSize.SMALL} />
          </>
        ) : (
          children
        )}
      </a>
    )
  }

  return <LinkTrilogy />
}

export default Link
