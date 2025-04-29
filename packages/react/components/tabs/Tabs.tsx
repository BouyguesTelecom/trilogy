import { TabsProps, TabsRef } from '@/components/tabs/TabsProps'
import { TabsContext } from '@/components/tabs/context'
import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import React from 'react'
import { ComponentName } from '../enumsComponentsName'

/**
 * Tabs Component
 * @param children {ReactNode} Children for tabs
 * @param activeIndex {number} default active tab index
 * @param inverted {boolean} Inverted style
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param fullwidth {boolean} Fullwidth tabs
 * @param small {boolean} small tabs
 * @param id
 */
const Tabs = React.forwardRef<TabsRef, TabsProps>(
  ({ children, className, id, activeIndex, fullwidth, inverted, small }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState<number>(activeIndex || 0)
    const [isInverted, setIsInverted] = React.useState<boolean>(inverted || false)

    const { styled } = useTrilogyContext()
    const classes = hashClass(
      styled,
      clsx('tabs', fullwidth && is('fullwidth'), inverted && is('inverted'), small && is('small'), className),
    )

    React.useEffect(() => {
      activeIndex !== undefined && setCurrentIndex(activeIndex)
    }, [activeIndex])

    return (
      <TabsContext.Provider
        value={{
          small,
          activeIndex: currentIndex,
          inverted: isInverted,
          setInverted: setIsInverted,
          setActiveIndex: setCurrentIndex,
        }}
      >
        <div ref={ref} id={id} className={classes} data-tabs-context=''>
          {children}
        </div>
      </TabsContext.Provider>
    )
  },
)

Tabs.displayName = ComponentName.Tabs
export default Tabs
