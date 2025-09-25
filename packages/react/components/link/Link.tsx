import { Icon, IconSize } from '@/components/icon'
import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { has, is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { LinkProps, LinkRef } from './LinkProps'

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
 * @param className {string} Additional CSS Classes
 * @param href {string} Href link
 * @param routerLink Custom Router Link as props
 * @param blank Link Target Blank
 * -------------------------- NATIVE PROPERTIES -------------------------------
 */

const Link = React.forwardRef<LinkRef, LinkProps>(
  (
    {
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
    },
    ref,
  ): JSX.Element => {
    const { styled } = useTrilogyContext()

    const classes = hashClass(styled, clsx('link', iconName && has('icon'), inverted && is('inverted'), className))

    if (routerLink && to) {
      const RouterLink = (routerLink ? routerLink : 'a') as React.ElementType

      const RouterLinkTrilogy = (): JSX.Element => {
        return (
          <RouterLink
            ref={ref}
            id={id}
            aria-label={accessibilityLabel}
            onClick={onClick && onClick}
            className={hashClass(styled, clsx(classes))}
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
          ref={ref as React.Ref<HTMLAnchorElement>}
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
  },
)

Link.displayName = ComponentName.Link
export default Link
