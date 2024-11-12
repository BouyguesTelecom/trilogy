import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import * as React from 'react'
import { ProgressRadialItemProps } from './ProgressRadialItemProps'

const ProgressRadialItem = ({ color, className }: ProgressRadialItemProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(clsx(`progress-circle-slice progress-circle-background-${color}`, className))

  return <div className={classes}></div>
}

export default ProgressRadialItem
