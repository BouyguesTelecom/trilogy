import * as React from 'react'
import { RowsProps, RowsRef } from './RowsProps'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import { useTrilogyContext } from '@/context'
import { has, is } from '@/services'
import { ComponentName } from '../enumsComponentsName'

/**
 * Rows Component
 * @param children {React.ReactNode} Rows children
 * - ------------------- WEB PROPERTIES -------------------------
 * @param className {string} additionnal CSS Classes
 */
const Rows = React.forwardRef<RowsRef, RowsProps>(({ className, id, gap, ...others }, ref) => {
  const { styled } = useTrilogyContext()

  return (
    <div
      ref={ref}
      id={id}
      className={hashClass(
        styled,
        clsx('rows', gap && has(`gap-${gap}`), typeof gap !== 'undefined' && gap === 0 && is('gapless'), className),
      )}
      {...others}
    />
  )
})

Rows.displayName = ComponentName.Rows
export default Rows
