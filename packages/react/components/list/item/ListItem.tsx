import clsx from 'clsx'
import * as React from 'react'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { getColorClassName, TrilogyColor } from '@/objects'
import { is } from '@/services'
import { Icon, IconSize } from '@/components/icon'
import { ListItemProps, ListItemRef } from './ListItemProps'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * ListItem Component
 * @param children {React.ReactNode}
 * @param iconName {IconName} Icon name
 * @param status {ListIconStatus} Status success|error
 * @param testId {string} Test Id for Test Integration
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param id {string} Custom id attribute
 */
const ListItem = React.forwardRef<ListItemRef, ListItemProps>(({ className, id, children, iconName, status, testId }, ref): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = clsx('list-item', className, status && is(getColorClassName(TrilogyColor[status])))

  return (
    <li ref={ref} id={id} className={hashClass(styled, clsx(classes))} data-testid={testId}>
      {iconName && (
        <Icon
          className={status && clsx(is(getColorClassName(TrilogyColor[status])))}
          name={iconName}
          size={IconSize.SMALL}
        />
      )}
      <div className={hashClass(styled, clsx('list-item-content'))}>{children}</div>
    </li>
  )
})

ListItem.displayName = ComponentName.ListItem
export default ListItem
