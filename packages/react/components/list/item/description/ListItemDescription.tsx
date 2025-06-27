import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import * as React from 'react'
import { ListItemDescriptionProps, ListItemDescriptionRef } from './ListItemDescriptionProps'

/**
 * ListItemDescription Component
 * @param children {React.ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 */
const ListItemDescription = React.forwardRef<ListItemDescriptionRef, ListItemDescriptionProps>(
  ({ children, className }, ref): JSX.Element => {
    return (
      <dd ref={ref} className={hashClass(clsx(className))}>
        {children}
      </dd>
    )
  },
)

ListItemDescription.displayName = ComponentName.ListItemDescription
export default ListItemDescription
