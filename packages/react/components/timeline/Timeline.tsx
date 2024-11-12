import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { is } from '@/services'
import clsx from 'clsx'
import * as React from 'react'
import { TimelineProps } from './TimelineProps'

/**
 * Timeline Component
 * @param notifications {boolean} Timeline notification rendering
 * @param children {ReactNode}
 * - --------------- WEB PROPERTIES ----------------------------------
 * @param horizontal {boolean} timeline horizontal
 * @param className {string} Additionnal CSS Classes
 */
const Timeline = React.forwardRef((props: TimelineProps, ref: React.LegacyRef<HTMLDivElement>) => {
  const { className, notifications, horizontal, ...others } = props

  const { styled } = useTrilogyContext()
  const classes = hashClass(clsx('timeline', notifications && notifications, horizontal && is('horizontal'), className))

  return <div ref={ref} className={classes} {...others} />
})

export default Timeline
