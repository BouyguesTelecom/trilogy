import { hashClass } from '@/helpers'
import { has } from '@/services'
import clsx from 'clsx'
import * as React from 'react'
import { ListProps } from './ListProps'

/**
 * ListItem Component
 * @param className {string} Additionnal CSS Classes
 * @param children {React.ReactNode}
 * @param hasIcon {boolean} If Have icon
 */

const List = ({ className, id, children, testId, divider, ...others }: ListProps) => {
  const classes = hashClass(clsx('list', divider && has('divider'), className))

  return (
    <ul id={id} data-testid={testId} className={classes} {...others}>
      {children}
    </ul>
  )
}

export default List
