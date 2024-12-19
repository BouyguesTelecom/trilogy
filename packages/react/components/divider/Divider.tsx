import { hashClass } from '@/helpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { Icon, IconSize } from '../icon'
import { DividerProps } from './DividerProps'

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
  id,
  unboxed,
  content,
  marginless,
  iconName,
  inverted,
  ...others
}: DividerProps): JSX.Element => {
  const classes = hashClass(
    clsx(
      'divider',
      unboxed && is('unboxed'),
      marginless && is('marginless'),
      className,
      inverted && is('inverted'),
      iconName && 'has-icon',
    ),
  )
  const contentClasses = hashClass(clsx('divider-content'))

  // s'il y a du text et une icone , SEULEMENT le text compte
  if (content && iconName) {
    return (
      <div id={id} data-testid='separator' className={classes}>
        <p className={contentClasses}>{content}</p>
      </div>
    )
  }

  if (content) {
    return (
      <div id={id} data-testid='separator' className={classes}>
        <p className={contentClasses}>{content}</p>
      </div>
    )
  }

  // si il y a seulement une icone
  if (iconName) {
    return (
      <div id={id} data-testid='separator' className={classes}>
        <p className={contentClasses}>
          <Icon name={iconName} size={IconSize.MEDIUM} />
        </p>
      </div>
    )
  }

  // divider normal trilogy
  return <div id={id} data-testid='separator' className={classes} {...others} />
}

export default Divider
