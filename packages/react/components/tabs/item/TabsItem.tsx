import clsx from 'clsx'
import React from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon'
import { TabsItemProps } from '@/components/tabs/item/TabsItemProps'
import { useTabsItem } from '@/components/tabs/item/hook/useTabsItem'
import { hashClass } from '@/helpers/hashClassesHelpers'

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
const TabsItem = React.forwardRef(
  (
    {
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
    }: TabsItemProps,
    ref: React.Ref<HTMLElement | HTMLButtonElement>,
  ) => {
    const { activeItem, handleClick } = useTabsItem({ disabled, active, onClick })
    const classes = hashClass(clsx('tab', className, { 'is-active': activeItem }))

    // accessibility
    const a11y = {
      a: {
        'aria-selected': activeItem,
        'data-tab-navigation': '',
      },
    }

    if (routerLink && (to || href)) {
      const RouterLink = (routerLink ? routerLink : 'a') as React.ElementType
      return (
        <RouterLink
          ref={ref}
          data-testid={testId}
          tabIndex={0}
          to={to}
          href={href}
          className={classes}
          onClick={handleClick}
          {...a11y.a}
          {...others}
        >
          <div className='tab-icon'>{iconName && <Icon align='ALIGNED_CENTER' size='small' name={iconName} />}</div>
          {children}
        </RouterLink>
      )
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        aria-disabled={disabled}
        disabled={disabled}
        className={classes}
        role='tab'
        data-testid={testId}
        {...a11y.a}
        {...others}
        onClick={handleClick}
      >
        <div className='tab-icon'>{iconName && <Icon align='ALIGNED_CENTER' size='small' name={iconName} />}</div>
        {children}
      </button>
    )
  },
)

TabsItem.displayName = ComponentName.TabsItem
export default TabsItem
