import clsx from 'clsx'
import React from 'react'

import { BoxItemProps } from '@/components/box/item/BoxItemProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers/hashClassesHelpers'

/**
 * Box Item Component
 * @param children {React.ReactNode} Children
 * @param size {BoxItemSize} SMALL|MEDIUM|LARGE|HUGE
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const BoxItem = React.forwardRef(
  ({ className, children, ...others }: BoxItemProps, ref: React.Ref<HTMLDivElement>): JSX.Element => {
    return (
      <div className={hashClass(clsx('box-item', className))} ref={ref} {...others}>
        {children}
      </div>
    )
  },
)

BoxItem.displayName = ComponentName.BoxItem
export default BoxItem
