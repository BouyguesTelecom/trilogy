import clsx from 'clsx'
import React from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import { useTabs } from '@/components/tabs/hook/useTabs'
import { TabsProps } from '@/components/tabs/TabsProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { has, is } from '@/services/classify'

/**
 * Tabs Component
 * @param children {ReactNode} Children for tabs
 * @param onClick onClick event
 * @param activeIndex {number} default active tab index
 * @param disabled {boolean} Disabled tabs
 * @param inverted {boolean} dark mode
 * @param shadowless {boolean} No shadow
 * @param centered {boolean} Centered tabs
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param fullwidth {boolean} Fullwidth tabs
 * @param leftAlign {boolean} Tabs left align
 * @param align { Alignable | AlignableValues} align content
 * @param marginless {boolean} delete margin
 * @param textAlign {TypographyAlign | TypographyAlignValues}
 * @param testId {string} Test Id for Test Integration
 */
const Tabs = React.forwardRef(
  (
    {
      children,
      className,
      onClick,
      activeIndex,
      disabled,
      fullwidth,
      align,
      centered,
      marginless,
      inverted,
      shadowless,
      textAlign,
      testId,
      ...others
    }: TabsProps,
    ref: React.LegacyRef<HTMLDivElement>,
  ) => {
    const { isActive, handleClick } = useTabs({ currentIndex: activeIndex, onClick, disabled })

    const classes = hashClass(
      clsx('tabs', fullwidth && is('fullwidth'), centered && is('centered'), marginless && is('marginless'), className),
    )

    return (
      <div
        ref={ref}
        className={hashClass(
          clsx(
            'tab-context',
            inverted && is('inverted'),
            align && has(`text-${align}`),
            shadowless && is('shadowless'),
            textAlign && textAlign,
          ),
        )}
        data-tabs-context=''
        data-testid={testId}
      >
        <div className={classes} role='tablist' {...others}>
          {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
              const active = Boolean(isActive(index, child.props.active)) || false
              const key = index
              const props = {
                active,
                key,
                onClick: (e: React.MouseEvent) => handleClick && handleClick(e, index, child),
              }
              return React.cloneElement(child, props)
            }
          })}
        </div>
      </div>
    )
  },
)

Tabs.displayName = ComponentName.Tabs
export default Tabs
