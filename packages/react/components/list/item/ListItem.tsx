import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName, IconSize } from '@/components/icon'
import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/index'
import { getColorClassName, TrilogyColor } from '@/objects/index'
import { is } from '@/services/index'
import clsx from 'clsx'
import * as React from 'react'
import { ListItemProps, ListItemRef } from './ListItemProps'

/**
 * ListItem Component
 * @param className {string} Additional CSS Classes
 * @param children {React.ReactNode}
 * @param iconName {IconName} Icon name
 * @param status {ListIconStatus} Status success|error
 */
const ListItem = React.forwardRef<ListItemRef, ListItemProps>(
  ({ className, id, children, iconName, status, testId }, ref): JSX.Element => {
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
  },
)

ListItem.displayName = ComponentName.ListItem
export default ListItem
