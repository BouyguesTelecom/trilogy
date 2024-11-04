import * as React from "react"
import { ContainerProps } from "./ContainerProps"
import { has, is } from "@/services/classify"
import clsx from "clsx"
import { hashClass } from "@/helpers"
import { useTrilogyContext } from "@/context"
import { getBackgroundClassName } from "@/objects"

/**
 * Container Component
 * @param children {React.ReactNode}
 * @param medium {boolean} Set medium container
 * @param className {string} Additionnal CSS Classes
 */

const Container = ({
  className,
  medium,
  ...others
}: ContainerProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      "container",
      medium && is("medium"),
      className
    )
  )

  return <div className={classes} {...others} />
}

export default Container
