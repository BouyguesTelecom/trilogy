import * as React from 'react'
import { TimelineProps } from './TimelineProps'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import { useTrilogyContext } from '@/context'
import { is } from '@/services'

/**
 * Timeline Component
 * @param notifications {boolean} Timeline notification rendering
 * @param children {ReactNode}
 * - --------------- WEB PROPERTIES ----------------------------------
 * @param horizontal {boolean} timeline horizontal
 * @param className {string} Additionnal CSS Classes
 */
const Timeline = React.forwardRef((props: TimelineProps, ref: React.LegacyRef<HTMLDivElement>) => {
  const { className, id, horizontal, ...others } = props

  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('timeline', horizontal && is('horizontal'), className))

  return <div id={id} ref={ref} className={classes} {...others} />
})

export default Timeline
