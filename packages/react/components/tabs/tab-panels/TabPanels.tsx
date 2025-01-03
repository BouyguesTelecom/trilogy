import { ComponentName } from '@/components/enumsComponentsName'
import { TabPanelsProps } from '@/components/tabs/tab-panels/TabPanelsProps'
import { useTrilogyContext } from '@/context'
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
const TabPanels = React.forwardRef(
  ({ children, className, id, testId, ...others }: TabPanelsProps, ref: React.Ref<HTMLDivElement>) => {
    const { styled } = useTrilogyContext()
    const classes = hashClass(styled, clsx('tab-panels', className))

    return (
      <div ref={ref} id={id} data-testid={testId} className={classes} {...others}>
        {Array.isArray(children) &&
          React.Children.map(children, (child, index) => {
            return React.cloneElement(child, {
              index,
              ...child.props,
            })
          })}
      </div>
    )
  },
)

TabPanels.displayName = ComponentName.TabPanels
export default TabPanels
