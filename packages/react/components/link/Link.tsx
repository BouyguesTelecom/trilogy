import * as React from 'react'
import clsx from 'clsx'
import { LinkProps } from './LinkProps'
import {  is } from '@/services/classify'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'

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

const Link = ({
  children,
  className,
  accessibilityLabel,
  markup: LinkComponent = 'a',
  inverted,
  blank,
  ...others
}: LinkProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(styled, clsx('link', inverted && is('inverted'), className))

  return (
    <LinkComponent
      aria-label={accessibilityLabel}
      className={classes}
      {...(blank && {
        target: '_blank',
      })}
      {...others}
    >
      {children}
    </LinkComponent>
  )
}

export default Link
