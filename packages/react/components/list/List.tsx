import clsx from 'clsx'
import React from 'react'

import { ListProps } from '@/components/list/ListProps'
import { hashClass } from '@/helpers/hashClassesHelpers'

/**
 * List Component
 * @param children {React.ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param hasIcon {boolean} If Have icon
 * @param testId {string} Test Id for Test Integration
 */
const List = ({ className, hasIcon, children, testId, ...others }: ListProps, ref: React.Ref<HTMLUListElement>) => {
  const classes = hashClass(clsx(hasIcon ? 'icon-list' : 'list', className))
  return (
    <ul ref={ref} data-testid={testId} className={classes} {...others}>
      {children}
    </ul>
  )
}

export default React.forwardRef(List)
