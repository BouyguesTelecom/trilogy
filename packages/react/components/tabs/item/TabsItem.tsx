import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { TabsItemProps } from './TabsItemProps'
import { hashClass } from '../../../helpers/hashClassesHelpers'
import { useTrilogyContext } from '../../../context/index'
import { Icon } from '../../icon'
import { is } from '../../../services/classify'

/**
 * Tabs Item Component
 * @param active {boolean} active tab item
 * @param children {ReactChild} React Child Element
 * @param onClick onClick Event
 * @param to {string} Link
 * @param href {string} <a />
 * @param routerLink Custom Router Link as props
 * @param iconName {IconNameValues | IconName} add icon name
 * @param disabled {boolean} disable tab item
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const TabsItem = ({
  active,
  children,
  className,
  onClick,
  to,
  href,
  routerLink,
  iconName,
  disabled,
  testId,
  ...others
}: TabsItemProps): JSX.Element => {
  const [activeItem, setActiveItem] = useState<boolean>(active || false)
  const { styled } = useTrilogyContext()

  // accessibility
  const a11y = {
    a: {
      'aria-selected': activeItem,
      'data-tab-navigation': '',
    },
  }

  useEffect(() => {
    setActiveItem(active || false)
  }, [active])

  const classes = hashClass(styled, clsx('tab', disabled && is('disabled'), className, { 'is-active': activeItem }))

  if (routerLink && (to || href)) {
    const RouterLink = (routerLink ? routerLink : 'a') as React.ElementType
    return (
      <RouterLink
        data-testid={testId}
        tabIndex={0}
        {...a11y.a}
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
        <div className='tab-icon'>{iconName && <Icon align='ALIGNED_CENTER' size='small' name={iconName} />}</div>
        {children}
      </RouterLink>
    )
  }

  return (
    <button
      className={classes}
      role='tab'
      data-testid={testId}
      {...a11y.a}
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
      <div className='tab-icon'>{iconName && <Icon align='ALIGNED_CENTER' size='small' name={iconName} />}</div>
      {children}
    </button>
  )
}

export default TabsItem
