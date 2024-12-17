import * as React from 'react'
import clsx from 'clsx'
import { CheckboxTilesProps } from './CheckboxTilesProps'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'
import { getAlignClassName } from '@/objects'
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
}

export default CheckboxTiles
