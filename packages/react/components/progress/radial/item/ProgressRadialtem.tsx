import * as React from 'react'
import { ProgressRadialItemProps } from './ProgressRadialItemProps'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import { useTrilogyContext } from '@/context'

/**
 * ProgressRadialItem Component - Represents a slice of the radial progress
 * @param color {string} Color of the slice (e.g., 'primary', 'secondary', 'success', etc.)
 * @param className {string} Additional CSS Classes
 * @param id {string} Custom id attribute
 */
const ProgressRadialItem = ({ color, className, id }: ProgressRadialItemProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx(`progress-circle-slice progress-circle-background-${color}`, className))

  return <div id={id} className={classes}></div>
}

export default ProgressRadialItem
