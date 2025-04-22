import * as React from 'react'
import clsx from 'clsx'
import { TimelineItemWebProps } from './TimelineItemProps'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { ComponentName } from '@/components/enumsComponentsName'
import { TimelineMarkerRef } from '../marker/TimelineMarkerProps'

/**
 * Timeline Item Component
 * @param children {ReactNode}
 * @param done {boolean} Done Timeline Item
 * @param active {boolean} Active Timeline Item
 * @param cancel {boolean} Cancel Timeline Item
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 */
const TimelineItem = React.forwardRef<TimelineMarkerRef, TimelineItemWebProps>(({ className, id, done, active, cancel, ...others }, ref) => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(
    styled,
    clsx('timeline-item', done && 'done', active && 'active', cancel && 'cancel', className),
  )
  return <div ref={ref} id={id} className={classes} {...others} />
})

TimelineItem.displayName = ComponentName.TimelineItem
export default TimelineItem
