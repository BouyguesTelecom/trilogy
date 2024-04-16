import React from 'react'
import clsx from 'clsx'
import { TimelineMarkerWebProps } from './TimelineMarkerProps'
import { is } from '../../../services/classify'
import { Icon, IconColor, IconSize } from '../../icon'
import { useTrilogyContext } from '../../../context/index'
import { hashClass } from '../../../helpers/hashClassesHelpers'

/**
 * Timeline Marker Component
 * @param className {string} Additionnal CSS Classes
 * @param iconClassname {string} Additionnal CSS Classes for icon
 * @param iconName {IconName} Icon Name - sample : IconName.CHECK
 * @param iconColor {IconColor} Icon Color
 * @param children {ReactNode}
 */
const TimelineMarker = ({
  className,
  iconClassname,
  iconName,
  iconColor,
  testId,
  ...others
}: TimelineMarkerWebProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('timeline-marker', is('icon'), className))
  const iconClasses = clsx(iconClassname)

  return (
    <div className={classes} {...others} data-testid={testId}>
      <div className='card-header-icon'>
        <Icon color={iconColor || IconColor.WHITE} className={iconClasses} name={iconName} size={IconSize.SMALL} />
      </div>
    </div>
  )
}

export default TimelineMarker
