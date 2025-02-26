import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
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
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const CheckboxTiles = React.forwardRef<CheckboxTilesRef, CheckboxTilesProps>(
  ({ id, className, children, align, verticalAlign, ...others }, ref): JSX.Element => {
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
        null
    }

    return (
      <div
        ref={ref}
        id={id}
        className={hashClass(
          styled,
          clsx('checkbox-tiles', className, align && alignClass, verticalAlign && verticalAlignClass),
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
