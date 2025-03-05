import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getColorClassName } from '@/objects/facets/Color'
import { is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { TableTrProps, TableTrRef } from './TableTrProps'

/**
 * Table TR Component
 * @param children {ReactNode}
 * @param expandable {boolean} Lines can display additional information
 * @param expanded {boolean} An unfolded line will also receive class
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param expansion {boolean} Is expansion
 * @param onClick {ClickEvent} On click event
 * @param color {TrilogyColor} Higlight color
 * @param ref {React.RefObject<HTMLTableRowElement>} Ref of the row
 */
const TableTr = React.forwardRef<TableTrRef, TableTrProps>(
  ({ className, id, expandable, expanded, expansion, color, ...others }, ref): JSX.Element => {
    const { styled } = useTrilogyContext()

    const classes = hashClass(
      clsx(
        className,
        expandable && is('expandable'),
        expanded && is('expanded'),
        expansion && is('expansion'),
        color && getColorClassName(color),
      ),
    )

    return <tr ref={ref} id={id} className={classes} {...others} />
  },
)

TableTr.displayName = ComponentName.TableTr
export default TableTr
