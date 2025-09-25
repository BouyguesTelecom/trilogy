import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/index'
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
    const { styled } = useTrilogyContext()

    return (
      <dd ref={ref} className={hashClass(styled, clsx(className))}>
        {children}
      </dd>
    )
  },
)

ListItemDescription.displayName = ComponentName.ListItemDescription
export default ListItemDescription
