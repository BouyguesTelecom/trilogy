import * as React from 'react'
import clsx from 'clsx'
import { TableTdProps, TableTdRef } from './TableTdProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { useTrilogyContext } from '@/context/index'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Table TD Component
 * @param children {ReactNode} Table TD children
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param rowSpan {number} Specifies the number of rows a cell should span
 * @param colSpan {number} Defines the number of columns a cell should span
 */
const TableTd = React.forwardRef<TableTdRef, TableTdProps>(({ className, id, rowSpan, colSpan, ...others }, ref): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(styled, clsx(className))
  return <td ref={ref} id={id} className={classes} rowSpan={rowSpan} colSpan={colSpan} {...others} />
})

TableTd.displayName = ComponentName.TableTd
export default TableTd
