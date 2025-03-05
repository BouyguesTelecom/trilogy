import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import * as React from 'react'
import { TimelineMarkerRef } from '../marker/TimelineMarkerProps'
import { TimelineItemWebProps } from './TimelineItemProps'

/**
 * Timeline Item Component
 * @param children {ReactNode}
 * @param done {boolean} Done Timeline Item
 * @param active {boolean} Active Timeline Item
 * @param cancel {boolean} Cancel Timeline Item
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const TimelineItem = React.forwardRef<TimelineMarkerRef, TimelineItemWebProps>(
  ({ className, id, done, active, cancel, ...others }, ref) => {
    const classes = hashClass(clsx('timeline-item', done && 'done', active && 'active', cancel && 'cancel', className))
    return <div ref={ref} id={id} className={classes} {...others} />
  },
)

TimelineItem.displayName = ComponentName.TimelineItem
export default TimelineItem
