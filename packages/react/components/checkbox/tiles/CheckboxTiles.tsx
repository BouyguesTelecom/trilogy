import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'
import { isRequiredChild } from '@/helpers/require'
import clsx from 'clsx'
import * as React from 'react'
import { CheckboxTilesProps, CheckboxTilesRef } from './CheckboxTilesProps'
import { getAlignClassName, getJustifiedClassName } from '@/objects'

/**
 * CheckboxTiles
 * @param id
 * @param align {Alignable}
 * @param verticalAlign {Alignable}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const CheckboxTiles = React.forwardRef<CheckboxTilesRef, CheckboxTilesProps>(
  ({ id, className, children, align, verticalAlign, accessibilityLabelledBy, ...others }, ref): JSX.Element => {
    const { styled } = useTrilogyContext()

    return (
      <div
        ref={ref}
        id={id}
        role='group'
        aria-labelledby={accessibilityLabelledBy}
        aria-required={isRequiredChild(children) ? 'true' : undefined}
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
