import * as React from 'react'
import { is } from '@/services/classify'
import { PopoverWebProps } from './PopoverProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import { useTrilogyContext } from '@/context/index'

/**
 * Popover Component
 * @param children {ReactNode} Popover children
 * @param direction {PopoverDirection} Popover direction (DOWN|LEFT|RIGHT)
 * @param content {ReactNode} Content of the popover (hidden popover if null|undefined)
 * @param active {boolean} Is the popover active
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes
 * @param testId {string} Test Id for Test Integration
 * @param arrowPosition {PopoverArrowPosition} Position of the popover arrow
 */
const Popover = ({
                   className,
                   id,
                   direction,
                   children,
                   active,
                   arrowPosition,
                   trigger,
                   ...others
                 }: PopoverWebProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      'popover',
      direction && is(`popover-${direction}`),
      active && is('popover-active'),
      arrowPosition && is(`arrow-${arrowPosition}`),
      className,
    ),
  )

  return (
    <div id={id} className={classes} {...others}>
      <div className={hashClass(styled, 'popover-content')}>{children}</div>
      {trigger && trigger}
    </div>
  )
}

export default Popover
