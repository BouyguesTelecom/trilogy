import { hashClass } from '@/helpers'
import { has, is } from '@/services'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { RowsProps, RowsRef } from './RowsProps'

/**
 * Rows Component
 * @param children {React.ReactNode} Rows children
 * - ------------------- WEB PROPERTIES -------------------------
 * @param className {string} additionnal CSS Classes
 */
const Rows = React.forwardRef<RowsRef, RowsProps>(({ className, id, gap, ...others }, ref) => {
  return (
    <div
      ref={ref}
      id={id}
      className={hashClass(
        clsx('rows', gap && has(`gap-${gap}`), typeof gap !== 'undefined' && gap === 0 && is('gapless'), className),
      )}
      {...others}
    />
  )
})

Rows.displayName = ComponentName.Rows
export default Rows
