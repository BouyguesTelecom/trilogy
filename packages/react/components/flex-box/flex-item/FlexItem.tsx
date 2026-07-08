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
 * @param children {React.ReactNode}
 * @param testId {string} Test Id for Test Integration
 * @param id {string} Custom id attribute
 * @param narrow {boolean} Narrow item
 * @param verticalAlign { 'start' | 'end' | 'center' | 'stretch' | 'baseline' } Vertical alignment of the item
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 */
const FlexItem = React.forwardRef<FlexItemRef, FlexItemProps>(
  ({ className, id, size, narrow, verticalAlign, testId, ...others }, ref) => {
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
        size && !isNumber && size?.widescreen && is(`${size.widescreen}-widescreen`),
        size && !isNumber && size?.fullhd && is(`${size.fullhd}-fullhd`),
        narrow && is('narrow'),
        verticalAlign && is(getAlignClassName(verticalAlign)),
        className,
      ),
    )

    return <div ref={ref} id={id} className={classes} data-testid={testId} {...others} />
  },
)
FlexItem.displayName = ComponentName.FlexItem
export default FlexItem
