import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { isRequiredChild } from '@/helpers/require'
import { getAlignClassName } from '@/objects/facets/Alignable'
import { is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { CheckboxTilesProps, CheckboxTilesRef } from './CheckboxTilesProps'

/**
 * CheckboxTiles
 * @param id
 * @param align {Alignable}
 * @param verticalAlign {Alignable}
 * @param numberCols {GridSize | GridItemSize} number of columns for grid layout
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 */
const CheckboxTiles = React.forwardRef<CheckboxTilesRef, CheckboxTilesProps>(
  (
    { id, className, children, align, verticalAlign, accessibilityLabelledBy, numberCols, ...others },
    ref,
  ): JSX.Element => {
    const { styled } = useTrilogyContext()

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
        role={'group'}
        aria-labelledby={accessibilityLabelledBy}
        aria-required={isRequiredChild(children) ? 'true' : undefined}
        className={hashClass(
          styled,
          clsx(
            'checkbox-tiles',
            className,
            align && alignClass,
            verticalAlign && verticalAlignClass,
            gridColumnClasses && 'is-grid',
            gridColumnClasses && gridColumnClasses,
          ),
        )}
        {...others}
      >
        {children}
      </div>
    )
  },
)

CheckboxTiles.displayName = ComponentName.CheckboxTiles
export default CheckboxTiles
