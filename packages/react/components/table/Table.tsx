import React from 'react'
import clsx from 'clsx'
import { TableProps } from './TableProps'
import { is } from '../../services/classify'
import { hashClass } from '../../helpers'
import { useTrilogyContext } from '../../context'

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
const Table = ({ className, fullwidth, bordered, comparative, striped, ...others }: TableProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      'table',
      fullwidth && is('fullwidth'),
      bordered && is('bordered'),
      comparative && is('comparative'),
      striped && is('striped'),
      className,
    ),
  )

  return <table className={classes} {...others} />
}

export default Table
