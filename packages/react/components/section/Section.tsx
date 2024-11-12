import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { getBackgroundClassName } from '@/objects'
import { has, is } from '@/services'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { SectionProps } from './SectionProps'

/**
 * Section Component - Manages the main margins of the page and takes up all the available width.
 * @param children {React.ReactNode}
 * @param backgroundColor {TrilogyColor} Section Background Color
 * @param backgroundSrc {string} Source of background Image
 * @param paddingless {boolean} remove padding
 * @param verticalPaddingless {boolean} remove vertical padding
 * @param fullwidth {boolean} Fullwidth section
 * - -------------- WEB PROPERTIES ---------------
 * @param className {string} Additionnal CSS Classes
 * @param inverted {boolean} Inverted Section Color
 * @param skeleton {boolean} Skeleton before loaded
 * - -------------- NATIVE PROPERTIES ---------------
 * @param autolayout {boolean} Apply auto-layout rules
 **/
const Section = React.forwardRef((props: SectionProps, ref: React.LegacyRef<HTMLDivElement>) => {
  const {
    className,
    skeleton,
    backgroundColor,
    backgroundSrc,
    inverted,
    paddingless,
    verticalPaddingless,
    fullwidth,
    ...others
  } = props

  const { styled } = useTrilogyContext()
  const [isLoading, setIsLoading] = useState<boolean>(skeleton || false)

  useEffect(() => {
    setIsLoading(skeleton || false)
  }, [skeleton])

  const _className = hashClass(
    clsx(
      'section',
      className,
      backgroundColor && has(getBackgroundClassName(backgroundColor)),
      backgroundSrc && has('background'),
      inverted && is('inverted'),
      isLoading ? is('loading') : is('loaded'),
      fullwidth && is('fullwidth'),
      paddingless && is('paddingless'),
      verticalPaddingless && is('vertical-paddingless'),
    ),
  )

  return (
    <section
      ref={ref}
      {...(backgroundSrc && {
        style: { backgroundImage: `url(${backgroundSrc})` },
      })}
      className={_className}
      {...others}
    />
  )
})

export default Section
