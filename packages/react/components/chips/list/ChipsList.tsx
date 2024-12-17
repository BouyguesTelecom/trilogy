import { hashClass } from '@/helpers'
import { is } from '@/services'
import clsx from 'clsx'
import * as React from 'react'
import { ChipsListProps } from './ChipsListProps'

/**
 * ChipsList Component - Container for Chips
 * @param className
 * @param id
 * @param children {React.ReactNode}
 * @param multiple {boolean} Selection Multiple With checked icon
 * @param scrollable {boolean} If multiple Chips make scrollable List
 * @param others
 */
const ChipsList = ({ className, id, children, multiple, scrollable, ...others }: ChipsListProps) => {
  const classes = hashClass(clsx('chips-list', multiple && is('multiple'), scrollable && is('scrollable'), className))

  return (
    <div id={id} role='group' className={classes} {...others}>
      {children}
    </div>
  )
}

export default ChipsList
