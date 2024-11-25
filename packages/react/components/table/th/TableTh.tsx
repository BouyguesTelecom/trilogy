import clsx from 'clsx'
import React from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import { TableThProps } from '@/components/table/th/TableThProps'
import { hashClass } from '@/helpers/hashClassesHelpers'

/**
 * Table TH Component
 * @param children {ReactNode} Children of Table TH
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param rowSpan {number} Specifies the number of rows a cell should span
 * @param colSpan {number} Defines the number of columns a cell should span
 * @param onClick {ClickEvent} On click event
 */
const TableTh = React.forwardRef(
  ({ className, colSpan, rowSpan, ...others }: TableThProps, ref: React.Ref<HTMLTableCellElement>): JSX.Element => {
    const classes = hashClass(clsx(className))
    return <th className={classes} colSpan={colSpan} rowSpan={rowSpan} ref={ref} {...others} />
  },
)

TableTh.displayName = ComponentName.TableTh
export default TableTh
