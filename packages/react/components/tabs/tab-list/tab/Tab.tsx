import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon'
import { useTab } from '@/components/tabs/hooks/useTab'
import { TabProps, TabRef } from '@/components/tabs/tab-list/tab/TabProps'
import { Text } from '@/components/text'
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
 * @param className {string} Additional CSS Classes
 * @param testId {string} Test Id for Test Integration
 * @param routerLink Custom Router Link as props
 */
const Tab = React.forwardRef<TabRef, TabProps>(
  (
    { active, className, onClick, routerLink = 'a', iconName, label, disabled, testId, ariaControls, ...others },
    ref,
  ) => {
    const Tag = others.href || others.to ? routerLink : 'button'
    const { index, ...props } = others as any
    const { handleClick, isActive, small } = useTab({ index, disabled, onClick, active })
    const classes = hashClass(clsx('tab', className, { 'is-active': isActive }))

    return (
      <Tag
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
        <div className={hashClass('tab-icon')}>
          {iconName && <Icon size={small ? 'small' : 'medium'} name={iconName} />}
        </div>
        {label && <Text>{label}</Text>}
      </Tag>
    )
  },
)

Tab.displayName = ComponentName.Tab
export default Tab
