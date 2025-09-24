import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getAlignClassName } from '@/objects/facets/Alignable'
import { getJustifyClassName } from '@/objects/facets/Justifiable'
import { has, is } from '@/services/index'
import clsx from 'clsx'
import React from 'react'
import { FlexBoxProps, FlexBoxRef } from './FlexBoxProps'

/**
 * @beta
 * FlexBox component
 * @param children {React.ReactNode} Box child
 * @param className {string} Additional css classes
 * @param id {string} Id attribute
 * @param gap {number | { mobile?: number; tablet?: number; desktop?: number }} Gap between children
 * @param direction { 'row' | 'column' | 'row-reverse' | 'column-reverse' | { mobile?: 'row' | 'column' | 'row-reverse' | 'column-reverse'; tablet?: 'row' | 'column' | 'row-reverse' | 'column-reverse'; desktop?: 'row' | 'column' | 'row-reverse' | 'column-reverse' } } Flex direction
 * @param align { 'start' | 'end' | 'center' | 'stretch' | 'baseline' } Align items
 * @param justify { 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' } Justify content
 * @param scrollable {boolean} scrollable mode (overflow-x: auto)
 * @param fullheight {boolean} Full height (height: 100%)
 */
const FlexBox = React.forwardRef<FlexBoxRef, FlexBoxProps>(
  ({ className, id, gap, direction, align, justify, scrollable, fullheight, ...others }, ref) => {
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
        scrollable && is('scrollable'),
        !isNumber && gap?.mobile && has(`gap-mobile-${gap.mobile}`),
        !isNumber && gap?.tablet && has(`gap-tablet-${gap.tablet}`),
        !isNumber && gap?.desktop && has(`gap-desktop-${gap.desktop}`),
        isNumber && has(`gap-${gap}`),
        fullheight && is('fullheight'),
        className,
      ),
    )

    return <div ref={ref} id={id} className={classes} {...others} />
  },
)

FlexBox.displayName = ComponentName.FlexBox
export default FlexBox
