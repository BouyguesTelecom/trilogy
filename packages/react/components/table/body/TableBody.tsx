import clsx from 'clsx'
import React from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import { TableBodyProps } from '@/components/table/body/TableBodyProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getBackgroundClassName } from '@/objects/atoms/Background'
import { getColorClassName } from '@/objects/facets/Color'
import { has, is } from '@/services/classify'

/**
 * Table Body Component
 * @param children {ReactNode} children of Table Body
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param color {TrilogyColor} text color
 * @param backgroundColor {TrilogyColor} background color
 */
const TableBody = React.forwardRef(
  (
    { className, color, backgroundColor, ...others }: TableBodyProps,
    ref: React.Ref<HTMLTableSectionElement>,
  ): JSX.Element => {
    const classes = hashClass(
      clsx(
        className,
        backgroundColor && has(getBackgroundClassName(backgroundColor)),
        color && is(getColorClassName(color)),
      ),
    )
    return <tbody className={classes} ref={ref} {...others} />
  },
)

TableBody.displayName = ComponentName.TableBody
export default TableBody
