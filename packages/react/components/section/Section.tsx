import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { getBackgroundClassName } from '@/objects'
import { has, is } from '@/services'
import clsx from 'clsx'
import React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { SectionProps, SectionRef } from './SectionProps'

/**
 * Section Component - Manages the main margins of the page and takes up all the available width.
 * @param children {React.ReactNode} Section child elements
 * @param backgroundColor {TrilogyColor} Section Background Color
 * @param backgroundSrc {string} Source of background image
 * @param inverted {boolean} Inverted Section Color
 * @param id {string} Custom id attribute
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param skeleton {boolean} Loading skeleton state
 * @param testId {string} Test Id for Test Integration
 */
const Section = React.forwardRef<SectionRef, SectionProps>(
  ({ className, id, skeleton, backgroundColor, backgroundSrc, inverted, testId, ...others }, ref) => {
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
        data-testid={testId}
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
