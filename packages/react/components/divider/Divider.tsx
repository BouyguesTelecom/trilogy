import { DividerProps, DividerRef } from '@/components/divider/DividerProps'
import { Icon, IconSize } from '@/components/icon'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { has, is } from '@/services/classify'
import clsx from 'clsx'
import React from 'react'
import { ComponentName } from '../enumsComponentsName'

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
const Divider = React.forwardRef<DividerRef, DividerProps>(({
  className,
  id,
  unboxed,
  content,
  marginless,
  iconName,
  inverted,
  ...others
}, ref): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      'divider',
      unboxed && is('unboxed'),
      marginless && is('marginless'),
      className,
      inverted && is('inverted'),
      iconName && has('icon'),
    ),
  )
  const contentClasses = hashClass(styled, clsx('divider-content'))

  return (
    <div ref={ref} id={id} data-testid='separator' className={classes} {...others}>
      <p className={contentClasses}>
        {iconName && !content && <Icon name={iconName} size={IconSize.MEDIUM} />}
        {content && content}
      </p>
    </div>
  )
})
Divider.displayName = ComponentName.Divider
export default Divider
