import * as React from 'react'
import clsx from 'clsx'
import { TableThProps, TableThRef } from './TableThProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { useTrilogyContext } from '@/context/index'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Table TH Component
 * @param children {ReactNode} Children of Table TH
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param rowSpan {number} Specifies the number of rows a cell should span
 * @param colSpan {number} Defines the number of columns a cell should span
 * @param onClick {ClickEvent} On click event
 */
const TableTh = React.forwardRef<TableThRef, TableThProps>(({ className, id, colSpan, rowSpan, ...others }, ref): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(styled, clsx(className))
  return <th ref={ref} id={id} className={classes} colSpan={colSpan} rowSpan={rowSpan} {...others} />
})

TableTh.displayName = ComponentName.TableTh
export default TableTh
