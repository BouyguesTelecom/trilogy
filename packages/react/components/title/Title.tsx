import React from 'react'

import TitleBase from '@/components/title/base/Title.base'
import { useTitle } from '@/components/title/hook/useTitle'
import { TitleProps } from '@/components/title/TitleProps'

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
const Title = (props: TitleProps, ref: React.Ref<HTMLHeadingElement>): JSX.Element => {
  const { classes } = useTitle({ skeleton: props.skeleton })
  return <TitleBase className={classes} {...props} ref={ref} />
}

export default React.forwardRef(Title)
