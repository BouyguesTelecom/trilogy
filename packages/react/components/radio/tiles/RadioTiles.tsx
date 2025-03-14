import { ComponentName } from '@/components/enumsComponentsName'
import { RadioTilesProps, RadioTilesRef } from '@/components/radio/tiles/RadioTilesProps'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { getAlignClassName } from '@/objects'
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
 * @param accessibilityLabelledBy {string} aria-labelledby attribute
 */
const RadioTiles = React.forwardRef<RadioTilesRef, RadioTilesProps>(({ id, className, children, align, verticalAlign, accessibilityLabelledBy, ...others }, ref): JSX.Element => {
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

  const isRequired = React.Children.toArray(children).some(
    (child) =>
      React.isValidElement(child) && child.props.required,
  )

  return (
    <div
      ref={ref}
      id={id}
      role={"radiogroup"}
      aria-labelledby={accessibilityLabelledBy}
      aria-required={isRequired ? 'true' : undefined}
      className={hashClass(
        styled,
        clsx('radio-tiles', className, align && alignClass, verticalAlign && verticalAlignClass),
      )}
      {...others}
    >
      {children}
    </div>
  )
})

RadioTiles.displayName = ComponentName.RadioTiles
export default RadioTiles
