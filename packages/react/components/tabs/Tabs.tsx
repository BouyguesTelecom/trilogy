import { useTabs } from '@/components/tabs/hooks/useTabs'
import { TabsProps } from '@/components/tabs/TabsProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import React from 'react'

/**
 * Tabs Component
 * @param children {ReactNode} Children for tabs
 * @param activeIndex {number} default active tab index
 * @param inverted {boolean} Inverted style
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param fullwidth {boolean} Fullwidth tabs
 * @param id
 */
const Tabs = ({ children, className, id, activeIndex, fullwidth, inverted }: TabsProps) => {
  const { ContextProvider, isInverted } = useTabs({ activeIndex, inverted })
  const classes = hashClass(clsx('tabs', fullwidth && is('fullwidth'), isInverted && is('inverted'), className))

  return (
    <ContextProvider>
      <div id={id} className={classes} data-tabs-context=''>
        {children}
      </div>
    </ContextProvider>
  )
}

export default Tabs
