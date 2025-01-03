import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { getAlignClassName, getJustifiedClassName } from '@/objects'
import { has, is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { ColumnsProps } from './ColumnsProps'

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
const Columns = React.forwardRef(
  (
    {
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
    }: ColumnsProps,
    ref: React.Ref<HTMLDivElement>,
  ) => {
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

    return <div ref={ref} id={id} className={classes} {...others} />
  },
)

Columns.displayName = ComponentName.Columns
export default Columns
