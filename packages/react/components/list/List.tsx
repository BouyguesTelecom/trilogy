import * as React from 'react'
import clsx from 'clsx'
import { ListProps } from './ListProps'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'
import { has } from '@/services'

/**
 * ListItem Component
 * @param className {string} Additionnal CSS Classes
 * @param children {React.ReactNode}
 * @param hasIcon {boolean} If Have icon
 * @param onDelete {() => void} OnDelete Event
 */

const List = React.forwardRef((props: ListProps, ref: React.LegacyRef<HTMLUListElement>) => {
  const { className, children, testId, divider, ...others } = props
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('list', divider && has('divider'), className))

  return (
    <ul ref={ref} data-testid={testId} className={classes} {...others}>
      {children}
    </ul>
  )
})

export default List
