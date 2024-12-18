import Tab from '@/components/tabs/tab-list/tab/Tab'
import { TabListProps } from '@/components/tabs/tab-list/TabListProps'
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
const TabList = ({ children, className, id, testId, align, ...others }: TabListProps) => {
  const classes = hashClass(clsx('tab-list', align && is(getAlignClassName(align)), className))

  return (
    <div id={id} data-testid={testId} className={classes} {...others}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return false
        return <Tab {...child.props} index={index} />
      })}
    </div>
  )
}

export default TabList
