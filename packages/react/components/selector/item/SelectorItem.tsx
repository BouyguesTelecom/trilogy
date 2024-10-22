import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Text, TextMarkup } from '@/components/text'
import { SelectorItemProps } from './SelectorItemProps'

/**
 * Selector Item Component
 * @param active {boolean} active tab item
 * @param children {ReactChild} React Child Element
 * @param onClick onClick Event
 * @param inverted {boolean} change style to inverted item
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * - -------------------------- NATIVE PROPERTIES ----------------------------
 * @param end {boolean} Change last SelectorItem style to SECONDAY color
 * @param accessibilityLabel {string} Accessibility label
 * @param accessibilityActivate {boolean}
 * @param testId {string} data attribute
 * @param selectorIndex {number} index of selector item
 */
const SelectorItem = ({ active, children, className, onClick, ...others }: SelectorItemProps): JSX.Element => {
  const [activeItem, setActiveItem] = useState<boolean>(active || false)

  // TODO: Update react component when web component (CSS) is ready

  // accessibility
  const a11y = {
    li: {
      role: 'presentation',
    },
    a: {
      role: 'selector',
      'aria-selected': activeItem,
    },
  }

  useEffect(() => {
    setActiveItem(active || false)
  }, [active])

  return (
    <li
      className={clsx(className, { 'is-active': activeItem })}
      {...a11y.li}
      {...others}
      onClick={(e: React.MouseEvent) => {
        const target = e.target as HTMLFormElement
        setActiveItem(active || false)
        target.active = active
        if (onClick) {
          onClick(e)
        }
      }}
    >
      {children && typeof children.valueOf() === 'string' && (
        <Text markup={TextMarkup.A} {...a11y.a} {...others}>
          {String(children)}
        </Text>
      )}
    </li>
  )
}

export default SelectorItem
