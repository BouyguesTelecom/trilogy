import React from 'react'
import clsx from 'clsx'
import { is } from '../../services/classify'
import { Loading, LoadingValues } from '../../objects/facets/Loadable'
import { getColorClassName } from '../../objects/facets/Color'
import { ButtonColor, ButtonColorValues, ButtonMarkup, ButtonMarkupValues } from './ButtonEnum'
import { ButtonProps } from './ButtonProps'
import { hashClass } from '../../helpers/hashClassesHelpers'
import { useTrilogyContext } from '../../context/index'
import { Icon } from "../icon"
import { VariantState } from "../../objects/facets/Variant"

/**
 * Button component
 * @param loading {boolean} Loading button
 * @param disabled {boolean} Disabled button
 * @param variant {ButtonColor} Button color : primary|secondary|info|warning|success.
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
 * - --------------- NATIVE PROPERTIES ----------------------------------
 */

const Button = ({
  markup,
  loading,
  variant,
  href,
  id,
  fullwidth,
  children,
  className,
  to,
  accessibilityLabel,
  testId,
  onClick,
  name,
  routerLink,
  type,
  iconName,
  ...others
}: ButtonProps): JSX.Element => {
  const isDisabled = others.disabled || false
  const { styled } = useTrilogyContext()

  /** Check if specified markup is valid */
  const isCorrectMarkup = (stringMarkup: ButtonMarkup | ButtonMarkupValues) => {
    if (stringMarkup in ButtonMarkup || Object.values(ButtonMarkup).includes(stringMarkup as ButtonMarkup)) return true
  }

  const getClassNames = (
    loading?: Loading | LoadingValues | boolean,
    variant?: ButtonColor | ButtonColorValues,
    fullwidth?: boolean,
    className?: string,
  ) => {
    return clsx(
      'button',
      loading ? is('loading') : is('loaded'),
      variant && is(getColorClassName(variant)),
      fullwidth && is('fullwidth'),
      className,
    )
  }

  const classes = hashClass(
    styled,
    getClassNames( loading, variant, fullwidth, className),
  )
  const Tag = markup && isCorrectMarkup(markup) ? markup : 'button'

  if (Tag === 'button') {
    return (
      <button
        id={id}
        data-testid={testId}
        aria-label={accessibilityLabel}
        className={classes}
        disabled={isDisabled}
        name={name}
        onClick={(e) => {
          // eslint-disable-next-line no-unused-expressions
          !isDisabled && onClick?.(e)
          e.stopPropagation()
        }}
        type={type ?? 'button'}
        {...others}
      >
        {iconName && <Icon className={!children ? 'is-marginless' : ''} color={variant === VariantState.TERTIARY ? 'SECONDARY' : 'WHITE'} name={iconName} />}
        {children}
      </button>
    )
  }

  if (Tag === 'input') {
    return (
      <input
        id={id}
        data-testid={testId}
        className={classes}
        aria-label={accessibilityLabel}
        name={name}
        onClick={(e) => {
          // eslint-disable-next-line no-unused-expressions
          !isDisabled && onClick?.(e)
          e.stopPropagation()
        }}
        disabled={isDisabled}
        type={type ?? 'submit'}
        value={`${children}`}
        {...others}
      />
    )
  }

  if (routerLink && to && !isDisabled) {
    const RouterLink = (routerLink ? routerLink : 'a') as React.ElementType
    return (
      <RouterLink aria-label={accessibilityLabel} data-testid={testId} to={to} className={classes} {...others}>
        {iconName && <Icon className={!children ? 'is-marginless' : ''} color={variant === VariantState.TERTIARY ? 'SECONDARY' : 'WHITE'} name={iconName} />}
        {children}
      </RouterLink>
    )
  }

  return (
    <a
      id={id}
      data-testid={testId}
      aria-label={accessibilityLabel}
      className={classes}
      href={href}
      onClick={(e) => {
        // eslint-disable-next-line no-unused-expressions
        !isDisabled && onClick?.(e)
        e.stopPropagation()
      }}
      {...others}
    >
      {iconName && <Icon className={!children ? 'is-marginless' : ''} color={variant === VariantState.TERTIARY ? 'SECONDARY' : 'WHITE'} name={iconName} />}
      {children}
    </a>
  )
}

export default Button
