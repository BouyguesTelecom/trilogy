import { ComponentName } from '@/components/enumsComponentsName'
import { RadioTilesProps, RadioTilesRef } from '@/components/radio/tiles/RadioTilesProps'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { isRequiredChild } from '@/helpers/require'
import { getAlignClassName } from '@/objects'
import { is } from '@/services'
import clsx from 'clsx'
import * as React from 'react'

/**
 * RadioTiles
 * @param id {string}
 * @param children {ReactNode}
 * @param align { Alignable | AlignableValues} align content
 * @param verticalAlign { Alignable | AlignableValues} align vertical content
 * @param numberCols {FlexSize | FlexItemSize} number of columns for grid layout
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param accessibilityLabelledBy {string} aria-labelledby attribute
 */
const RadioTiles = React.forwardRef<RadioTilesRef, RadioTilesProps>(
  (
    { id, className, children, align, verticalAlign, numberCols, accessibilityLabelledBy, ...others },
    ref,
  ): JSX.Element => {
    const { styled } = useTrilogyContext()
    let alignClass = null
    let verticalAlignClass = null

    if (align) {
      alignClass =
        (getAlignClassName(align) === 'aligned-start' && is('justified-start')) ||
        (getAlignClassName(align) === 'aligned-center' && is('justified-center')) ||
        (getAlignClassName(align) === 'aligned-end' && is('justified-end')) ||
        null
    }

    if (verticalAlign) {
      verticalAlignClass =
        (getAlignClassName(verticalAlign) === 'aligned-start' && is('aligned-start')) ||
        (getAlignClassName(verticalAlign) === 'aligned-center' && is('aligned-center')) ||
        (getAlignClassName(verticalAlign) === 'aligned-end' && is('aligned-end')) ||
        (getAlignClassName(verticalAlign) === 'aligned-stretch' && is('aligned-stretch')) ||
        null
    }

    const getGridColumnClasses = () => {
      if (!numberCols) return null
      if (typeof numberCols === 'number') return `is-grid-cols-${numberCols}`
      const responsiveClasses = []
      if (numberCols.mobile) responsiveClasses.push(`is-grid-cols-mobile-${numberCols.mobile}`)
      if (numberCols.tablet) responsiveClasses.push(`is-grid-cols-tablet-${numberCols.tablet}`)
      if (numberCols.touch) responsiveClasses.push(`is-grid-cols-touch-${numberCols.touch}`)
      if (numberCols.desktop) responsiveClasses.push(`is-grid-cols-desktop-${numberCols.desktop}`)
      if (numberCols.widescreen) responsiveClasses.push(`is-grid-cols-widescreen-${numberCols.widescreen}`)
      if (numberCols.fullhd) responsiveClasses.push(`is-grid-cols-fullhd-${numberCols.fullhd}`)
      return responsiveClasses.join(' ')
    }

    const gridColumnClasses = getGridColumnClasses()

    return (
      <div
        ref={ref}
        id={id}
        role={'radiogroup'}
        aria-labelledby={accessibilityLabelledBy}
        aria-required={isRequiredChild(children) ? 'true' : undefined}
        className={hashClass(
          styled,
          clsx(
            'radio-tiles',
            className,
            align && alignClass,
            verticalAlign && verticalAlignClass,
            gridColumnClasses && 'is-grid',
            gridColumnClasses,
          ),
        )}
        {...others}
      >
        {children}
      </div>
    )
  },
)

RadioTiles.displayName = ComponentName.RadioTiles
export default RadioTiles
