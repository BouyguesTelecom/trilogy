import React from "react"
import { HeroProps } from "./HeroProps"
import { has, is } from "@/services/classify"
import { getAlignClassName, getBackgroundClassName } from "@/objects"
import clsx from "clsx"
import { hashClass } from "@/helpers"
import { useTrilogyContext } from "@/context"

/**
 * Hero Component
 * @param children {React.ReactNode} Hero Children
 * @param backgroundColor {TrilogyColor} Hero background color
 * @param backgroundSrc {string} If source, it will display background option
 * @param variant {VariantState} Hero background color : main/accent
 * @param onClick {Function} onClick Event
 * @param overlap {ReactNode[]|Boolean} Hero overlap components in tab (need to add key for each element),
 * if second element add second special overlap (only native-old) - Web (Boolean) Native (ReactNode)
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * - -------------------------- NATIVE PROPERTIES -------------------------------
 * @param backgroundHeight {BackgroundHeight} Background heigth
 */
const Hero = ({
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
}: HeroProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      "hero",
      backgroundColor && has(getBackgroundClassName(backgroundColor)),
      backgroundSrc && has('background'),
      inverted && is('inverted') || is('base'),
    align && is(getAlignClassName(align)),
      justify && is(justify),
      overlap && is("overlapped"),
      className
    )
  )

  return (
    <section
      onClick={onClick && onClick}
      {...(backgroundSrc && {
        style: { backgroundImage: `url(${backgroundSrc})` },
      })}
      className={classes}
      {...others}
    >
      <div className={hashClass(styled, clsx("hero-body"))}>{children}</div>
    </section>
  )
}

export default Hero
