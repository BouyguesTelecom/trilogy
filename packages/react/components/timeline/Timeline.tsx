import { hashClass } from '@/helpers'
import { is } from '@/services'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { TimelineProps, TimelineRef } from './TimelineProps'

/**
 * Timeline Component
 * @param notifications {boolean} Timeline notification rendering
 * - --------------- WEB PROPERTIES ----------------------------------
 * @param horizontal {boolean} timeline horizontal
 * @param className {string} Additional CSS Classes
 */
const Timeline = React.forwardRef<TimelineRef, TimelineProps>(({ className, id, horizontal, ...others }, ref) => {
  const classes = hashClass(clsx('timeline', horizontal && is('horizontal'), className))

  return <div ref={ref} id={id} className={classes} {...others} />
})

Timeline.displayName = ComponentName.Timeline
export default Timeline
