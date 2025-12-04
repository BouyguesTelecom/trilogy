import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { Align, getAlignClassName } from '@/objects/facets/Alignable'
import { getJustifyClassName, Justify } from '@/objects/facets/Justifiable'
import { has, is } from '@/services'
import clsx from 'clsx'
import React from 'react'
import { AlignProps, Direction, FlexBoxProps, FlexBoxRef, FlexBoxSize, JustifyProps, WrapProps } from './FlexBoxProps'
import { DirectionEnum, DirectionEnumValues } from '@/objects'
import { GapSize } from '@/components/columns'

interface GetResponsiveClassesProp {
  value:
    | Direction
    | DirectionEnum
    | DirectionEnumValues
    | AlignProps
    | Align
    | JustifyProps
    | Justify
    | FlexBoxSize
    | GapSize
    | undefined
  getClassName: (val: string | number) => string
}

interface GetWrapClassesProp {
  value: WrapProps | boolean | undefined
  getClassName: (val: boolean) => string
}

const generateClassNames = ({ value, getClassName }: GetResponsiveClassesProp): string[] => {
  if (!value) return []

  if (typeof value === 'string' || typeof value === 'number') {
    return [getClassName(value)]
  }

  if (typeof value === 'object') {
    const breakpoints = ['mobile', 'tablet', 'desktop', 'widescreen', 'fullhd'] as const
    return breakpoints
      .filter((key) => key in value && (value as Record<typeof key, string | number>)[key] !== undefined)
      .map((key) => `${getClassName((value as Record<typeof key, string | number>)[key])}-${key}`)
  }

  return []
}

const generateWrapClassNames = ({ value, getClassName }: GetWrapClassesProp): string[] => {
  if (!value) return []

  if (typeof value === 'boolean') {
    return value ? [getClassName(true)] : []
  }

  if (typeof value === 'object') {
    const breakpoints = ['mobile', 'tablet', 'desktop', 'widescreen', 'fullhd'] as const
    return breakpoints
      .filter((key) => key in value && (value as Record<typeof key, boolean>)[key] === true)
      .map((key) => `${getClassName(true)}-${key}`)
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
 * @param wrap { boolean | { mobile?: boolean; tablet?: boolean; desktop?: boolean; widescreen?: boolean; fullhd?: boolean } } Wrap content
 * @param scrollable {boolean} scrollable mode (overflow-x: auto)
 * @param fullheight {boolean} Full height (height: 100%)
 */
const FlexBox = React.forwardRef<FlexBoxRef, FlexBoxProps>(
  ({ className, id, gap, direction, align, justify, wrap, scrollable, fullheight, mobile, ...others }, ref) => {
    const { styled } = useTrilogyContext()

    const classes = hashClass(
      styled,
      clsx([
        'flex-box',
        ...generateClassNames({ value: direction, getClassName: (val) => is(`direction-${val}`) }),
        ...generateClassNames({ value: align, getClassName: (val) => is(getAlignClassName(val as string)) }),
        ...generateClassNames({ value: justify, getClassName: (val) => is(getJustifyClassName(val as string)) }),
        ...generateClassNames({ value: gap, getClassName: (val) => has(`gap-${val}`) }),
        ...generateWrapClassNames({ value: wrap, getClassName: (val) => is(`wrap`) }),
        scrollable && is('scrollable'),
        fullheight && is('fullheight'),
        mobile && is('mobile'),
        className,
      ]),
    )

    return <div ref={ref} id={id} className={classes} {...others} />
  },
)

FlexBox.displayName = ComponentName.FlexBox
export default FlexBox
