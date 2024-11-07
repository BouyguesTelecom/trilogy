import * as React from 'react'
import clsx from 'clsx'
import { ColumnsProps } from './ColumnsProps'
import { has, is } from '@/services/classify'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'
import { getAlignClassName, getJustifiedClassName } from '@/objects'

/**
 * Columns Component
 * @param centered {boolean} Center columns
 * @param verticalCentered {boolean} Vertical centered columns
 * @param marginSize {ColumnsSize} Delete margins between columns with Size
 * @param scrollable {boolean} Make colomns scrollable to vertical
 * @param children {React.ReactNode}
 * @param marginless {boolean} delete margin
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param multiline {boolean} Multiline Columns
 * @param className {string} Additionnal CSS Classes
 * @param mobile {boolean} Responsive mode
 */
const Columns = React.forwardRef((props: ColumnsProps, ref: React.LegacyRef<HTMLDivElement>) => {
  const { className, id, multiline, scrollable, mobile, gap, fullBleed, marginSize, align, verticalAlign, ...others } =
    props

  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      'columns',
      multiline && is('multiline'),
      fullBleed && is('fullbleed'),
      scrollable && is('scrollable'),
      gap && has(`gap-${gap}`),
      typeof gap !== 'undefined' && gap === 0 && is('gapless'),
      mobile && is('mobile'),
      align && is(getJustifiedClassName(align)),
      verticalAlign && is(getAlignClassName(verticalAlign)),
      marginSize && is(`${marginSize}`),
      className,
    ),
  )

  return <div id={id} ref={ref} className={classes} {...others} />
})

export default Columns
