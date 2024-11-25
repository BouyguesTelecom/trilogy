import clsx from 'clsx'
import React from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import { PopoverWebProps } from '@/components/popover/PopoverProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'

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
const Popover = React.forwardRef(
  (
    { className, direction, children, active, arrowPosition, content, testId, ...others }: PopoverWebProps,
    ref: React.Ref<HTMLDivElement>,
  ): JSX.Element => {
    const classes = hashClass(
      clsx(
        'popover',
        direction && is(`popover-${direction}`),
        active && is('popover-active'),
        arrowPosition && is(`arrow-${arrowPosition}`),
        className,
      ),
    )

    return (
      <div data-testid={testId} className={classes} ref={ref} {...others}>
        {children}
        {content && (
          <div data-testid={`${testId}_content`} className={hashClass(clsx('popover-content'))}>
            {content}
          </div>
        )}
      </div>
    )
  },
)

Popover.displayName = ComponentName.Popover
export default Popover
