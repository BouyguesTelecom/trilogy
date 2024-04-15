import React from 'react'
import clsx from 'clsx'
import { SliceIconProps } from './SliceIconProps'
import { Icon } from '../../icon'
import { hashClass } from '../../../helpers/hashClassesHelpers'
import { useTrilogyContext } from '../../../context/index'

/**
 * Slice Icon Component
 * @param iconSize {IconSize} Size for icon
 * @param iconName {IconName} Name for icon
 * @param iconColor {IconColor} Custom color for icon
 * @param children {ReactNode}
 * ------------------ WEB PROPERTIES ---------------------
 * @param className {string} Additionnal CSS Classes
 */
const SliceIcon = ({ className, iconSize, iconName, iconColor, ...others }: SliceIconProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('slice-icon', className))

  return (
    <div className={classes} {...others}>
      <Icon name={iconName} {...(iconColor && { color: iconColor })} {...(iconSize && { size: iconSize })} />
    </div>
  )
}

export default SliceIcon
