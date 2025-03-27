import { hashClass } from '@/helpers/hashClassesHelpers'
import { has, is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { TableBorderEnum, TableProps, TableRef } from './TableProps'

/**
 * Table Component
 * @param bordered {boolean} bordered table
 * @param children {ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param fullwidth {boolean} table fullwidth
 * @param className {string} Additionnal CSS Classes
 * @param fullwidth {boolean} Fullwidth table
 * @param comparative {boolean} If specific design add this
 * @param striped {boolean} striped lines
 */
const Table = React.forwardRef<TableRef, TableProps>(
  ({ className, id, fullwidth, border = TableBorderEnum.LINES, striped, compact, ...others }, ref): JSX.Element => {
    const classes = hashClass(
      clsx(
        'table',
        fullwidth && is('fullwidth'),
        border && border !== TableBorderEnum.LINES && has(`border-${border}`),
        striped && is('striped'),
        compact && is('compact'),
        className,
      ),
    )

    return <table ref={ref} id={id} className={classes} {...others} />
  },
)

Table.displayName = ComponentName.Table
export default Table
