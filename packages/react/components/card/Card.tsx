import React, { useEffect, useState, createContext } from "react"
import clsx from "clsx"
import { CardMarkup, CardProps } from "./CardProps"
import { has, is } from "@/services/classify"
import { getAlignClassName, getBackgroundClassName } from "@/objects"
import { hashClass } from "@/helpers"
import { useTrilogyContext } from "@/context"

export const CardContext = createContext({ horizontal: false })

/**
 * Card Component
 * @param flat {boolean} Adding border for Card content
 * @param horizontal {boolean} Horizontal Card orientation
 * @param background {TrilogyColor} Card Background Color
 * @param inverted {boolean} Inverted Card Color
 * @param floating {boolean} Floating card
 * @param onClick {Function} onClick Event
 * @param children {React.ReactNode}
 * @param skeleton {boolean} Loading card
 * @param reversed {boolean} Reversed card
 * @param active {boolean} Activated card
 * - ------------------ WEB PROPERTIES -----------------------
 * @param className {string} Additionnal CSS Classes
 * @param to {string} Card link
 * @param fullheight
 * @param markup {BoxMarkup} Clickable Card => CardMarkup.A Not clickable box => CardMarkup.DIV || null
 */
const Card = ({
  className,
  background,
  backgroundSrc,
  inverted,
  flat,
  horizontal,
  floating,
  align,
  justify,
  skeleton,
  onClick,
  reversed,
  testId,
  markup,
  to,
  fullheight,
  active,
  ...others
}: CardProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(skeleton || false)
  const { styled } = useTrilogyContext()

  useEffect(() => {
    setIsLoading(skeleton || false)
  }, [skeleton])

  const hoverStyle: React.CSSProperties = {
    cursor: "pointer",
  }

  const classes = hashClass(
    styled,
    clsx(
      "card",
      background && has(getBackgroundClassName(background)),
      backgroundSrc && has("background"),
      (inverted && is("inverted")) || is("base"),

      flat && !floating && is("flat"),
      horizontal && [is("horizontal"), is("vcentered")],
      floating && !flat && is("floating"),
      align && is(getAlignClassName(align)),
      justify && is(justify),
      isLoading ? is("loading") : is("loaded"),
      reversed && is("reversed"),
      className,
      fullheight && is("fullheight"),
      active && is("active")
    )
  )

  if (markup === CardMarkup.A) {
    return (
      <a
        data-testid={testId}
        href={to}
        onClick={(e) => {
          // eslint-disable-next-line no-unused-expressions
          onClick?.(e)
          e.stopPropagation()
        }}
        {...others}
        className={classes}
      />
    )
  }

  return (
    <div
      data-testid={testId}
      onClick={onClick && onClick}
      className={classes}
      {...others}
      style={onClick && { ...hoverStyle }}
    />
  )
}

export default Card
