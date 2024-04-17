import * as React from "react"
import clsx from "clsx"
import { CardImageProps } from "./CardImageProps"
import { is } from "../../../services/classify"
import { hashClass } from "../../../helpers"
import { useTrilogyContext } from "../../../context"

/**
 * Card Image Component
 * @param src Image source
 * @param alt Alt attribute
 * @param className Additionnal CSS Classes
 * @param size Image Card size on horizontal align
 * @param onClick {Function} onClick Event
 * - -------------------------- NATIVE PROPERTIES -------------------------------
 * @param horizontal {boolean} Horizontal Card orientation
 * @param contain {boolean} Resize mode contain
 */
const CardImage = ({
  src,
  alt,
  className,
  size,
  onClick,
  ...others
}: CardImageProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(
    styled,
    clsx("card-image", size && is(`${size}`), className)
  )

  return (
    <div
      onClick={(e) => {
        // eslint-disable-next-line no-unused-expressions
        onClick?.(e)
        e.stopPropagation()
      }}
      className={classes}
    >
      <figure className={hashClass(styled, clsx("image"))} {...others}>
        <img {...{ src: typeof src === "string" ? src : "", alt }} />
      </figure>
    </div>
  )
}

export default CardImage
