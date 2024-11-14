import clsx from 'clsx'
import React from 'react'

import { TableHeadProps } from '@/components/table/head/TableHeadProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getBackgroundClassName } from '@/objects/atoms/Background'
import { getColorClassName } from '@/objects/facets/Color'
import { has, is } from '@/services/classify'

/**
 * Table Head Component
 * @param children {ReactNode} children of Table Head
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param color {TrilogyColor} text color
 * @param backgroundColor {TrilogyColor} background color
 */
const TableHead = (
  { className, color, backgroundColor, ...others }: TableHeadProps,
  ref: React.Ref<HTMLTableSectionElement>,
): JSX.Element => {
  const classes = hashClass(
    clsx(
      className,
      backgroundColor && has(getBackgroundClassName(backgroundColor)),
      color && is(getColorClassName(color)),
    ),
  )
  return <thead className={classes} ref={ref} {...others} />
}

export default React.forwardRef(TableHead)
