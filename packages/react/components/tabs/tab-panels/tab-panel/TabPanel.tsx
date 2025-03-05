import { ComponentName } from '@/components/enumsComponentsName'
import { useTabPanel } from '@/components/tabs/tab-panels/tab-panel/hooks/useTabPanel'
import { TabPanelProps, TabPanelRef } from '@/components/tabs/tab-panels/tab-panel/TabPanelProps'
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
const TabPanel = React.forwardRef<TabPanelRef, TabPanelProps>(({ children, className, testId, ...others }, ref) => {
  const { index, ...props } = others as any
  const { activeIndex } = useTabPanel()
  const classes = hashClass(clsx('tab-panel', index === activeIndex && is('active'), className))

  return (
    <div ref={ref} data-testid={testId} className={classes} {...props}>
      {children}
    </div>
  )
})

TabPanel.displayName = ComponentName.TabPanel
export default TabPanel
