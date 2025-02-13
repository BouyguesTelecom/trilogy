import { DividerProps } from '@/components/divider/DividerProps'
import { Icon, IconSize } from '@/components/icon'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { has, is } from '@/services/classify'
import clsx from 'clsx'
import React from 'react'

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
      iconName && has('icon'),
    ),
  )
  const contentClasses = hashClass(clsx('divider-content'))

  return (
    <div id={id} data-testid='separator' className={classes} {...others}>
      <p className={contentClasses}>
        {iconName && !content && <Icon name={iconName} size={IconSize.MEDIUM} />}
        {content && content}
      </p>
    </div>
  )
}

export default Divider
