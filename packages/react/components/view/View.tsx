import * as React from "react"
import { ViewMarkup, ViewMarkupValues, ViewProps } from "./ViewProps"
import clsx from "clsx"
import { has, is } from "@/services"
import {
  getJustifyClassName,
  getAlignClassName, getBackgroundClassName,
} from "@/objects"
import { hashClass } from "@/helpers"
import { useTrilogyContext } from "@/context"

/**
 * View Component (DIV EQUIVALENT)
 * @param children {ReactNode} View child
 * @param flexable {boolean} Flexable view
 * @param style {CSSProperties} View custom style
 * @param onClick {Function} Click Event
 * @param backgroundColor {TrilogyColor} View backgroud color
 * @param backgroundSrc {string} View backgroud image source
 * @param id {string} Id for Web / TestID for Native
 * @param fullwidth {boolean} true by default
 * @param justify {JustifiableProps.justify?} Justifiable | "JUSTIFIED_CENTER" | "JUSTIFIED_START" | "JUSTIFIED_END" | "SPACE_BETWEEN" | undefined
 * @param align {AlignableProps.center?} AlignableProps | "ALIGNED_CENTER" | "ALIGNED_START" | "ALIGNED_END" | undefined
 * - ------------------ WEB PROPERTIES ---------------
 * @param className {string} Additionnal css classes
 * @param loading {boolean} Loading View
 * @param markup {ViewMarkup} Markup for View
 * @param inverted {boolean} Inverted View Color
 * - ------------------ NATIVE PROPERTIES ------------
 * @param bottom {boolean} Bottom position
 */
const View = ({
  children,
  style,
  className,
  loading,
  onClick,
  backgroundColor,
  backgroundSrc,
  inverted,
  fullwidth = true,
  markup,
  flexable,
  justify,
  align,
  ...others
}: ViewProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const isCorrectMarkup = (stringMarkup: ViewMarkup | ViewMarkupValues) => {
    if (
      stringMarkup in ViewMarkup ||
      Object.values(ViewMarkup).includes(stringMarkup as ViewMarkup)
    )
      return true
  }

  const Tag = markup && isCorrectMarkup(markup) ? markup : "div"

  const classes = hashClass(
    styled,
    clsx(
      loading && is("loading"),
      backgroundColor && has(getBackgroundClassName(backgroundColor)),
      backgroundSrc && has('background'),
      inverted && is('inverted') || is('base'),
      fullwidth && is("fullwidth"),
      flexable && is("flex"),
      typeof justify === "string" && is(getJustifyClassName(justify)),
      typeof align === "string" && is(getAlignClassName(align)),
      className
    )
  )

  return (
    <Tag
      onClick={onClick}
      style={style}
      className={classes}
      {...(backgroundSrc && {
        style: {
          backgroundImage: `url(${backgroundSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
        },
      })}
      {...others}
    >
      {children}
    </Tag>
  )
}

export default View
