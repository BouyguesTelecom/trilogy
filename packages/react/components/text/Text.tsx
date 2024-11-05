import * as React from "react"
import clsx from "clsx"
import { TextProps } from "./TextProps"
import { TextLevels, TextMarkup, TextMarkupValues } from "./TextEnum"
import { is } from "@/services/classify"
import { hashClass } from "@/helpers/hashClassesHelpers"
import { useTrilogyContext } from "@/context/index"

/**
 * Text component
 * @param children {string} Text child
 * @param inverted {Boolean} Text white color
 * @param level {TextLevels | number} Text size : 1-4
 * @param typo {TypographyColor | TypographyTransform | TypographyBold | TypographyAlign} Typos
 * @param onClick {Function} onClick Event
 * @param skeleton {Boolean} Text Skeleton
 * @param accessibilityLabel {string} Accessibility label
 * @param testId {string} Test Id for Test Integration
 * @param marginless {boolean} Removes margin after Text
 * @param link {boolean} Add link variant for inline link into Text
 * @param numberOfLines {number} Ellipsis after limit number of lines
 * - --------------- WEB PROPERTIES ----------------------------------
 * @param title {string} title attribute
 * @param className {string} Additionnal css classes
 * @param href {string} If Text Markup is A
 * @param markup {TextMarkup} Text markup
 * @param htmlContent {string} Content Html In Text Component
 * - --------------- NATIVE PROPERTIES ----------------------------------
 * @param style {Object} Additional style
 */
const Text = ({
  level,
  markup,
  children,
  className,
  href,
  title,
  onClick,
  typo,
  inverted,
  skeleton,
  accessibilityLabel,
  htmlContent,
  marginless,
  link,
  numberOfLines,
  ...others
}: TextProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const levelText = () => {
    if (level) {
      switch (level) {
        case TextLevels.ONE:
          return is("level-1")
        case TextLevels.TWO:
          return is("level-2")
        case TextLevels.THREE:
          return is("level-3")
        case TextLevels.FOUR:
          return is("level-4")
        default:
          return is(`level-${level}`)
      }
    }
  }

  const classes = hashClass(
    styled,
    clsx(
      !link ? "text" : "link",
      level && levelText(),
      inverted && is("inverted"),
      typo,
      skeleton ? is("loading") : is("loaded"),
      marginless && is("marginless"),
      numberOfLines && is("text-ellipsis"),
      className
    )
  )

  /**
   * If no markup return p with default level 1
   */
  const isCorrectMarkup = (stringMarkup: TextMarkup | TextMarkupValues) => {
    if (
      stringMarkup in TextMarkup ||
      Object.values(TextMarkup).includes(stringMarkup as TextMarkup)
    )
      return true
  }

  const Tag = markup && isCorrectMarkup(markup) ? markup : "p"

  return (
    <Tag
      style={numberOfLines ? { WebkitLineClamp: numberOfLines } : {}}
      aria-label={accessibilityLabel}
      onClick={onClick}
      title={title}
      className={classes}
      {...(htmlContent && { dangerouslySetInnerHTML: { __html: htmlContent } })}
      {...(Tag === TextMarkup.A && { href: href })}
      {...others}
    >
      {children}
    </Tag>
  )
}

export default Text
