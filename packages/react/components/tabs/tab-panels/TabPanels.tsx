import { ComponentName } from '@/components/enumsComponentsName'
import TabPanel from '@/components/tabs/tab-panels/tab-panel'
import { TabPanelsProps, TabPanelsRef } from '@/components/tabs/tab-panels/TabPanelsProps'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React from 'react'

/**
 * Tabs Nav Component
 * @param children {ReactChild} React Child Element
 * @param id {string} Custom id attribute
 * @param testId {string} Test Id for Test Integration
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 */
const TabPanels = React.forwardRef<TabPanelsRef, TabPanelsProps>(({ children, className, id, testId, ...others }, ref) => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('tab-panels', className))

  return (
    <div ref={ref} id={id} data-testid={testId} className={classes} {...others}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return false
        return <TabPanel {...child.props} index={index} />
      })}
    </div>
  )
})

TabPanels.displayName = ComponentName.TabPanels
export default TabPanels
