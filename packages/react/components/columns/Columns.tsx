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
const Columns = ({
                   className,
                   id,
                   multiline,
                   scrollable,
                   mobile,
                   gap,
                   fullBleed,
                   marginless,
                   align,
                   verticalAlign,
                   ...others
                 }: ColumnsProps) => {
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
      marginless && is(`marginless`),
      className,
    ),
  )

  return <div id={id} className={classes} {...others} />
}

export default Columns
