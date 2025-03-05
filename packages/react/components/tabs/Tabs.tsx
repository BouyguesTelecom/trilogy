import { TabsProps, TabsRef } from '@/components/tabs/TabsProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { useTabs } from './hooks/useTabs'

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
const Tabs = React.forwardRef<TabsRef, TabsProps>(
  ({ children, className, id, activeIndex, fullwidth, inverted }, ref) => {
    const { ContextProvider, isInverted } = useTabs({ activeIndex, inverted })

    const classes = hashClass(clsx('tabs', fullwidth && is('fullwidth'), isInverted && is('inverted'), className))

    return (
      <ContextProvider>
        <div ref={ref} id={id} className={classes} data-tabs-context=''>
          {children}
        </div>
      </ContextProvider>
    )
  },
)

Tabs.displayName = ComponentName.Tabs
export default Tabs
