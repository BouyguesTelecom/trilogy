import * as React from 'react'
import clsx from 'clsx'
import { CheckboxTilesProps } from './CheckboxTilesProps'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'
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
const CheckboxTiles = ({
  id,
  className,
  children,
  align,
  verticalAlign,
  ...others
}: CheckboxTilesProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  return (
    <div
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
}

export default CheckboxTiles
