import clsx from 'clsx'
import React from 'react'

import { HeroProps } from '@/components/hero/HeroProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getBackgroundClassName } from '@/objects/atoms/Background'
import { getAlignClassName } from '@/objects/facets/Alignable'
import { has, is } from '@/services/classify'

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
 * @param align { Alignable | AlignableValues} align content
 * @param justify {JustifiableProps.justify?} Justifiable | "JUSTIFIED_CENTER" | "JUSTIFIED_START" | "JUSTIFIED_END" | "SPACE_BETWEEN" | undefined
 * - -------------------------- NATIVE PROPERTIES -------------------------------
 * @param backgroundHeight {BackgroundHeight} Background heigth
 */
const Hero = (
  {
    children,
    backgroundColor,
    backgroundSrc,
    inverted,
    className,
    align,
    justify,
    onClick,
    overlap,
    ...others
  }: HeroProps,
  ref: React.Ref<HTMLElement>,
): JSX.Element => {
  const classes = hashClass(
    clsx(
      'hero',
      backgroundColor && has(getBackgroundClassName(backgroundColor)),
      backgroundSrc && has('background'),
      (inverted && is('inverted')) || is('base'),
      align && is(getAlignClassName(align)),
      justify && is(justify),
      overlap && is('overlapped'),
      className,
    ),
  )

  return (
    <section
      ref={ref}
      onClick={onClick && onClick}
      {...(backgroundSrc && {
        style: { backgroundImage: `url(${backgroundSrc})` },
      })}
      className={classes}
      {...others}
    >
      <div className={hashClass(clsx('hero-body'))}>{children}</div>
    </section>
  )
}

export default React.forwardRef(Hero)
