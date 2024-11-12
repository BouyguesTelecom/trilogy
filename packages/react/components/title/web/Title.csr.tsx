'use client'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { TitleLevels } from '../TitleEnum'
import { TitleProps } from '../TitleProps'
import TitleSsr from './Title.ssr'

/**
 * Title component
 * @param children {ReactNode} Title child
 * @param level {TitleLevels | TitleLevel | number} Title size : 1-3
 * @param inverted {Boolean} Title white color
 * @param typo {TypographyColor | TypographyTransform | TypographyBold | TypographyAlign} Typos
 * @param onClick {Function} onClick Event
 * @param skeleton {Boolean} Title Skeleton
 * @param accessibilityLabel {string} Accessibility label
 * @param testId {string} Test Id for Test Integration
 * @param subtitle {boolean} Subtitle below title
 * @param overline {boolean} Overline above title
 * - --------------- WEB PROPERTIES ----------------------------------
 * @param markup {string} h1 | h2 | h3 | h4 | h5 | h6 | p | span | div
 * @param className {string} Additionnal css classes
 * @param marginless {boolean} delete margin
 * @param htmlContent {string} Content Html In Title Component
 * - --------------- NATIVE PROPERTIES ----------------------------------
 * @param style {object} Additional styles
 */
const TitleCSR = ({ level = TitleLevels.ONE, skeleton, className, ...props }: TitleProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(skeleton || false)
  const classes = hashClass(clsx(isLoading ? is('loading') : is('loaded'), className))

  useEffect(() => {
    setIsLoading(skeleton || false)
  }, [skeleton])

  return <TitleSsr {...props} className={classes} />
}

export default TitleCSR
