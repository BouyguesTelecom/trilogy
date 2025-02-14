import { RadioTilesProps } from '@/components/radio/tiles/RadioTilesProps'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { getAlignClassName, getJustifiedClassName } from '@/objects'
import { is } from '@/services'
import clsx from 'clsx'
import * as React from 'react'

/**
 * Columns Item Component - Columns Child
 * @param id {string}
 * @param children {ReactNode}
 * @param align { Alignable | AlignableValues} align content
 * @param verticalAlign { Alignable | AlignableValues} align vertical content
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const RadioTiles = ({ id, className, children, align, verticalAlign, ...others }: RadioTilesProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  return (
    <div
      id={id}
      className={hashClass(
        styled,
        clsx(
          'radio-tiles',
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

export default RadioTiles
