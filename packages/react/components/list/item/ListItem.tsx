import { Icon, IconName, IconSize } from '@/components/icon'
import { hashClass } from '@/helpers'
import { getColorClassName, TrilogyColor } from '@/objects'
import { is } from '@/services'
import clsx from 'clsx'
import * as React from 'react'
import { ListItemProps } from './ListItemProps'

/**
 * ListItem Component
 * @param className {string} Additionnal CSS Classes
 * @param children {React.ReactNode}
 * @param customIcon {IconName | React.ReactNode } Icon name | children
 * @param status {ListIconStatus} Status success|error
 */
const ListItem = ({ className, id, children, iconName, status, testId }: ListItemProps): JSX.Element => {
  const classes = clsx('list-item', className, status && is(getColorClassName(TrilogyColor[status])))

  return (
    <li id={id} className={hashClass(clsx(classes))} data-testid={testId}>
      {iconName && (
        <Icon
          className={status && clsx(is(getColorClassName(TrilogyColor[status])))}
          name={iconName as IconName}
          size={IconSize.SMALL}
        />
      )}
      <div className={hashClass(clsx('list-item-content'))}>{children}</div>
    </li>
  )
}

export default ListItem
