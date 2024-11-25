import * as React from 'react'
import clsx from 'clsx'
import { TimelineItemWebProps } from './TimelineItemProps'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'

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
  const { styled } = useTrilogyContext()
  const classes = hashClass(
    styled,
    clsx('timeline-item', done && 'done', active && 'active', cancel && 'cancel', className),
  )
  return <div id={id} className={classes} {...others} />
}

export default TimelineItem
