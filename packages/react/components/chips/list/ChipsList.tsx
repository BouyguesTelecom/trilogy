import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { ChipsListProps, ChipsListRef } from './ChipsListProps'

/**
 * ChipsList Component - Container for Chips
 * @param className
 * @param id
 * @param children {React.ReactNode}
 * @param multiple {boolean} Selection Multiple With checked icon
 * @param scrollable {boolean} If multiple Chips make scrollable List
 * @param others
 */
const ChipsList = React.forwardRef<ChipsListRef, ChipsListProps>(
  ({ className, id, children, multiple, scrollable, accessibilityLabelledBy, ...others }, ref) => {
    const classes = hashClass(clsx('chips-list', multiple && is('multiple'), scrollable && is('scrollable'), className))

    return (
      <div ref={ref} id={id} role='group' aria-labelledby={accessibilityLabelledBy} className={classes} {...others}>
        {children}
      </div>
    )
  },
)

ChipsList.displayName = ComponentName.ChipsList
export default ChipsList
