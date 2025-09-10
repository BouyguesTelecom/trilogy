import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { has, is } from '@/services'
import clsx from 'clsx'
import React from 'react'
import { FlexBoxProps, FlexBoxRef } from './FlexBoxProps'
import { getJustifyClassName } from '@/objects/facets/Justifiable'
import { getAlignClassName } from '@/objects/facets/Alignable'

const FlexBox = React.forwardRef<FlexBoxRef, FlexBoxProps>(
  ({ className, id, gap, direction, align, justify, slider, ...others }, ref) => {
    const { styled } = useTrilogyContext()
    const isNumber = typeof gap === 'number'
    const isValueDirection = typeof direction === 'string'
    const classes = hashClass(
      styled,
      clsx(
        'flex-box',
        isValueDirection && direction && is(`direction-${direction}`),
        !isValueDirection && direction?.desktop && is(`direction-${direction.desktop}-desktop`),
        !isValueDirection && direction?.mobile && is(`direction-${direction.mobile}-mobile`),
        !isValueDirection && direction?.tablet && is(`direction-${direction.tablet}-tablet`),
        align && is(getAlignClassName(align)),
        justify && is(getJustifyClassName(justify)),
        slider && is('slider'),
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

FlexBox.displayName = ComponentName.FlexBox
export default FlexBox
