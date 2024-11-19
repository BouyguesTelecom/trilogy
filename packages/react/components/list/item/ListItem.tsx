import clsx from 'clsx'
import React from 'react'

import { Divider } from '@/components/divider'
import { Icon, IconName, IconSize } from '@/components/icon'
import { ListItemProps } from '@/components/list/item/ListItemProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { TrilogyColor, getColorClassName } from '@/objects/facets/Color'
import { has, is } from '@/services/classify'

/**
 * ListItem Component
 * @param children {React.ReactNode}
 * @param customIcon {IconName | React.ReactNode } Icon name | children
 * @param status {ListIconStatus} Status success|error
 * @param title {string} List item title
 * @param description {string} List item description
 * @param action {React.ReactNode} children
 * @param divider {boolean} Display divider
 * @param deletable {boolean}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param testId {string} Test Id for Test Integration
 */
const ListItem = (
  { className, children, customIcon, status, title, description, testId, action, divider, deletable }: ListItemProps,
  ref: React.Ref<HTMLLIElement>,
): JSX.Element => {
  const classes = clsx(is(getColorClassName(status ? TrilogyColor[status] : TrilogyColor.BACKGROUND)), className)

  return (
    <li className={hashClass(clsx(classes, action && has('action')))} data-testid={testId} ref={ref}>
      <div className={hashClass(clsx('list-item_content'))}>
        {customIcon && typeof customIcon === 'string' && (
          <div className={hashClass(clsx('list-item_content_puce'))}>
            <Icon className={classes} name={deletable ? 'tri-trash' : (customIcon as IconName)} size={IconSize.SMALL} />
          </div>
        )}

        {customIcon && typeof customIcon !== 'string' && (
          <div className={hashClass(clsx('list-item_content_puce'))}>{customIcon}</div>
        )}

        <div>
          {(title || description) && (
            <>
              {title && <b>{title}</b>}
              {children || (description && <p>{children || description}</p>)}
            </>
          )}
          {!title && !description && <div>{children}</div>}
        </div>
      </div>
      {action && <div className={hashClass(clsx('list-item_action'))}>{action}</div>}
      {divider && <Divider />}
    </li>
  )
}

export default React.forwardRef(ListItem)
