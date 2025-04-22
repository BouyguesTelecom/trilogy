import * as React from 'react'
import { TimelineProps, TimelineRef } from './TimelineProps'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import { useTrilogyContext } from '@/context'
import { is } from '@/services'
import { ComponentName } from '../enumsComponentsName'

/**
 * Timeline Component
 * @param notifications {boolean} Timeline notification rendering
 * - --------------- WEB PROPERTIES ----------------------------------
 * @param horizontal {boolean} timeline horizontal
 * @param className {string} Additional CSS Classes
 */
const Timeline = React.forwardRef<TimelineRef, TimelineProps>(({ className, id, horizontal, ...others }, ref) => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('timeline', horizontal && is('horizontal'), className))

  return <div ref={ref} id={id} className={classes} {...others} />
})

Timeline.displayName = ComponentName.Timeline
export default Timeline
