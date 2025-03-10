import { ComponentName } from '@/components/enumsComponentsName'
import { HeroProps, HeroRef } from '@/components/hero/HeroProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getBackgroundClassName } from '@/objects/atoms/Background'
import { has, is } from '@/services/classify'
import clsx from 'clsx'
import React from 'react'

/**
 * Hero Component
 * @param children {React.ReactNode} Hero Children
 * @param backgroundColor {TrilogyColor} Hero background color
 * @param backgroundSrc {string} If source, it will display background option
 * @param variant {VariantState} Hero background color : main/accent
 * @param onClick {Function} onClick Event
 * @param inverted {boolean} Inverted
 * @param overlap {ReactNode[]|Boolean} Hero overlap components in tab (need to add key for each element),
 * if second element add second special overlap (only native-old) - Web (Boolean) Native (ReactNode)
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * - -------------------------- NATIVE PROPERTIES -------------------------------
 */
const Hero = React.forwardRef<HeroRef, HeroProps>(
  (
    { children, backgroundColor, backgroundSrc, inverted, className, id, onClick, overlap, ...others },
    ref,
  ): JSX.Element => {
    const classes = hashClass(
      clsx(
        'hero',
        backgroundColor && has(getBackgroundClassName(backgroundColor)),
        backgroundSrc && has('background'),
        (inverted && is('inverted')) || is('base'),
        overlap && is('overlapped'),
        className,
      ),
    )

    return (
      <section
        ref={ref}
        id={id}
        onClick={onClick && onClick}
        className={classes}
        {...(backgroundSrc && {
          style: { backgroundImage: `url(${backgroundSrc})` },
        })}
        {...others}
      >
        <div className={hashClass(clsx('hero-body'))}>{children}</div>
      </section>
    )
  },
)

Hero.displayName = ComponentName.Hero
export default Hero
