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
 * @param id
 * @param href {string} Link to open
 * @param to {string} use for router
 * @param title {string} Title attribute
 * @param onClick {Function} onClick Event
 * @param accessibilityLabel {string} Accessibility label
 * @param inverted {boolean} Inverted link
 * @param others
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param href {string} Href link
 * @param routerLink Custom Router Link as props
 * @param blank Link Target Blank
 * -------------------------- NATIVE PROPERTIES -------------------------------
 */

const Link = React.forwardRef<LinkRef, LinkProps>(
  (
    { children, className, accessibilityLabel, markup: LinkComponent = 'a', iconName, inverted, blank, ...others },
    ref,
  ): JSX.Element => {
    const { styled } = useTrilogyContext()

    const classes = hashClass(styled, clsx('link', iconName && has('icon'), inverted && is('inverted'), className))

    return (
      <LinkComponent
        ref={ref}
        aria-label={accessibilityLabel}
        className={classes}
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
      </LinkComponent>
    )
  },
)

Link.displayName = ComponentName.Link
export default Link
