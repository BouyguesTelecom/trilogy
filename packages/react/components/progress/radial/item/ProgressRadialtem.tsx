import { hashClass } from '@/helpers'
import clsx from 'clsx'
import * as React from 'react'
import { ProgressRadialItemProps } from './ProgressRadialItemProps'

const ProgressRadialItem = ({ color, className, id }: ProgressRadialItemProps): JSX.Element => {
  const classes = hashClass(clsx(`progress-circle-slice progress-circle-background-${color}`, className))

  return <div id={id} className={classes}></div>
}

export default ProgressRadialItem
