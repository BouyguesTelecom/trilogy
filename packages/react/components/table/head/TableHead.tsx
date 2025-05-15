import * as React from 'react'
import clsx from 'clsx'
import { TableHeadProps, TableHeadRef } from './TableHeadProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { useTrilogyContext } from '@/context/index'
import { has, is } from '@/services/classify'
import { getBackgroundClassName } from '@/objects/atoms/Background'
import { getColorClassName } from '@/objects/facets/Color'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Table Head Component
 * @param children {ReactNode} children of Table Head
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param color {TrilogyColor} text color
 * @param backgroundColor {TrilogyColor} background color
 */
const TableHead = React.forwardRef<TableHeadRef, TableHeadProps>(({ className, id, color, backgroundColor, ...others }, ref): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(
    styled,
    clsx(
      className,
      backgroundColor && has(getBackgroundClassName(backgroundColor)),
      color && is(getColorClassName(color)),
    ),
  )
  return <thead ref={ref} id={id} className={classes} {...others} />
})

TableHead.displayName = ComponentName.TableHead
export default TableHead
