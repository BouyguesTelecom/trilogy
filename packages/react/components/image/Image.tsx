import * as React from "react"
import { ImageProps } from "./ImageProps"
import { is } from "../../services"
import clsx from "clsx"
import { hashClass } from "../../helpers"
import { useTrilogyContext } from "../../context"

/**
 * Image Component
 * @param src {string} Image source
 * @param alt {string} Image alt
 * @param rounded {boolean} Image rounded
 * @param width {number|string} Image width (Number if not percent else string)
 * @param height {number|string} Image height (Number if not percent else string)
 * @param onClick {Function} onClick Event
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes (ONLY FOR WEB)
 */
const Image = ({
  src,
  alt,
  className,
  rounded,
  width,
  height,
  onClick,
  ...others
}: ImageProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(styled, clsx("image", className))

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const styles: React.CSSProperties | any = {
    image: {
      width: width,
      height: height,
    },
  }

  return (
    <figure
      onClick={(e) => {
        onClick?.(e)
        e.stopPropagation()
      }}
      className={classes}
      {...others}
    >
      <img
        style={styles.image}
        className={hashClass(styled, clsx(rounded ? is("rounded") : ""))}
        src={typeof src === "string" ? src : ""}
        alt={alt}
      />
    </figure>
  )
}

export default Image
