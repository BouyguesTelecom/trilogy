import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import * as React from 'react'
import { CheckboxTilesProps, CheckboxTilesRef } from './CheckboxTilesProps'
import { getAlignClassName, getJustifiedClassName } from '@/objects'
import { is } from '@/services'

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

    return (
      <div
        ref={ref}
        id={id}
        className={hashClass(
          styled,
          clsx(
            'checkbox-tiles',
            className,
            align && is(getJustifiedClassName(align)),
            verticalAlign && is(getAlignClassName(verticalAlign)),
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
