import * as React from 'react'
import { ProgressRadialItemProps } from './ProgressRadialItemProps'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import { useTrilogyContext } from '@/context'

const ProgressRadialItem = ({ color, className, id }: ProgressRadialItemProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx(`progress-circle-slice progress-circle-background-${color}`, className))

  return <div id={id} className={classes}></div>
}

export default ProgressRadialItem
