import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { getAlignClassName } from '@/objects'
import { has, is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { ColumnsProps } from './ColumnsProps'

/**
 * Columns Component
 * @param centered {boolean} Center columns
 * @param verticalCentered {boolean} Vertical centered columns
 * @param scrollable {boolean} Make colomns scrollable to vertical
 * @param children {React.ReactNode}
 * @param marginless {boolean} delete margin
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param multiline {boolean} Multiline Columns
 * @param className {string} Additionnal CSS Classes
 * @param mobile {boolean} Responsive mode
 */
const Columns = React.forwardRef((props: ColumnsProps, ref: React.LegacyRef<HTMLDivElement>) => {
  const { className, multiline, scrollable, mobile, centered, gap, fullBleed, verticalAlign, ...others } = props

  const { styled } = useTrilogyContext()

  const classes = hashClass(
    clsx(
      'columns',
      multiline && is('multiline'),
      fullBleed && is('fullbleed'),
      scrollable && is('scrollable'),
      gap && has(`gap-${gap}`),
      typeof gap !== 'undefined' && gap === 0 && is('gapless'),
      mobile && is('mobile'),
      centered && is('centered'),
      verticalAlign && is(getAlignClassName(verticalAlign)),
      className,
    ),
  )

  return <div ref={ref} className={classes} {...others} />
})

export default Columns
