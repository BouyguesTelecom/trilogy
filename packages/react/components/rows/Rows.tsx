import clsx from 'clsx'
import React from 'react'

import { RowsProps } from '@/components/rows/RowsProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'

/**
 * Rows Component
 * @param children {React.ReactNode} Rows children
 * @param gapless {boolean} Delete margins between row
 * - ------------------- WEB PROPERTIES -------------------------
 * @param className {string} additionnal CSS Classes
 */
const Rows = ({ className, gapless, ...others }: RowsProps, ref: React.Ref<HTMLDivElement>) => {
  return <div ref={ref} className={hashClass(clsx('rows', gapless && is('gapless'), className))} {...others} />
}
export default React.forwardRef(Rows)
