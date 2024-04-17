import React from "react"
import clsx from "clsx"
import { StickerProps } from "./StickerProps"
import { is } from "../../services/classify"
import { StickerMarkup, StickerMarkupValues } from "./StickerEnum"
import { getAlertClassName, getVariantClassName } from "../../objects"
import { hashClass } from "../../helpers"
import { useTrilogyContext } from "../../context"

/**
 * Sticker component
 * @param children {ReactNode} Sticker child
 * @param variant {AlertState} Sticker variant : primary only
 * @param small {boolean} Small Sticker
 * @param flag {boolean} Flag sticker
 * @param hat {boolean} Hat Sticker ( for box )
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param markup {StickerMarkup} HTML element : p|span|div
 * @param className {string} Additionnal css classes
 * @param others
 */

const Sticker = ({
  className,
  children,
  /* deprecated*/
  stretched,
  /* deprecated*/
  variant,
  small,
  /* deprecated*/
  alert,
  hat,
  markup,
  /* deprecated*/
  inverted,
  flag,
  ...others
}: StickerProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      "sticker",
      stretched && is("stretched"),
      variant && !alert && is(getVariantClassName(variant)),
      alert && !variant && is(getAlertClassName(alert)),
      small && is("small"),
      hat && is("hat"),
      inverted && is("inverted"),
      flag && is("flag"),
      className
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
