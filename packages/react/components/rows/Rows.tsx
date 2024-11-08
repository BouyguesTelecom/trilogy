import * as React from 'react'
import { RowsProps } from './RowsProps'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import { useTrilogyContext } from '@/context'
import { has, is } from '@/services'

/**
 * Rows Component
 * @param children {React.ReactNode} Rows children
 * @param gapless {boolean} Delete margins between row
 * - ------------------- WEB PROPERTIES -------------------------
 * @param className {string} additionnal CSS Classes
 */
const Rows = React.forwardRef((props: RowsProps, ref: React.LegacyRef<HTMLDivElement>) => {
  const { className, id, gap, ...others } = props
  const { styled } = useTrilogyContext()

  return (
    <div
      id={id}
      ref={ref}
      className={hashClass(
        styled,
        clsx('rows', gap && has(`gap-${gap}`), typeof gap !== 'undefined' && gap === 0 && is('gapless'), className),
      )}
      {...others}
    />
  )
})
export default Rows
