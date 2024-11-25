import React from 'react'
import { SectionProps } from './SectionProps'
import { has, is } from '@/services'
import { getBackgroundClassName } from '@/objects'
import clsx from 'clsx'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'

/**
 * Section Component - Manages the main margins of the page and takes up all the available width.
 * @param children {React.ReactNode}
 * @param backgroundColor {TrilogyColor} Section Background Color
 * @param backgroundSrc {string} Source of background Image
 * - -------------- WEB PROPERTIES ---------------
 * @param className {string} Additionnal CSS Classes
 * @param inverted {boolean} Inverted Section Color
 * @param skeleton {boolean} Skeleton before loaded
 * - -------------- NATIVE PROPERTIES ---------------
 **/
const Section = ({ className, id, skeleton, backgroundColor, backgroundSrc, inverted, ...others }: SectionProps) => {
  const { styled } = useTrilogyContext()

  const _className = hashClass(
    styled,
    clsx(
      'section',
      className,
      backgroundColor && has(getBackgroundClassName(backgroundColor)),
      backgroundSrc && has('background'),
      inverted && is('inverted'),
      skeleton && is('loading'),
    ),
  )

  return (
    <section
      id={id}
      {...(backgroundSrc && {
        style: { backgroundImage: `url(${backgroundSrc})` },
      })}
      className={_className}
      {...others}
    />
  )
}

export default Section
