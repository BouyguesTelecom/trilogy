import clsx from 'clsx'
import React from 'react'

import { ColumnsItemProps } from '@/components/columns/item/ColumnsItemProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'

/**
 * Columns Item Component - Columns Child
 * @param size {ColumnsSize} Size 1-12
 * @param verticalCentered {boolean} Vertical center Column item
 * @param centered {boolean} center Column item
 * @param children {React.ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param narrow {boolean} Narrow column item
 * @param className {string} Additionnal CSS Classes
 * @param mobileSize {ColumnsSize} Apply => is-size-mobile
 * @param tabletSize {ColumnsSize} Apply => is-size-tablet
 * @param touchSize {ColumnsSize} Apply => is-size-touch
 * @param desktopSize {ColumnsSize} Apply => is-size-desktop
 * @param widescreenSize {ColumnsSize} Apply => is-size-widescreen
 * @param fullhdSize {ColumnsSize} Apply => is-size-fullhd
 * @param offset {ColumnSize} Apply => is-offset
 * @param mobileOffset {ColumnsSize} Apply => is-offset-mobile
 * @param tabletOffset {ColumnsSize} Apply => is-offset-tablet
 * @param touchOffset {ColumnsSize} Apply => is-offset-touch
 * @param desktopOffset {ColumnsSize} Apply => is-offset-desktop
 * @param widescreenOffset {ColumnsSize} Apply => is-offset-widescreen
 * @param fullhdOffset {ColumnsSize} Apply => is-offset-fullhd
 * @param verticalAlign { Alignable | AlignableValues} vertical align content
 */
const ColumnsItem = (
  {
    className,
    size,
    mobileSize,
    tabletSize,
    touchSize,
    desktopSize,
    widescreenSize,
    fullhdSize,
    offset,
    mobileOffset,
    tabletOffset,
    touchOffset,
    desktopOffset,
    widescreenOffset,
    fullhdOffset,
    narrow,
    verticalCentered,
    ...others
  }: ColumnsItemProps,
  ref: React.LegacyRef<HTMLDivElement>,
) => {
  const classes = hashClass(
    clsx(
      'column',
      size && is(`${size}`),
      mobileSize && is(`${mobileSize}-mobile`),
      tabletSize && is(`${tabletSize}-tablet`),
      touchSize && is(`${touchSize}-tablet`),
      desktopSize && is(`${desktopSize}-desktop`),
      widescreenSize && is(`${widescreenSize}-widescreen`),
      fullhdSize && is(`${fullhdSize}-fullhd`),
      offset && is(`offset-${offset}`),
      mobileOffset && is(`offset-${mobileOffset}-mobile`),
      tabletOffset && is(`offset-${tabletOffset}-tablet`),
      touchOffset && is(`offset-${touchOffset}-tablet`),
      desktopOffset && is(`offset-${desktopOffset}-desktop`),
      widescreenOffset && is(`offset-${widescreenOffset}-widescreen`),
      fullhdOffset && is(`offset-${fullhdOffset}-fullhd`),
      narrow && is('narrow'),
      verticalCentered && is('vcentered'),
      className,
    ),
  )

  return <div ref={ref} className={classes} {...others} />
}

export default React.forwardRef(ColumnsItem)
