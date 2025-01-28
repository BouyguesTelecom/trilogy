import { Icon } from '@/components/icon'
import { hashClass } from '@/helpers'
import { getButtonVariantClassName } from '@/objects/facets/Color'
import { Loading, LoadingValues } from '@/objects/facets/Loadable'
import { is } from '@/services/index'
import clsx from 'clsx'
import React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { ButtonMarkup, ButtonMarkupValues, ButtonVariant, ButtonVariantValues } from './ButtonEnum'
import { ButtonProps } from './ButtonProps'
import { useButton } from './hooks/useButton'

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

const Button = React.forwardRef(
  (
    {
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
      onClick,
      name,
      routerLink,
      type,
      iconName,
      ...others
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>,
  ): JSX.Element => {
    const isDisabled = others.disabled || false
    const { handleClick } = useButton({ isDisabled, onClick })

    /** Check if specified markup is valid */
    const isCorrectMarkup = (stringMarkup: ButtonMarkup | ButtonMarkupValues) => {
      if (stringMarkup in ButtonMarkup || Object.values(ButtonMarkup).includes(stringMarkup as ButtonMarkup))
        return true
    }

    const getClassNames = (
      loading?: Loading | LoadingValues | boolean,
      variant?: ButtonVariant | ButtonVariantValues,
      fullwidth?: boolean,
      className?: string,
    ) => {
      return clsx(
        'button',
        loading && is('loading'),
        variant && is(getButtonVariantClassName(variant)),
        fullwidth && is('fullwidth'),
        className,
      )
    }

    const classes = hashClass(getClassNames(loading, variant, fullwidth, className))
    const Tag = markup && isCorrectMarkup(markup) ? markup : 'button'

    if (Tag === 'button' && !href && !to) {
      return (
        <button
          ref={ref}
          id={id}
          aria-label={accessibilityLabel}
          className={classes}
          disabled={isDisabled}
          name={name}
          onClick={handleClick}
          type={type ?? 'button'}
          {...others}
        >
          {iconName && <Icon className={!children ? 'is-marginless' : ''} name={iconName} />}
          {children}
        </button>
      )
    }

    if (Tag === 'input') {
      return (
        <input
          id={id}
          className={classes}
          aria-label={accessibilityLabel}
          name={name}
          onClick={handleClick}
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
        <RouterLink aria-label={accessibilityLabel} to={to} className={classes} {...others}>
          {iconName && <Icon className={!children ? 'is-marginless' : ''} name={iconName} />}
          {children}
        </RouterLink>
      )
    }

    return (
      <a id={id} aria-label={accessibilityLabel} className={classes} href={href} onClick={handleClick} {...others}>
        {iconName && <Icon className={!children ? 'is-marginless' : ''} name={iconName} />}
        {children}
      </a>
    )
  },
)

Button.displayName = ComponentName.Button
export default Button
