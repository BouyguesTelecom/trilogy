import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getAlignClassName } from '@/objects/facets/Alignable'
import { getJustifyClassName } from '@/objects/facets/Justifiable'
import { has, is } from '@/services'
import clsx from 'clsx'
import React from 'react'
import { FlexBoxProps, FlexBoxRef } from './FlexBoxProps'

const getResponsiveClasses = (
  value:
    | string
    | number
    | { mobile?: string | number; tablet?: string | number; desktop?: string | number }
    | undefined,
  getClassName: (val: string | number) => string,
) => {
  if (!value) return []

  if (typeof value === 'string' || typeof value === 'number') {
    return getClassName(value)
  }

  if (typeof value === 'object') {
    const responsiveValue = value
    return [
      responsiveValue.desktop && `${getClassName(responsiveValue.desktop)}-desktop`,
      responsiveValue.mobile && `${getClassName(responsiveValue.mobile)}-mobile`,
      responsiveValue.tablet && `${getClassName(responsiveValue.tablet)}-tablet`,
    ].filter(Boolean)
  }

  return []
}

/**
 * @beta
 * FlexBox component
 * @param children {React.ReactNode} Box child
 * @param className {string} Additional css classes
 * @param id {string} Id attribute
 * @param gap {number | { mobile?: number; tablet?: number; desktop?: number }} Gap between children
 * @param direction { 'row' | 'column' | 'row-reverse' | 'column-reverse' | { mobile?: 'row' | 'column' | 'row-reverse' | 'column-reverse'; tablet?: 'row' | 'column' | 'row-reverse' | 'column-reverse'; desktop?: 'row' | 'column' | 'row-reverse' | 'column-reverse' } } Flex direction
 * @param align { 'start' | 'end' | 'center' | 'stretch' | 'baseline' | { mobile?: 'start' | 'end' | 'center' | 'stretch' | 'baseline'; tablet?: 'start' | 'end' | 'center' | 'stretch' | 'baseline'; desktop?: 'start' | 'end' | 'center' | 'stretch' | 'baseline' } } Align items
 * @param justify { 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | { mobile?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'; tablet?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'; desktop?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' } } Justify content
 * @param scrollable {boolean} scrollable mode (overflow-x: auto)
 * @param fullheight {boolean} Full height (height: 100%)
 */
const FlexBox = React.forwardRef<FlexBoxRef, FlexBoxProps>(
  ({ className, id, gap, direction, align, justify, scrollable, fullheight, ...others }, ref) => {
    const { styled } = useTrilogyContext()

    const classes = hashClass(
      styled,
      clsx(
        'flex-box',
        ...getResponsiveClasses(direction, (val) => is(`direction-${val}`)),
        ...getResponsiveClasses(align, (val) => is(getAlignClassName(val as string))),
        ...getResponsiveClasses(justify, (val) => is(getJustifyClassName(val as string))),
        ...getResponsiveClasses(gap, (val) => has(`gap-${val}`)),
        scrollable && is('scrollable'),
        fullheight && is('fullheight'),
        className,
      ),
    )

    return <div ref={ref} id={id} className={classes} {...others} />
  },
)

FlexBox.displayName = ComponentName.FlexBox
export default FlexBox
