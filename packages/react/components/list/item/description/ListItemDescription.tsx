import clsx from 'clsx'
import React from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import { ListItemDescriptionProps } from '@/components/list/item/description/ListItemDescriptionProps'
import { hashClass } from '@/helpers/hashClassesHelpers'

/**
 * ListItemDescription Component
 * @param children {React.ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const ListItemDescription = React.forwardRef(
  ({ children, className }: ListItemDescriptionProps, ref: React.Ref<HTMLElement>): JSX.Element => {
    return (
      <dd className={hashClass(clsx(className))} ref={ref}>
        {children}
      </dd>
    )
  },
)

ListItemDescription.displayName = ComponentName.ListItemDescription
export default ListItemDescription
