import TabPanel from '@/components/tabs/tab-panels/tab-panel'
import { TabPanelsProps } from '@/components/tabs/tab-panels/TabPanelsProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React from 'react'

/**
 * Tabs Nav Component
 * @param children {ReactChild} React Child Element
 * @param className
 * @param id
 * @param testId
 * @param others
 */
const TabPanels = ({ children, className, id, testId, ...others }: TabPanelsProps) => {
  const classes = hashClass(clsx('tab-panels', className))

  return (
    <div id={id} data-testid={testId} className={classes} {...others}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return false
        return <TabPanel {...child.props} index={index} />
      })}
    </div>
  )
}

export default TabPanels
