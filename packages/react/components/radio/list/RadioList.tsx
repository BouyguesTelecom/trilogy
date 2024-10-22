import * as React from "react"
import { RadioListWebProps } from "./RadioListProps"
import { has, is } from "@/services"
import clsx from "clsx"
import { hashClass } from "@/helpers"
import { useTrilogyContext } from "@/context"

/**
 * Radio List Component
 * @param children {ReactNode} RadioList children
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param centered {boolean} Centered radios
 * @param vertical {boolean} Verical radios
 * @param isMobile {boolean} espect mobile screen
 */
const RadioList = ({
  className,
  centered,
  isMobile,
  vertical,
  ...others
}: RadioListWebProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  return (
    <div
      className={hashClass(
        styled,
        clsx(
          "radios",
          className,
          centered && has("text-centered"),
          isMobile && is("mobile"),
          vertical && is("vertical")
        )
      )}
      {...others}
    />
  )
}

export default RadioList
