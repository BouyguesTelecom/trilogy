import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { has, is } from '@/services/classify'
import { TabsProps } from './TabsProps'

/**
 * Tabs Component
 * @param children {ReactNode} Children for tabs
 * @param onClick onClick event
 * @param activeIndex {number} default active tab index
 * @param disabled {boolean} Disabled tabs
 * @param clipped {boolean} Remove the separator bar
 * @param inverted {boolean} dark mode
 * @param shadowless {boolean} No shadow
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param centered {boolean} Centered tabs
 * @param rightAlign {boolean} Tabs right align
 * @param className {string} Additionnal CSS Classes
 * @param fullwidth {boolean} Fullwidth tabs
 * @param leftAlign {boolean} Tabs left align
 */
const Tabs = ({
  children,
  className,
  onClick,
  activeIndex,
  disabled,
  rightAlign,
  fullwidth,
  align,
  centered,
  marginless,
  inverted,
  shadowless,
  textAlign,
  testId,
  ...others
}: TabsProps): JSX.Element => {
  const [activateIndex, setActivateIndex] = useState<number>(activeIndex || 0)
  const { styled } = useTrilogyContext()
  const [isIcons, setIsIcons] = React.useState(false)

  const classes = hashClass(
    styled,
    clsx(
      'tabs',
      rightAlign && is('right'),
      fullwidth && is('fullwidth'),
      centered && is('centered'),
      marginless && is('marginless'),
      isIcons && is('icons'),
      className,
    ),
  )

  const isActive = React.useCallback(
    (index: number, childPropsActive: React.ReactNode) => {
      if (typeof childPropsActive !== 'undefined' && !activateIndex) {
        return childPropsActive
      }
      if (index === activateIndex) {
        return true
      }
    },
    [activateIndex],
  )

  const toggleActive = React.useCallback(
    (e: React.MouseEvent, index: number) => {
      if (disabled) {
        return false
      }
      setActivateIndex(index)
      if (onClick) {
        onClick(e)
      }
    },
    [disabled],
  )

  useEffect(() => {
    setActivateIndex(activateIndex)
  }, [activeIndex])

  return (
    <div
      className={hashClass(
        styled,
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
            if (!isIcons && child.props.iconName) setIsIcons(true)
            const active = Boolean(isActive(index, child.props.active)) || false
            const key = index
            const props = {
              active,
              key,
              onClick: (e: React.MouseEvent) => {
                toggleActive(e, index)
                if (child) {
                  if (child.props.onClick) {
                    child.props.onClick(e)
                  }
                }
              },
            }
            return React.cloneElement(child, props)
          }
        })}
      </div>
    </div>
  )
}

export default Tabs
