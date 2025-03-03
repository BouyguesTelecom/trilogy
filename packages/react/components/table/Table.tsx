import * as React from 'react'
import clsx from 'clsx'
import { TableBorderEnum, TableProps, TableRef } from './TableProps'
import { has, is } from '@/services/classify'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { useTrilogyContext } from '@/context/index'
import { ComponentName } from '../enumsComponentsName'

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
const Table = React.forwardRef<TableRef, TableProps>(({
  className,
  id,
  fullwidth,
  border = TableBorderEnum.LINES,
  striped,
  compact,
  ...others
}, ref): JSX.Element => {
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

  return <table ref={ref} id={id} className={classes} {...others} />
})

Table.displayName = ComponentName.Table
export default Table
