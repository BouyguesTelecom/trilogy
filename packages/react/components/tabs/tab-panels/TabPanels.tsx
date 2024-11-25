import React from 'react'
import { TabPanelsProps } from './TabPanelsProps'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import { useTrilogyContext } from '@/context'

/**
 * Tabs Nav Component
 * @param children {ReactChild} React Child Element
 * @param className
 * @param id
 * @param testId
 * @param others
 */
const TabPanels = ({ children, className, id, testId, ...others }: TabPanelsProps) => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('tab-panels', className))

  return (
    <div id={id} data-testid={testId} className={classes} {...others}>
      {children}
    </div>
  )
}

export default TabPanels
