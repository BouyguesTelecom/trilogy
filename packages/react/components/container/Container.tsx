import * as React from "react"
import { ContainerProps } from "./ContainerProps"
import { is } from "@/services/classify"
import clsx from "clsx"
import { hashClass } from "@/helpers"
import { useTrilogyContext } from "@/context"

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
