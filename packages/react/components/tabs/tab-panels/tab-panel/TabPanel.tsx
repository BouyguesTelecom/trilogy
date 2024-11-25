import React from 'react'
import { TabPanelProps } from './TabPanelProps'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import clsx from 'clsx'

/**
 * Tab Panel Component
 * @param children {ReactChild} React Child Element
 * @param className
 * @param testId
 * @param others
 */
const TabPanel = ({ children, className, testId, ...others }: TabPanelProps) => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('tab-panel', className))

  return (
    <div data-testid={testId} className={classes} {...others}>
      {children}
    </div>
  )
}

export default TabPanel
