import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { TableProps } from './TableProps'

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
  fullwidth,
  bordered,
  comparative,
  striped,
  compact,
  ...others
}: TableProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    clsx(
      'table',
      fullwidth && is('fullwidth'),
      bordered && is('bordered'),
      comparative && is('comparative'),
      striped && is('striped'),
      compact && is('compact'),
      className,
    ),
  )

  return <table className={classes} {...others} />
}

export default Table
