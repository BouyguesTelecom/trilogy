import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { has, is } from '@/services'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { RowsProps, RowsRef } from './RowsProps'

/**
 * Rows Component
 * @param children {React.ReactNode} Rows children
 * @param gap {GapSize} Gap size between rows
 * @param testId {string} Test Id for Test Integration
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param id {string} Custom id attribute
 */
const Rows = React.forwardRef<RowsRef, RowsProps>(({ className, id, gap, testId, ...others }, ref) => {
  const { styled } = useTrilogyContext()

  return (
    <div
      data-testid={testId}
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
