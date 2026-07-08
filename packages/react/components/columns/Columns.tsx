import { ColumnsProps, ColumnsRef } from '@/components/columns/ColumnsProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getAlignClassName } from '@/objects/facets/Alignable'
import { getJustifiedClassName } from '@/objects/facets/Justifiable'
import { has, is } from '@/services/classify'
import clsx from 'clsx'
import React from 'react'

/**
 * Columns Component
 * @param scrollable {boolean} Make colomns scrollable to vertical
 * @param children {React.ReactNode}
 * @param marginless {boolean} delete margin
 * @param testId {string} Test Id for Test Integration
 * @param fullBleed {boolean} Full Bleed Columns
 * @param fullheight {boolean} Full Height Columns
 * @param gap {GapSize} Gap between columns
 * @param align {JustifyProps} Horizontal alignment of columns
 * @param verticalAlign {AlignProps} Vertical alignment of columns
 * @param id {string} Custom id attribute
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param multiline {boolean} Multiline Columns
 * @param className {string} Additional CSS Classes
 * @param mobile {boolean} Responsive mode
 */
const Columns = React.forwardRef<ColumnsRef, ColumnsProps>(
  (
    { className, id, multiline, scrollable, mobile, gap, fullBleed, marginless, align, verticalAlign, fullheight, testId, ...others },
    ref,
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
        fullheight && is('fullheight'),
        className,
      ),
    )

    return <div ref={ref} id={id} className={classes} data-testid={testId} {...others} />
  },
)
Columns.displayName = ComponentName.Columns
export default Columns
