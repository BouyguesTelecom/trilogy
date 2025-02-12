import { ListProps } from '@/components/list/ListProps'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { has } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'

/**
 * ListItem Component
 * @param className {string} Additionnal CSS Classes
 * @param children {React.ReactNode}
 * @param hasIcon {boolean} If Have icon
 * @param ordered {boolean} Display ordered list
 */

const List = ({ className, id, children, testId, divider, ordered, ...others }: ListProps) => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('list', divider && has('divider'), className))
  const Tag = ordered ? 'ol' : 'ul'

  return (
    <Tag id={id} data-testid={testId} className={classes} {...others}>
      {children}
    </Tag>
  )
}

export default List
