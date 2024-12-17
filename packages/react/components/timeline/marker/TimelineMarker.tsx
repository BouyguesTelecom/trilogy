import { Icon, IconSize } from '@/components/icon'
import { hashClass } from '@/helpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { TimelineMarkerWebProps } from './TimelineMarkerProps'

/**
 * Timeline Marker Component
 * @param iconName {IconName} Icon Name - sample : IconName.CHECK
 * @param iconColor {IconColor} Icon Color
 * @param testId {string} Test Id for Test Integration
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param iconClassname {string} Additionnal CSS Classes for icon
 */
const TimelineMarker = ({ className, id, iconClassname, iconName, ...others }: TimelineMarkerWebProps): JSX.Element => {
  const classes = hashClass(clsx('timeline-marker', is('icon'), className))
  const iconClasses = clsx(iconClassname)

  return (
    <div id={id} className={classes} {...others}>
      <div className='card-header-icon'>
        <Icon className={iconClasses} name={iconName} size={IconSize.SMALL} />
      </div>
    </div>
  )
}

export default TimelineMarker
