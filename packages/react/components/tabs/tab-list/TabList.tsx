import { ComponentName } from '@/components/enumsComponentsName'
import Tab from '@/components/tabs/tab-list/tab/Tab'
import { TabListProps } from '@/components/tabs/tab-list/TabListProps'
import { useTrilogyContext } from '@/context'
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
const TabList = (
  { children, className, id, testId, align, ...others }: TabListProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('tab-list', align && is(getAlignClassName(align)), className))

  return (
    <div ref={ref} id={id} data-testid={testId} className={classes} {...others}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return false
        return <Tab {...child.props} index={index} />
      })}
    </div>
  )
}

TabList.displayName = ComponentName.TabList
export default TabList
