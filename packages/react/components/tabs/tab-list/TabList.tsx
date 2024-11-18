import React from 'react'
import { TabListProps } from './TabListProps'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import { useTrilogyContext } from '@/context'
import { getAlignClassName } from '@/objects'
import { is } from '@/services'

/**
 * Tabs Nav Component
 * @param children {ReactChild} React Child Element
 */
const TabList = React.forwardRef((props: TabListProps) => {
  const { children, className, id, testId, align, ...others } = props
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('tab-list', align && is(getAlignClassName(align)), className))

  return (
    <div id={id} data-testid={testId} className={classes} {...others}>
      {children}
    </div>
  )
})

export default TabList
