import * as React from 'react'
import clsx from 'clsx'
import { TableBorderEnum, TableProps } from './TableProps'
import { has, is } from '@/services/classify'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { useTrilogyContext } from '@/context/index'

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
const Table = ({
  className,
  id,
  fullwidth,
  border = TableBorderEnum.LINES,
  striped,
  compact,
  ...others
}: TableProps): JSX.Element => {
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

  return <table id={id} className={classes} {...others} />
}

export default Table
