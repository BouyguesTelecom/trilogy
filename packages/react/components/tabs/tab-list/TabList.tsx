import React from 'react'
import { TabListProps } from './TabListProps'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import { useTrilogyContext } from '@/context'

/**
 * Tabs Nav Component
 * @param children {ReactChild} React Child Element
 */
const TabList = React.forwardRef((props: TabListProps) => {
  const { children, className, id, testId, ...others } = props
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('tab-list', className))

  return (
    <div id={id} data-testid={testId} className={classes} {...others}>
      {children}
    </div>
  )
})

export default TabList
