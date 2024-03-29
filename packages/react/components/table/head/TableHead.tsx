import React from 'react'
import clsx from 'clsx'
import { TableHeadProps } from './TableHeadProps'
import { hashClass } from '../../../helpers/hashClassesHelpers'
import { useTrilogyContext } from '../../../context/index'
import { has , is } from '../../../services/classify'
import { getBackgroundClassName } from '../../../objects/atoms/Background'
import { getColorClassName } from '../../../objects/facets/Color'
/**
 * Table Head Component
 * @param children {ReactNode} children of Table Head
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param color {TrilogyColor} text color
 * @param backgroundColor {TrilogyColor} background color
 */
const TableHead = ({ className, color, backgroundColor, ...others }: TableHeadProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(
    styled,
    clsx(
      className,
      backgroundColor && has(getBackgroundClassName(backgroundColor)),
      color && is(getColorClassName(color)),
    ),
  )
  return <thead className={classes} {...others} />
}

export default TableHead
