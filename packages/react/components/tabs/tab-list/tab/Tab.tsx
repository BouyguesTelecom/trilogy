import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { TabProps } from './TabProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { useTrilogyContext } from '@/context/index'
import { Icon } from '@/components/icon'

/**
 * Tabs Item Component
 * @param active {boolean} active tab item
 * @param children {ReactChild} React Child Element
 * @param onClick onClick Event
 * @param iconName {IconNameValues | IconName} add icon name
 * @param disabled {boolean} disable tab item
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param testId {string} Test Id for Test Integration
 * @param to {string} Link
 * @param href {string} <a />
 * @param routerLink Custom Router Link as props
 */
const Tab = ({
               active,
               className,
               onClick,
               to,
               href,
               routerLink,
               iconName,
               label,
               disabled,
               testId,
               ariaControls,
               ...others
             }: TabProps) => {

  const [activeItem, setActiveItem] = useState<boolean>(active || false)
  const { styled } = useTrilogyContext()

  useEffect(() => {
    setActiveItem(active || false)
  }, [active])

  const classes = hashClass(styled, clsx('tab', className, { 'is-active': activeItem }))

  if (routerLink && (to || href)) {
    const RouterLink = (routerLink ? routerLink : 'a') as React.ElementType
    return (
      <RouterLink
        data-testid={testId}
        to={to}
        href={href}
        className={classes}
        {...others}
        onClick={(e: React.MouseEvent) => {
          if (!disabled) {
            const target = e.target as HTMLFormElement
            setActiveItem(active || false)
            target.active = active
            if (onClick) {
              onClick(e)
            }
          }
        }}
      >
        <div className="tab-icon">{iconName && <Icon align="ALIGNED_CENTER" size="small" name={iconName} />}</div>
        {label && label}
      </RouterLink>
    )
  }

  return (
    <button
      aria-controls={ariaControls}
      aria-disabled={disabled}
      aria-selected={activeItem}
      data-tab-navigation=""
      disabled={disabled}
      className={classes}
      role="tab"
      data-testid={testId}
      {...others}
      onClick={(e: React.MouseEvent) => {
        if (!disabled) {
          const target = e.target as HTMLFormElement
          setActiveItem(active || false)
          target.active = active
          if (onClick) {
            onClick(e)
          }
        }
      }}
    >
      <div className="tab-icon">{iconName && <Icon align="ALIGNED_CENTER" size="small" name={iconName} />}</div>
      {label && label}
    </button>
  )
}

export default Tab
