import { ComponentName } from '@/components/enumsComponentsName'
import { RadioTilesProps, RadioTilesRef } from '@/components/radio/tiles/RadioTilesProps'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { getAlignClassName, getJustifiedClassName } from '@/objects'
import { is } from '@/services'
import { isRequiredChild } from '@/helpers/require'
import clsx from 'clsx'
import * as React from 'react'

/**
 * RadioTiles
 * @param id {string}
 * @param children {ReactNode}
 * @param align { Alignable | AlignableValues} align content
 * @param verticalAlign { Alignable | AlignableValues} align vertical content
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param accessibilityLabelledBy {string} aria-labelledby attribute
 */
const RadioTiles = React.forwardRef<RadioTilesRef, RadioTilesProps>(({ id, className, children, align, verticalAlign, accessibilityLabelledBy, ...others }, ref): JSX.Element => {
  const { styled } = useTrilogyContext()

  return (
    <div
      ref={ref}
      id={id}
      role={"radiogroup"}
      aria-labelledby={accessibilityLabelledBy}
      aria-required={isRequiredChild(children) ? 'true' : undefined}
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
})

RadioTiles.displayName = ComponentName.RadioTiles
export default RadioTiles
