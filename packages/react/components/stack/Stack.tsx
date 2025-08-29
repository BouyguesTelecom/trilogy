import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { DirectionEnum } from '@/objects/facets/Direction'
import { has, is } from '@/services'
import clsx from 'clsx'
import React from 'react'
import { StackProps, StackRef } from './StackProps'

const Stack = React.forwardRef<StackRef, StackProps>(
  ({ className, id, gap, direction = DirectionEnum.COLUMN, ...others }, ref) => {
    const { styled } = useTrilogyContext()
    const isNumber = typeof gap === 'number'
    const classes = hashClass(
      styled,
      clsx(
        'stack',
        direction && is(direction),
        !isNumber && gap?.mobile && has(`gap-mobile-${gap.mobile}`),
        !isNumber && gap?.tablet && has(`gap-tablet-${gap.tablet}`),
        !isNumber && gap?.desktop && has(`gap-desktop-${gap.desktop}`),
        isNumber && has(`gap-${gap}`),
        className,
      ),
    )

    return <div ref={ref} id={id} className={classes} {...others} />
  },
)

Stack.displayName = ComponentName.Stack
export default Stack
