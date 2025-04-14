import { hashClass } from '@/helpers'
import { getBackgroundClassName } from '@/objects'
import { has, is } from '@/services'
import clsx from 'clsx'
import React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { SectionProps, SectionRef } from './SectionProps'

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
const Section = React.forwardRef<SectionRef, SectionProps>(
  ({ className, id, skeleton, backgroundColor, backgroundSrc, inverted, ...others }, ref) => {
    const _className = hashClass(
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
        ref={ref}
        id={id}
        {...(backgroundSrc && {
          style: { backgroundImage: `url(${backgroundSrc})` },
        })}
        className={_className}
        {...others}
      />
    )
  },
)

Section.displayName = ComponentName.Section
export default Section
