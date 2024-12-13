import { TabsContext } from '@/components/tabs/context'
import { TabPanelProps } from '@/components/tabs/tab-panels/tab-panel/TabPanelProps'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import React from 'react'

/**
 * Tab Panel Component
 * @param children {ReactChild} React Child Element
 * @param className
 * @param testId
 * @param others
 */
const TabPanel = ({ children, className, testId, ...others }: TabPanelProps) => {
  const { styled } = useTrilogyContext()
  const { index, ...props } = others as any
  const { activeIndex } = React.useContext(TabsContext)

  const classes = hashClass(styled, clsx('tab-panel', index === activeIndex && is('active'), className))

  return (
    <div data-testid={testId} className={classes} {...props}>
      {children}
    </div>
  )
}

export default TabPanel
