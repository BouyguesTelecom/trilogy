import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import * as React from 'react'
import { BoxItemProps } from './BoxItemProps'

/**
 * Box Item Component
 * @param children {React.ReactNode} Children
 * @param size {BoxItemSize} SMALL|MEDIUM|LARGE|HUGE
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const BoxItem = ({ className, id, children, ...others }: BoxItemProps): JSX.Element => {
  return (
    <div id={id} className={hashClass(clsx('box-item', className))} {...others}>
      {children}
    </div>
  )
}

BoxItem.displayName = ComponentName.BoxItem
export default BoxItem
