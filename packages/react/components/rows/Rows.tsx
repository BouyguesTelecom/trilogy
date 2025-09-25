import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/index'
import { has, is } from '@/services/index'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { RowsProps, RowsRef } from './RowsProps'

/**
 * Rows Component
 * @param children {React.ReactNode} Rows children
 * - ------------------- WEB PROPERTIES -------------------------
 * @param className {string} Additional CSS Classes
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
