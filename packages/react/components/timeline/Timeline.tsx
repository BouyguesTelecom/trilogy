import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { is } from '@/services'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { TimelineProps, TimelineRef } from './TimelineProps'

/**
 * Timeline Component
 * @param id {string} Custom id attribute
 * @param testId {string} Test Id for Test Integration
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param horizontal {boolean} Timeline horizontal
 * @param className {string} Additional CSS Classes
 */
const Timeline = React.forwardRef<TimelineRef, TimelineProps>(
  ({ className, id, horizontal, testId, ...others }, ref) => {
    const { styled } = useTrilogyContext()
    const classes = hashClass(styled, clsx('timeline', horizontal && is('horizontal'), className))

    return <div ref={ref} id={id} className={classes} data-testid={testId} {...others} />
  },
)

Timeline.displayName = ComponentName.Timeline
export default Timeline
