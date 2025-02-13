import { ProgressRadialItemProps } from '@/components/progress/radial/item/ProgressRadialItemProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import * as React from 'react'

const ProgressRadialItem = ({ color, className, id }: ProgressRadialItemProps): JSX.Element => {
  const classes = hashClass(clsx(`progress-circle-slice progress-circle-background-${color}`, className))

  return <div id={id} className={classes}></div>
}

export default ProgressRadialItem
