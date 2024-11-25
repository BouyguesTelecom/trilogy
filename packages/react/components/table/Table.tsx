import clsx from 'clsx'
import React from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import { TableProps } from '@/components/table/TableProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'

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
const Table = React.forwardRef(
  (
    { className, fullwidth, bordered, comparative, striped, compact, ...others }: TableProps,
    ref: React.Ref<HTMLTableElement>,
  ): JSX.Element => {
    const classes = hashClass(
      clsx(
        'table',
        fullwidth && is('fullwidth'),
        bordered && is('bordered'),
        comparative && is('comparative'),
        striped && is('striped'),
        compact && is('compact'),
        className,
      ),
    )

    return <table className={classes} {...others} ref={ref} />
  },
)

Table.displayName = ComponentName.Table
export default Table
