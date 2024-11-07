import * as React from 'react'
import { DividerProps } from './DividerProps'
import { is } from '@/services/classify'
import { Icon, IconSize } from '../icon'
import clsx from 'clsx'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'

/**
 * Divider Component
 * @param content {string} Add text content for Divider
 * @param unboxed {boolean} Full-width separator in another component
 * @param marginless {boolean} delete margin
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes (ONLY FOR WEB)
 * @param iconName {IconName} Custom icon for Divider
 * @param color {TrilogyColor} Border color of Divider
 * @param others
 */
const Divider = ({
  className,
  unboxed,
  content,
  marginless,
  iconName,
  inverted,
  ...others
}: DividerProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      'divider',
      unboxed && is('unboxed'),
      marginless && is('marginless'),
      className,
      inverted && is('inverted'),
      iconName && 'has-icon',
    ),
  )
  const contentClasses = hashClass(styled, clsx('divider-content'))

  // si il y a du text et une icone , SEULEMENT le text compte
  if (content && iconName) {
    return (
      <div data-testid='separator' className={classes}>
        <p className={contentClasses}>{content}</p>
      </div>
    )
  }

  if (content) {
    return (
      <div data-testid='separator' className={classes}>
        <p className={contentClasses}>{content}</p>
      </div>
    )
  }

  // si il y a seulement une icone
  if (iconName) {
    return (
      <div data-testid='separator' className={classes}>
        <p className={contentClasses}>
          <Icon name={iconName} size={IconSize.MEDIUM} />
        </p>
      </div>
    )
  }

  // divider normal trilogy
  return <div data-testid='separator' className={classes} {...others} />
}

export default Divider
