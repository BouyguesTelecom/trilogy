import { Icon, IconSize } from '@/components/icon'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { has, is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { LinkProps, LinkRef } from './LinkProps'

/**
 * Link Component
 * @param children {React.ReactNode} Content children for Link
 * @param to {string} Use for router navigation
 * @param onClick {Function} onClick Event
 * @param accessibilityLabel {string} Accessibility label
 * @param iconName {IconName} Adding Icon to Link
 * @param inverted {boolean} Inverted link color
 * @param testId {string} Test Id for Test Integration
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param id {string} Custom id attribute
 * @param routerLink {React.ElementType} Custom Router Link component
 * @param blank {boolean} Link target blank
 * @param small {boolean} Small link
 * @param href {string} Link URL
 * @param title {string} Title attribute
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
      testId,
      small,
      ...others
    },
    ref,
  ): JSX.Element => {
    const { styled } = useTrilogyContext()

    const classes = hashClass(styled, clsx('link', iconName && has('icon'), inverted && is('inverted'), small && is('small'), className))

    if (routerLink && to) {
      const RouterLink = (routerLink ? routerLink : 'a') as React.ElementType

      const RouterLinkTrilogy = (): JSX.Element => {
        return (
          <RouterLink
            data-testid={testId}
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
          data-testid={testId}
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
