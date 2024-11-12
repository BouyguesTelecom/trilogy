import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getBackgroundClassName } from '@/objects/atoms/Background'
import { getColorClassName } from '@/objects/facets/Color'
import { has, is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { TableBodyProps } from './TableBodyProps'

/**
 * Table Body Component
 * @param children {ReactNode} children of Table Body
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param color {TrilogyColor} text color
 * @param backgroundColor {TrilogyColor} background color
 */
const TableBody = ({ className, color, backgroundColor, ...others }: TableBodyProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(
    clsx(
      className,
      backgroundColor && has(getBackgroundClassName(backgroundColor)),
      color && is(getColorClassName(color)),
    ),
  )
  return <tbody className={classes} {...others} />
}

export default TableBody
