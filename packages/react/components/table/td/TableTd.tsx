import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import * as React from 'react'
import { TableTdProps, TableTdRef } from './TableTdProps'

/**
 * Table TD Component
 * @param children {ReactNode} Table TD children
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param rowSpan {number} Specifies the number of rows a cell should span
 * @param colSpan {number} Defines the number of columns a cell should span
 */
const TableTd = React.forwardRef<TableTdRef, TableTdProps>(
  ({ className, id, rowSpan, colSpan, ...others }, ref): JSX.Element => {
    const classes = hashClass(clsx(className))
    return <td ref={ref} id={id} className={classes} rowSpan={rowSpan} colSpan={colSpan} {...others} />
  },
)

TableTd.displayName = ComponentName.TableTd
export default TableTd
