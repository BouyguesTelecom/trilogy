import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import * as React from 'react'
import { BoxItemProps, BoxItemRef } from './BoxItemProps'

/**
 * Box Item Component
 * @param children {React.ReactNode} Children
 * @param size {BoxItemSize} SMALL|MEDIUM|LARGE|HUGE
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const BoxItem = React.forwardRef<BoxItemRef, BoxItemProps>(
  ({ className, id, children, ...others }, ref): JSX.Element => {
    const { styled } = useTrilogyContext()

    return (
      <div ref={ref} id={id} className={hashClass(styled, clsx('box-item', className))} {...others}>
        {children}
      </div>
    )
  },
)

BoxItem.displayName = ComponentName.BoxItem
export default BoxItem
