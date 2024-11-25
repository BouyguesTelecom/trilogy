import clsx from 'clsx'
import React from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconSize } from '@/components/icon'
import { TimelineMarkerWebProps } from '@/components/timeline/marker/TimelineMarkerProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'

/**
 * Timeline Marker Component
 * @param iconName {IconName} Icon Name - sample : IconName.CHECK
 * @param iconColor {IconColor} Icon Color
 * @param testId {string} Test Id for Test Integration
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param iconClassname {string} Additionnal CSS Classes for icon
 */
const TimelineMarker = React.forwardRef(
  (
    { className, iconClassname, iconName, iconColor, testId, ...others }: TimelineMarkerWebProps,
    ref: React.Ref<HTMLDivElement>,
  ): JSX.Element => {
    const classes = hashClass(clsx('timeline-marker', is('icon'), className))
    const iconClasses = clsx(iconClassname)

    return (
      <div className={classes} {...others} data-testid={testId} ref={ref}>
        <div className='card-header-icon'>
          <Icon color={iconColor} className={iconClasses} name={iconName} size={IconSize.SMALL} />
        </div>
      </div>
    )
  },
)

TimelineMarker.displayName = ComponentName.TimelineMarker
export default TimelineMarker
