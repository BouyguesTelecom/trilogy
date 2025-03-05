import { ComponentName } from '@/components/enumsComponentsName'
import Tab from '@/components/tabs/tab-list/tab/Tab'
import { TabListProps, TabListRef } from '@/components/tabs/tab-list/TabListProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getAlignClassName } from '@/objects/facets/Alignable'
import { is } from '@/services'
import clsx from 'clsx'
import React from 'react'

/**
 * Tabs Nav Component
 * @param children {ReactChild} React Child Element
 * @param className
 * @param id
 * @param testId
 * @param align
 * @param others
 */
const TabList = React.forwardRef<TabListRef, TabListProps>(
  ({ children, className, id, testId, align, ...others }, ref) => {
    const classes = hashClass(clsx('tab-list', align && is(getAlignClassName(align)), className))

    return (
      <div ref={ref} id={id} data-testid={testId} className={classes} {...others}>
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return false
          return <Tab {...child.props} index={index} />
        })}
      </div>
    )
  },
)

TabList.displayName = ComponentName.TabList
export default TabList
