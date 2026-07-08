import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { has, is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { TableBorderEnum, TableProps, TableRef } from './TableProps'

/**
 * Table Component
 * @param children {ReactNode} Table content (rows, columns)
 * @param border {TableBorderEnum} Border style (ALL|INNER|LINES, default: LINES)
 * @param striped {boolean} Striped rows
 * @param compact {boolean} Compact table
 * @param testId {string} Test Id for Test Integration
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param id {string} Custom id attribute
 * @param fullwidth {boolean} Fullwidth table
 */
const Table = React.forwardRef<TableRef, TableProps>(
  (
    { className, id, fullwidth, border = TableBorderEnum.LINES, striped, compact, testId, ...others },
    ref,
  ): JSX.Element => {
    const { styled } = useTrilogyContext()

    const classes = hashClass(
      styled,
      clsx(
        'table',
        fullwidth && is('fullwidth'),
        border && border !== TableBorderEnum.LINES && has(`border-${border}`),
        striped && is('striped'),
        compact && is('compact'),
        className,
      ),
    )

    return <table ref={ref} id={id} className={classes} data-testid={testId} {...others} />
  },
)

Table.displayName = ComponentName.Table
export default Table
