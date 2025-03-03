import * as React from 'react'
import clsx from 'clsx'
import { TimelineMarkerRef, TimelineMarkerWebProps } from './TimelineMarkerProps'
import { is } from '@/services/classify'
import { Icon, IconSize } from '@/components/icon'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Timeline Marker Component
 * @param iconName {IconName} Icon Name - sample : IconName.CHECK
 * @param iconColor {IconColor} Icon Color
 * @param testId {string} Test Id for Test Integration
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param iconClassname {string} Additionnal CSS Classes for icon
 */
const TimelineMarker = React.forwardRef<TimelineMarkerRef, TimelineMarkerWebProps>(({
  className,
  id,
  iconClassname,
  iconName,
  ...others
}, ref): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('timeline-marker', is('icon'), className))
  const iconClasses = clsx(iconClassname)

  return (
    <div ref={ref} id={id} className={classes} {...others}>
      <div className='card-header-icon'>
        <Icon className={iconClasses} name={iconName} size={IconSize.SMALL} />
      </div>
    </div>
  )
})

TimelineMarker.displayName = ComponentName.TimelineMarker
export default TimelineMarker
