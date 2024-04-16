import React from 'react'
import { TimelineProps } from './TimelineProps'
import { hashClass } from '../../helpers/hashClassesHelpers'
import clsx from 'clsx'
import { useTrilogyContext } from '../../context/index'
import { is } from '../../services/classify'

/**
 * Timeline Component
 * @param notifications {boolean} Timeline notification rendering
 * @param children {ReactNode}
 * - --------------- WEB PROPERTIES ----------------------------------
 * @param horizontal {boolean} timeline horizontal
 * @param className {string} Additionnal CSS Classes
 */
const Timeline = ({ className, notifications, horizontal, ...others }: TimelineProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const timelineRef = React.useRef<HTMLDivElement>(null)
  const classes = hashClass(
    styled,
    clsx('timeline', notifications && notifications, horizontal && is('horizontal'), className),
  )

  return <div ref={timelineRef} className={classes} {...others} />
}

export default Timeline
