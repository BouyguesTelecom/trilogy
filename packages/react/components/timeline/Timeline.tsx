import clsx from 'clsx'
import React from 'react'

import { TimelineProps } from '@/components/timeline/TimelineProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'

/**
 * Timeline Component
 * @param notifications {boolean} Timeline notification rendering
 * @param children {ReactNode}
 * - --------------- WEB PROPERTIES ----------------------------------
 * @param horizontal {boolean} timeline horizontal
 * @param className {string} Additionnal CSS Classes
 */
const Timeline = (props: TimelineProps, ref: React.Ref<HTMLDivElement>) => {
  const { className, notifications, horizontal, ...others } = props

  const classes = hashClass(clsx('timeline', notifications && notifications, horizontal && is('horizontal'), className))

  return <div ref={ref} className={classes} {...others} />
}

export default React.forwardRef(Timeline)
