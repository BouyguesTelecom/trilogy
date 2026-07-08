import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import * as React from 'react'
import { TimelineMarkerRef } from '../marker/TimelineMarkerProps'
import { TimelineItemWebProps } from './TimelineItemProps'

/**
 * Timeline Item Component
 * @param done {boolean} Done Timeline Item
 * @param active {boolean} Active Timeline Item
 * @param cancel {boolean} Cancel Timeline Item
 * @param id {string} Custom id attribute
 * @param testId {string} Test Id for Test Integration
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 */
const TimelineItem = React.forwardRef<TimelineMarkerRef, TimelineItemWebProps>(
  ({ className, id, done, active, cancel, testId, ...others }, ref) => {
    const { styled } = useTrilogyContext()
    const classes = hashClass(
      styled,
      clsx('timeline-item', done && 'done', active && 'active', cancel && 'cancel', className),
    )
    return <div ref={ref} id={id} className={classes} data-testid={testId} {...others} />
  },
)

TimelineItem.displayName = ComponentName.TimelineItem
export default TimelineItem
