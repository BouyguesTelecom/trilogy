import clsx from 'clsx'
import React from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import { SectionProps } from '@/components/section/SectionProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getBackgroundClassName } from '@/objects/atoms/Background'
import { has, is } from '@/services/classify'

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
const Section = React.forwardRef(
  (
    {
      className,
      skeleton,
      backgroundColor,
      backgroundSrc,
      inverted,
      paddingless,
      verticalPaddingless,
      fullwidth,
      ...others
    }: SectionProps,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    const _className = hashClass(
      clsx(
        'section',
        className,
        backgroundColor && has(getBackgroundClassName(backgroundColor)),
        backgroundSrc && has('background'),
        inverted && is('inverted'),
        skeleton ? is('loading') : is('loaded'),
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
  },
)

Section.displayName = ComponentName.Section
export default Section
