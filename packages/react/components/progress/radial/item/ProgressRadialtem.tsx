import clsx from 'clsx'
import React from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import { ProgressRadialItemProps } from '@/components/progress/radial/item/ProgressRadialItemProps'
import { hashClass } from '@/helpers/hashClassesHelpers'

const ProgressRadialItem = React.forwardRef(
  ({ color, className }: ProgressRadialItemProps, ref: React.Ref<HTMLDivElement>): JSX.Element => {
    const classes = hashClass(clsx(`progress-circle-slice progress-circle-background-${color}`, className))

    return <div className={classes} ref={ref}></div>
  },
)

ProgressRadialItem.displayName = ComponentName.ProgressRadialItem
export default ProgressRadialItem
