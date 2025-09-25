import { ListProps, ListRef } from '@/components/list/ListProps'
import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { has } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'

/**
 * List Component
 * @param className {string} Additional CSS Classes
 * @param children {React.ReactNode}
 * @param divider {boolean} Add divider between items
 * @param ordered {boolean} Display ordered list
 */
const List = React.forwardRef<ListRef, ListProps>(
  ({ className, id, children, testId, divider, ordered, ...others }, ref) => {
    const { styled } = useTrilogyContext()
    const classes = hashClass(styled, clsx('list', divider && has('divider'), className))
    const Tag = ordered ? 'ol' : 'ul'

    return (
      <Tag ref={ref as any} id={id} data-testid={testId} className={classes} {...others}>
        {children}
      </Tag>
    )
  },
)

List.displayName = ComponentName.List
export default List
