import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon'
import { TabsContext } from '@/components/tabs/context'
import { TabProps, TabRef } from '@/components/tabs/tab-list/tab/TabProps'
import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React from 'react'

/**
 * Tabs Item Component
 * @param active {boolean} active tab item
 * @param children {ReactChild} React Child Element
 * @param onClick onClick Event
 * @param iconName {IconNameValues | IconName} add icon name
 * @param disabled {boolean} disable tab item
 * @param label {string} Tab content
 * @param to {string} Link
 * @param href {string} <a />
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param testId {string} Test Id for Test Integration
 * @param routerLink Custom Router Link as props
 */
const Tab = React.forwardRef<TabRef, TabProps>(
  (
    { active, className, onClick, to, href, routerLink, iconName, label, disabled, testId, ariaControls, ...others },
    ref,
  ) => {
    const { styled } = useTrilogyContext()
    const { index, ...props } = others as any
    const { activeIndex, setActiveIndex, small } = React.useContext(TabsContext)

    const isActive = React.useMemo(() => activeIndex === index, [activeIndex, index])
    const classes = hashClass(styled, clsx('tab', className, { 'is-active': isActive }))

    const handleClick = React.useCallback(
      (e: React.MouseEvent) => {
        if (!disabled) {
          if (!routerLink) setActiveIndex(index)
          if (onClick) onClick(e)
        }
      },
      [disabled, onClick, index, setActiveIndex, routerLink],
    )

    React.useEffect(() => {
      if (active) setActiveIndex(index)
    }, [active, setActiveIndex, index])

    if (routerLink && (to || href)) {
      const RouterLink = (routerLink ? routerLink : 'a') as React.ElementType
      return (
        <RouterLink
          ref={ref}
          data-testid={testId}
          to={to}
          href={href}
          className={classes}
          onClick={handleClick}
          data-index={index}
          {...others}
        >
          <div className='tab-icon'>{iconName && <Icon size={small ? 'small' : 'medium'} name={iconName} />}</div>
          {label && label}
        </RouterLink>
      )
    }

    return (
      <button
        ref={ref}
        aria-controls={ariaControls}
        aria-disabled={disabled}
        aria-selected={isActive}
        data-tab-navigation=''
        disabled={disabled}
        className={classes}
        role='tab'
        data-testid={testId}
        data-index={index}
        onClick={handleClick}
        {...props}
      >
        <div className={hashClass(styled, 'tab-icon')}>
          {iconName && <Icon size={small ? 'small' : 'medium'} name={iconName} />}
        </div>
        {label && <div>{label}</div>}
      </button>
    )
  },
)

Tab.displayName = ComponentName.Tab
export default Tab
