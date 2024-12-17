import { hashClass } from '@/helpers'
import clsx from 'clsx'
import * as React from 'react'
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
const TimelineItem = ({ className, id, done, active, cancel, ...others }: TimelineItemWebProps) => {
  const classes = hashClass(clsx('timeline-item', done && 'done', active && 'active', cancel && 'cancel', className))
  return <div id={id} className={classes} {...others} />
}

export default TimelineItem
