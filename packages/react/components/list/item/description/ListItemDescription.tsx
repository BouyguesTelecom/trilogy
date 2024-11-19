import clsx from 'clsx'
import React from 'react'

import { ListItemDescriptionProps } from '@/components/list/item/description/ListItemDescriptionProps'
import { hashClass } from '@/helpers/hashClassesHelpers'

/**
 * ListItemDescription Component
 * @param children {React.ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const ListItemDescription = (
  { children, className }: ListItemDescriptionProps,
  ref: React.Ref<HTMLElement>,
): JSX.Element => {
  return (
    <dd className={hashClass(clsx(className))} ref={ref}>
      {children}
    </dd>
  )
}

export default React.forwardRef(ListItemDescription)
