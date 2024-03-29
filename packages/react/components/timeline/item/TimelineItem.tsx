import React from 'react'
import clsx from 'clsx'
import { TimelineItemWebProps } from './TimelineItemProps'
import { useTrilogyContext } from '../../../context'
import { hashClass } from '../../../helpers'

/**
 * Timeline Item Component
 * @param children {ReactNode}
 * @param className {string} Additionnal CSS Classes
 * @param done {boolean} Done Timeline Item
 * @param active {boolean} Active Timeline Item
 * @param undone {boolean} Undone Timeline Item
 * @param cancel {boolean} Cancel Timeline Item
 */
const TimelineItem = ({ className, done, active, undone, cancel, ...others }: TimelineItemWebProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(
    styled,
    clsx('timeline-item', done && 'done', active && 'active', undone && 'undone', cancel && 'cancel', className),
  )
  return <div className={classes} {...others} />
}

export default TimelineItem
