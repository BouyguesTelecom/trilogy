import clsx from 'clsx'
import React from 'react'

import { ChipsListProps } from '@/components/chips/list/ChipsListProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'

/**
 * ChipsList Component - Container for Chips
 * @param children {React.ReactNode}
 * @param multiple {boolean} Selection Multiple With checked icon
 * @param scrollable {boolean} If multiple Chips make scrollable List
 */
const ChipsList = React.forwardRef(
  ({ children, multiple, scrollable, ...others }: ChipsListProps, ref: React.Ref<HTMLDivElement>) => {
    const classes = hashClass(clsx('chips-list', multiple && is('multiple'), scrollable && is('scrollable')))

    return (
      <div ref={ref} role='group' className={classes} {...others}>
        {children}
      </div>
    )
  },
)

ChipsList.displayName = ComponentName.ChipsList
export default ChipsList
