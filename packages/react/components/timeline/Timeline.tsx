import { hashClass } from '@/helpers'
import { is } from '@/services'
import clsx from 'clsx'
import * as React from 'react'
import { TimelineProps } from './TimelineProps'

/**
 * Timeline Component
 * @param notifications {boolean} Timeline notification rendering
 * - --------------- WEB PROPERTIES ----------------------------------
 * @param horizontal {boolean} timeline horizontal
 * @param className {string} Additionnal CSS Classes
 */
const Timeline = ({ className, id, horizontal, ...others }: TimelineProps) => {
  const classes = hashClass(clsx('timeline', horizontal && is('horizontal'), className))

  return <div id={id} className={classes} {...others} />
}

export default Timeline
