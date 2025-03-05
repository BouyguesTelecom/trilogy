import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getBackgroundClassName } from '@/objects/atoms/Background'
import { getColorClassName } from '@/objects/facets/Color'
import { has, is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { TableHeadProps, TableHeadRef } from './TableHeadProps'

/**
 * Table Head Component
 * @param children {ReactNode} children of Table Head
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param color {TrilogyColor} text color
 * @param backgroundColor {TrilogyColor} background color
 */
const TableHead = React.forwardRef<TableHeadRef, TableHeadProps>(
  ({ className, id, color, backgroundColor, ...others }, ref): JSX.Element => {
    const classes = hashClass(
      clsx(
        className,
        backgroundColor && has(getBackgroundClassName(backgroundColor)),
        color && is(getColorClassName(color)),
      ),
    )
    return <thead ref={ref} id={id} className={classes} {...others} />
  },
)

TableHead.displayName = ComponentName.TableHead
export default TableHead
