import React from 'react'
import { TabListProps } from './TabListProps'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import { useTrilogyContext } from '@/context'
import { getAlignClassName } from '@/objects'
import { is } from '@/services'

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
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('tab-list', align && is(getAlignClassName(align)), className))

  return (
    <div id={id} data-testid={testId} className={classes} {...others}>
      {children}
    </div>
  )
}

export default TabList
