import React from 'react';
import { TabsItemProps } from './TabsItemProps';
import { Icon, IconColor, IconSize } from '@/components/icon';
import { useTrilogyContext } from '@/context';
import { hashClass } from '@/helpers';
import clsx from 'clsx';
import { is } from '@/services';

/**
 * Tabs Item Component
 * @param active {boolean} active tab item
 * @param id {string} id of the tab
 * @param label {string} label of the tab
 * @param groupName {string} group name of the tab
 * @param inverted {boolean} inverted tab
 * @param children {ReactChild} React Child Element
 * @param onClick onClick Event
 * @param to {string} Link
 * @param href {string} <a />
 * @param routerLink Custom Router Link as props
 * @param iconName {IconNameValues | IconName} add icon name
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const TabsItem = ({ id, label, children, active, iconName, groupName, inverted, className, onClick, ...others }: TabsItemProps) => {
  const { styled } = useTrilogyContext()

  return (
    <>
      <input
        role='tab'
        type="radio"
        id={id}
        name={groupName}
        defaultChecked={active}
        className={hashClass(styled, clsx('tab-input'))}
        onClick={(e) => onClick && onClick(e)}
        {...others}
      />
      <label className={hashClass(styled, inverted ? is('inverted') : '')} htmlFor={id}>
        {iconName && <Icon color={inverted ? IconColor.WHITE : IconColor.MAIN} size={IconSize.SMALL} name={iconName} />}
        <span className={hashClass(styled, inverted ? is('inverted') : '')}>{label}</span>
      </label>
      <div className={hashClass(styled, clsx('tab-panels', inverted && is('inverted')))}>
        {children}
      </div>
    </>
  )
};

export default TabsItem;
