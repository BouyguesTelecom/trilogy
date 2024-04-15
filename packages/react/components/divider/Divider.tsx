import React from 'react'
import { DividerProps } from './DividerProps'
import { has, is } from '../../services/classify'
import { Icon, IconSize } from '../icon'
import { getColorClassName } from '../../objects/facets/Color'
import clsx from 'clsx'
import { hashClass } from '../../helpers/hashClassesHelpers'
import { useTrilogyContext } from '../../context/index'

/**
 * Divider Component
 * @param content {string} Add text content for Divider
 * @param unboxed {boolean} Full-width separator in another component
 * @param marginless {boolean} Marginless divider
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes (ONLY FOR WEB)
 * @param iconName {IconName} Custom icon for Divider
 * @param color {TrilogyColor} Border color of Divider
 * @param backgroundColor {TrilogyColor} Background color of Divider
 * @param textColor {TrilogyColor} Text color of Divider
 * @param others
 */
const Divider = ({
                   className,
                   unboxed,
                   content,
                   marginless,
                   iconName,
                   color,
                   backgroundColor,
                   textColor,
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
      color && has(`background-${getColorClassName(color)}`),
      iconName && 'has-icon',
    ),
  )
  const contentClasses = hashClass(
    styled,
    clsx(
      'divider-content',
      textColor && has(`text-${getColorClassName(textColor)}`),
      backgroundColor && has(`background-${getColorClassName(backgroundColor)}`),
    ),
  )

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
          <Icon name={iconName} size={backgroundColor ? IconSize.SMALL : IconSize.MEDIUM}/>
        </p>
      </div>
    )
  }

  // divider normal trilogy
  return <div data-testid='separator' className={classes} {...others} />
}

export default Divider
