import React from 'react'
import { MenuItemWebProps } from './MenuItemProps'
import { is } from '../../../services/classify'
import { Link } from '../../link'
import { Icon } from '../../icon'
import { Badge } from '../../badge'
import clsx from 'clsx'

// accessibility
const a11y = { role: 'menuitem' }

/**
 * Menu Item Component - Menu Item component
 * @param children {ReactNode} Children for Menu Item
 * @param className {string} Additionnal CSS Classes
 * @param to {string} Link
 * @param arrow {boolean} Add arrow for MenuItem
 * @param badge {string|number} Add custom Badge
 * @param icon {IconName} Add custom Icon
 * @param onClick {Function} onClick Event for Menu Item
 * @param active {boolean} If active
 */

const MenuItem = ({
  active,
  children,
  className,
  to,
  arrow,
  badge,
  icon,
  onClick,
  testId,
  ...others
}: MenuItemWebProps): JSX.Element => {
  const classes = clsx('menu-item', active && is('active'), arrow && 'with-arrow', className)
  if (!children) {
    return <div />
  }
  return (
    <li data-testid={testId} {...a11y} onClick={onClick && onClick}>
      {React.Children.toArray(children).map((child, i) => {
        const item: React.ReactNode = (
          <>
            {icon && <Icon name={icon} />}
            {child}
            {badge && <Badge>{badge}</Badge>}
          </>
        )

        return (
          (child && typeof child.valueOf() === 'string' && (
            <Link key={i} className={classes} {...others} to={to} removeLinkClass>
              {item}
            </Link>
          )) || <React.Fragment key={i}>{item}</React.Fragment>
        )
      })}
    </li>
  )
}

export default MenuItem
