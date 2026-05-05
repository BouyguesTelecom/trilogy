import { ListProps, ListRef } from '@/components/list/ListProps'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { has } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'

/**
 * List Component
 * @param children {React.ReactNode} List items (ListItem components)
 * @param divider {boolean} Add a divider between list items
 * @param ordered {boolean} Display as an ordered list (ol) instead of unordered (ul)
 * @param testId {string} Test Id for Test Integration
 * @param accessibilityLabel {string} Accessibility label
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param id {string} Custom id attribute
 */
const List = React.forwardRef<ListRef, ListProps>(({ className, id, children, testId, divider, ordered, ...others }, ref) => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('list', divider && has('divider'), className))
  const Tag = ordered ? 'ol' : 'ul'

  return (
    <Tag ref={ref as any} id={id} data-testid={testId} className={classes} {...others}>
      {children}
    </Tag>
  )
})

List.displayName = ComponentName.List
export default List
