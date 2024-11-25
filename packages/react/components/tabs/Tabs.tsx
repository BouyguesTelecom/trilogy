import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'
import { TabsProps } from './TabsProps'

/**
 * Tabs Component
 * @param children {ReactNode} Children for tabs
 * @param onClick onClick event
 * @param activeIndex {number} default active tab index
 * @param disabled {boolean} Disabled tabs
 * @param inverted {boolean} dark mode
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param fullwidth {boolean} Fullwidth tabs
 * @param align { Alignable | AlignableValues} align content
 */
const Tabs = ({ children, className, id, onClick, activeIndex, fullwidth, align, inverted, ...others }: TabsProps) => {
  const [activateIndex, setActivateIndex] = useState<number>(activeIndex || 0)
  const { styled } = useTrilogyContext()

  const classes = hashClass(styled, clsx('tabs', fullwidth && is('fullwidth'), className))

  useEffect(() => {
    setActivateIndex(activateIndex)
  }, [activeIndex])

  return (
    <div id={id} className={classes} data-tabs-context="">
      {children}
    </div>
  )
}

export default Tabs
