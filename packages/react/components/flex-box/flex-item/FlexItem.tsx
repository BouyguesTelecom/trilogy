import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getAlignClassName } from '@/objects/facets/Alignable'
import { is } from '@/services/classify'
import clsx from 'clsx'
import React from 'react'
import { FlexItemProps, FlexItemRef } from '@/components/flex-box/flex-item/FlexItemProps'

/**
 * FlexItem Component - FlexBox Child
 * @param size {FlexItemSize} Size 1-12
 * @param verticalCentered {boolean} Vertical center item
 * @param centered {boolean} center item
 * @param children {React.ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param narrow {boolean} Narrow item
 * @param className {string} Additional CSS Classes
 * @param mobileSize {FlexItemSize} Apply => is-size-mobile
 * @param tabletSize {FlexItemSize} Apply => is-size-tablet
 * @param touchSize {FlexItemSize} Apply => is-size-touch
 * @param desktopSize {FlexItemSize} Apply => is-size-desktop
 * @param widescreenSize {FlexItemSize} Apply => is-size-widescreen
 * @param fullhdSize {FlexItemSize} Apply => is-size-fullhd
 * @param offset {FlexItemSize} Apply => is-offset
 * @param mobileOffset {FlexItemSize} Apply => is-offset-mobile
 * @param tabletOffset {FlexItemSize} Apply => is-offset-tablet
 * @param touchOffset {FlexItemSize} Apply => is-offset-touch
 * @param desktopOffset {FlexItemSize} Apply => is-offset-desktop
 * @param widescreenOffset {FlexItemSize} Apply => is-offset-widescreen
 * @param fullhdOffset {FlexItemSize} Apply => is-offset-fullhd
 * @param align { Alignable | AlignableValues} align content
 */

const FlexItem = React.forwardRef<FlexItemRef, FlexItemProps>(
  ({ className, id, size, narrow, verticalAlign, ...others }, ref) => {
    const { styled } = useTrilogyContext()

    const isNumber = typeof size === 'number'
    const classes = hashClass(
      styled,
      clsx(
        'flex-item',
        size && isNumber && is(`${size}`),
        size && !isNumber && size?.desktop && is(`${size.desktop}-desktop`),
        size && !isNumber && size?.mobile && is(`${size.mobile}-mobile`),
        size && !isNumber && size?.tablet && is(`${size.tablet}-tablet`),
        size && !isNumber && size?.touch && is(`${size.touch}-touch`),
        size && !isNumber && size?.wideScreen && is(`${size.wideScreen}-widescreen`),
        size && !isNumber && size?.fullHd && is(`${size.fullHd}-fullhd`),
        narrow && is('narrow'),
        verticalAlign && is(getAlignClassName(verticalAlign)),
        className,
      ),
    )

    return <div ref={ref} id={id} className={classes} {...others} />
  },
)
FlexItem.displayName = ComponentName.FlexItem
export default FlexItem
