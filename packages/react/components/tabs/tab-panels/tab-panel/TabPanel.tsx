import React from 'react'
import { TabPanelProps } from './TabPanelProps'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import clsx from 'clsx'

/**
 * Tab Panel Component
 * @param children {ReactChild} React Child Element
 */
const TabPanel = React.forwardRef((props: TabPanelProps) => {
  const { children, className, testId, ...others } = props
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('tab-panel', className))

  return (
    <div data-testid={testId} className={classes} {...others}>
      {children}
    </div>
  )
})

export default TabPanel
