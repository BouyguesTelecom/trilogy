import { ComponentName } from '@/components/enumsComponentsName'
import { RadioTilesProps, RadioTilesRef } from '@/components/radio/tiles/RadioTilesProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { isRequiredChild } from '@/helpers/require'
import { getAlignClassName } from '@/objects/facets/Alignable'
import { is } from '@/services'
import clsx from 'clsx'
import React from 'react'

/**
 * RadioTiles
 * @param id {string}
 * @param children {ReactNode}
 * @param align { Alignable | AlignableValues} align content
 * @param verticalAlign { Alignable | AlignableValues} align vertical content
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param accessibilityLabelledBy {string} aria-labelledby attribute
 */
const RadioTiles = React.forwardRef<RadioTilesRef, RadioTilesProps>(
  ({ id, className, children, align, verticalAlign, accessibilityLabelledBy, ...others }, ref): JSX.Element => {
    let alignClass = null

    if (align) {
      alignClass =
        (getAlignClassName(align) === 'aligned-start' && is('justified-start')) ||
        (getAlignClassName(align) === 'aligned-center' && is('justified-center')) ||
        (getAlignClassName(align) === 'aligned-end' && is('justified-end')) ||
        null
    }

    let verticalAlignClass = null

    if (verticalAlign) {
      verticalAlignClass =
        (getAlignClassName(verticalAlign) === 'aligned-start' && is('aligned-start')) ||
        (getAlignClassName(verticalAlign) === 'aligned-center' && is('aligned-center')) ||
        (getAlignClassName(verticalAlign) === 'aligned-end' && is('aligned-end')) ||
        null
    }

    return (
      <div
        ref={ref}
        id={id}
        role={'radiogroup'}
        aria-labelledby={accessibilityLabelledBy}
        aria-required={isRequiredChild(children) ? 'true' : undefined}
        className={hashClass(clsx('radio-tiles', className, align && alignClass, verticalAlign && verticalAlignClass))}
        {...others}
      >
        {children}
      </div>
    )
  },
)

RadioTiles.displayName = ComponentName.RadioTiles
export default RadioTiles
