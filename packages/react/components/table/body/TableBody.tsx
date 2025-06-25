import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getBackgroundClassName } from '@/objects/atoms/Background'
import { getColorClassName } from '@/objects/facets/Color'
import { has, is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { TableBodyProps, TableBodyRef } from './TableBodyProps'

/**
 * Table Body Component
 * @param children {ReactNode} children of Table Body
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param color {TrilogyColor} text color
 * @param backgroundColor {TrilogyColor} background color
 */
const TableBody = React.forwardRef<TableBodyRef, TableBodyProps>(
  ({ className, id, color, backgroundColor, ...others }, ref): JSX.Element => {
    const classes = hashClass(
      clsx(
        className,
        backgroundColor && has(getBackgroundClassName(backgroundColor)),
        color && is(getColorClassName(color)),
      ),
    )
    return <tbody ref={ref} id={id} className={classes} {...others} />
  },
)

TableBody.displayName = ComponentName.TableBody
export default TableBody
