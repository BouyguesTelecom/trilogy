import clsx from 'clsx'
import React from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import { TableTdProps } from '@/components/table/td/TableTdProps'
import { hashClass } from '@/helpers/hashClassesHelpers'

/**
 * Table TD Component
 * @param children {ReactNode} Table TD children
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param rowSpan {number} Specifies the number of rows a cell should span
 * @param colSpan {number} Defines the number of columns a cell should span
 * @param onClick {ClickEvent} On click event
 */
const TableTd = React.forwardRef(
  ({ className, rowSpan, colSpan, ...others }: TableTdProps, ref: React.Ref<HTMLTableCellElement>): JSX.Element => {
    const classes = hashClass(clsx(className))
    return <td className={classes} rowSpan={rowSpan} colSpan={colSpan} ref={ref} {...others} />
  },
)

TableTd.displayName = ComponentName.TableTd
export default TableTd
