import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { PopoverRef, PopoverWebProps } from './PopoverProps'

/**
 * Popover Component
 * @param children {ReactNode} Popover children
 * @param direction {PopoverDirection} Popover direction (DOWN|LEFT|RIGHT)
 * @param content {ReactNode} Content of the popover (hidden popover if null|undefined)
 * @param active {boolean} Is the popover active
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional css classes
 * @param testId {string} Test Id for Test Integration
 * @param arrowPosition {PopoverArrowPosition} Position of the popover arrow
 */
const Popover = React.forwardRef<PopoverRef, PopoverWebProps>(
  ({ className, id, direction, children, active, arrowPosition, trigger, ...others }, ref): JSX.Element => {
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
      <span ref={ref} id={id} className={classes} {...others}>
        <span className={hashClass(styled, 'popover-content')}>{children}</span>
        {trigger && trigger}
      </span>
    )
  },
)

Popover.displayName = ComponentName.Popover
export default Popover
