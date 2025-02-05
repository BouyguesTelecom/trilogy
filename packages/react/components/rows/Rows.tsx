import { hashClass } from '@/helpers'
import { has, is } from '@/services'
import clsx from 'clsx'
import * as React from 'react'
import { RowsProps } from './RowsProps'

/**
 * Rows Component
 * @param children {React.ReactNode} Rows children
 * - ------------------- WEB PROPERTIES -------------------------
 * @param className {string} additionnal CSS Classes
 */
const Rows = ({ className, id, gap, ...others }: RowsProps) => {
  return (
    <div
      id={id}
      className={hashClass(
        clsx('rows', gap && has(`gap-${gap}`), typeof gap !== 'undefined' && gap === 0 && is('gapless'), className),
      )}
      {...others}
    />
  )
}

export default Rows
