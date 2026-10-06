import clsx from 'clsx'
import { forwardRef } from 'react'
import { useTrilogyContext } from '@/context/TrilogyContext'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getColorClassName, TrilogyColor } from '@/objects/facets/Color'
import { is } from '@/services/classify'
import { Icon, IconSize } from '@/components/icon'
import { ListItemProps, ListItemRef } from '@/components/list/item/ListItemProps'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * ListItem Component
 * @param children {ReactNode}
 * @param iconName {IconName} Icon name
 * @param status {ListIconStatus} Status success|error
 * @param testId {string} Test Id for Test Integration
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param id {string} Custom id attribute
 */
const ListItem = forwardRef<ListItemRef, ListItemProps>(({ className, id, children, iconName, status, testId }, ref): JSX.Element => {
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
