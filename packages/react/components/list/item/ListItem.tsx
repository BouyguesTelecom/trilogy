import clsx from 'clsx'
import * as React from 'react'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { TrilogyColor, getColorClassName } from '@/objects'
import { has, is } from '@/services'
import { Divider } from '@/components/divider'
import { Icon, IconName, IconSize } from '@/components/icon'
import { ListItemProps } from './ListItemProps'

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
const ListItem = ({
  className,
  children,
  customIcon,
  status,
  title,
  description,
  testId,
  action,
  divider,
  deletable,
}: ListItemProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = clsx(
    is(getColorClassName(status ? TrilogyColor[status] : TrilogyColor.BACKGROUND)),
    className,
  )

  return (
    <li className={hashClass(styled, clsx(classes, action && has('action')))} data-testid={testId}>
      <div className={hashClass(styled, clsx('list-item_content'))}>
        {customIcon && typeof customIcon === 'string' && (
          <div className={hashClass(styled, clsx('list-item_content_puce'))}>
            <Icon
              className={classes}
              name={deletable ? 'tri-trash' : (customIcon as IconName)}
              size={IconSize.SMALL}
            />
          </div>
        )}

        {customIcon && typeof customIcon !== 'string' && (
          <div className={hashClass(styled, clsx('list-item_content_puce'))}>{customIcon}</div>
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
      {action && <div className={hashClass(styled, clsx('list-item_action'))}>{action}</div>}
      {divider && <Divider />}
    </li>
  )
}

export default ListItem
