import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/index'
import clsx from 'clsx'
import * as React from 'react'
import { ProgressRadialItemProps } from './ProgressRadialItemProps'

const ProgressRadialItem = ({ color, className, id }: ProgressRadialItemProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx(`progress-circle-slice progress-circle-background-${color}`, className))

  return <div id={id} className={classes}></div>
}

export default ProgressRadialItem
