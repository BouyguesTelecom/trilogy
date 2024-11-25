import clsx from 'clsx'
import React from 'react'

import { ColumnsProps } from '@/components/columns/ColumnsProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers'
import { getAlignClassName } from '@/objects/facets/Alignable'
import { has, is } from '@/services/classify'

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
const Columns = React.forwardRef(
  (
    { className, multiline, scrollable, mobile, centered, gap, fullBleed, verticalAlign, ...others }: ColumnsProps,
    ref: React.Ref<HTMLDivElement>,
  ) => {
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
  },
)

Columns.displayName = ComponentName.Columns
export default Columns
