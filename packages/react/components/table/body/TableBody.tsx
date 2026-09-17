import * as React from 'react'
import clsx from 'clsx'
import { TableBodyProps, TableBodyRef } from '@/components/table/body/TableBodyProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { has, is } from '@/helpers/classify'
import { useTrilogyContext } from '@/context'
import { getColorClassName } from '@/helpers/color'
import { getBackgroundClassName } from '@/helpers/background'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Table Body Component
 * @param children {ReactNode} children of Table Body
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param color {TrilogyColor} text color
 * @param backgroundColor {TrilogyColor} background color
 */
const TableBody = React.forwardRef<TableBodyRef, TableBodyProps>(
  ({ className, id, color, backgroundColor, testId, ...others }, ref): JSX.Element => {
    const { styled } = useTrilogyContext()
    const classes = hashClass(
      styled,
      clsx(
        className,
        backgroundColor && has(getBackgroundClassName(backgroundColor)),
        color && is(getColorClassName(color)),
      ),
    )
    return <tbody ref={ref} id={id} className={classes} data-testid={testId} {...others} />
  },
)

TableBody.displayName = ComponentName.TableBody
export default TableBody
