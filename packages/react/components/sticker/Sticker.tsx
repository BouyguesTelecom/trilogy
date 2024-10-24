import React from "react"
import clsx from "clsx"
import { StickerProps } from "./StickerProps"
import { is } from "@/services/classify"
import { StickerMarkup, StickerMarkupValues } from "./StickerEnum"
import { getVariantClassName } from "@/objects"
import { hashClass } from "@/helpers"
import { useTrilogyContext } from "@/context"

/**
 * Sticker component
 * @param children {ReactNode} Sticker child
 * @param variant {StatusState} Sticker variant : primary only
 * @param small {boolean} Small Sticker
 * @param hat {boolean} Hat Sticker ( for box )
 * @param outlined {boolean} Outlined sticker
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param markup {StickerMarkup} HTML element : p|span|div
 * @param className {string} Additionnal css classes
 * @param others
 */
const Sticker = ({
  className,
  children,
  variant,
  small,
  hat,
  markup,
  outlined,
  ...others
}: StickerProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      "sticker",
      variant && is(getVariantClassName(variant)),
      small && is("small"),
      hat && is("hat"),
      className,
      outlined && is('outlined'),
    )
  )

  const isCorrectMarkup = (
    stringMarkup: StickerMarkup | StickerMarkupValues
  ) => {
    if (
      stringMarkup in StickerMarkup ||
      Object.values(StickerMarkup).includes(stringMarkup as StickerMarkup)
    )
      return true
  }

  const Tag = markup && isCorrectMarkup(markup) ? markup : "div"

  return (
    <Tag className={classes} {...others}>
      {children}
    </Tag>
  )
}

export default Sticker
