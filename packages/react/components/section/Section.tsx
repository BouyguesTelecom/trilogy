import React, { useEffect, useState } from 'react'
import { SectionProps } from './SectionProps'
import { has, is } from '../../services'
import { getBackgroundClassName } from '../../objects'
import clsx from 'clsx'
import { hashClass } from '../../helpers'
import { useTrilogyContext } from '../../context'

/**
 * Section Component - Manages the main margins of the page and takes up all the available width.
 * @param className {string} Additionnal CSS Classes
 * @param skeleton {boolean} Skeleton before loaded
 * @param children {React.ReactNode}
 * @param background {TrilogyColor} Section Background Color
 * @param backgroundSrc {string} Source of background Image
 * @param paddingless {boolean} remove padding
 * @param verticalPaddingless {boolean} remove vertical padding
 **/

const Section = ({
  className,
  skeleton,
  background,
  backgroundSrc,
  inverted,
  paddingless,
  verticalPaddingless,
  fullwidth,
  ...others
}: SectionProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const [isLoading, setIsLoading] = useState<boolean>(skeleton || false)

  useEffect(() => {
    setIsLoading(skeleton || false)
  }, [skeleton])

  const _className = hashClass(
    styled,
    clsx(
      'section',
      className,
      background && has(getBackgroundClassName(background)),
      backgroundSrc && has('background'),
      inverted && is('inverted'),
      isLoading ? is('loading') : is('loaded'),
      fullwidth && is('fullwidth'),
      paddingless && is('paddingless'),
      verticalPaddingless && is('vertical-paddingless')
    ),
  )

  return (
    <section
      {...(backgroundSrc && {
        style: { backgroundImage: `url(${backgroundSrc})`, backgroundSize: 'cover', backgroundPosition: '50%' },
      })}
      className={_className}
      {...others}
    />
  )
}

export default Section
