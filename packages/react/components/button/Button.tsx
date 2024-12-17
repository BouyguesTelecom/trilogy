import { Icon } from '@/components/icon'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getButtonVariantClassName } from '@/objects/facets/Color'
import { Loading, LoadingValues } from '@/objects/facets/Loadable'
import { is } from '@/services/index'
import clsx from 'clsx'
import React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { ButtonMarkup, ButtonMarkupValues, ButtonVariant, ButtonVariantValues } from './ButtonEnum'
import { ButtonProps, ButtonRef } from './ButtonProps'

/**
 * Button component
 * @param loading {boolean} Loading button
 * @param disabled {boolean} Disabled button
 * @param variant {ButtonVariant} Button variant : accent|primary|secondary|ghost.
 * @param children {ReactNode} Button child
 * @param fullwidth {boolean} Fullwidth button
 * @param onClick {Function} Click Event
 * @param accessibilityLabel {string} Accessibility label
 * @param testId {string} Test Id for Test Integration
 * @param iconName {IconName} If Icon, Button + Icon && Button IconName
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param markup {ButtonMarkup} HTML element : button|input|a (ONLY FOR WEB)
 * @param className {string} Additionnal css classes (ONLY FOR WEB)
 * @param id {string} Custom id for button (ONLY FOR WEB)
 * @param to {string} Link
 * @param href {string} Href
 * @param name {string} Button name attribute
 * @param routerLink Custom Router Link as props
 * @param styled {boolean} Component Wearing Styles - Hashed Trilogy Css
 * @param type {ButtonType} button type (button|reset|submit)
 */
const Button = React.forwardRef<ButtonRef, ButtonProps>(
  (
    {
      markup: ButtonComponent = 'button',
      loading,
      variant,
      fullwidth,
      children,
      className,
      accessibilityLabel,
      onClick,
      iconName,
      type,
      disabled = false,
      ...others
    },
    ref,
  ): JSX.Element => {
    const { styled } = useTrilogyContext()

    const classes = hashClass(
      styled,
      clsx(
        'button',
        loading && is('loading'),
        variant && is(getButtonVariantClassName(variant)),
        fullwidth && is('fullwidth'),
        className,
      ),
    )

    if (ButtonComponent === 'button' && (others.href || others.to)) {
      ButtonComponent = 'a'
      type = type ?? 'button'
    } else if (ButtonComponent === 'input') {
      type = type ?? 'submit'
    }

    return (
      <ButtonComponent
        ref={ref as React.Ref<HTMLAnchorElement>}
        aria-label={accessibilityLabel}
        className={classes}
        disabled={disabled}
        onClick={(e) => {
          !disabled && onClick?.(e)
          e.stopPropagation()
        }}
        type={type}
        {...others}
      >
        {iconName && <Icon className={!children ? 'is-marginless' : ''} name={iconName} />}
        {children}
      </ButtonComponent>
    )
  },
)

Button.displayName = ComponentName.Button
export default Button
