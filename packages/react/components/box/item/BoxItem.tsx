import * as React from "react"
import { BoxItemProps } from "./BoxItemProps"
import clsx from "clsx"
import { hashClass } from "@/helpers"
import { useTrilogyContext } from "@/context"

/**
 * Box Item Component
 * @param className {string} Additionnal CSS Classes
 * @param children {React.ReactNode} Children
 * @param size {BoxItemSize} SMALL|MEDIUM|LARGE|HUGE
 */
const BoxItem = ({
  className,
  children,
  ...others
}: BoxItemProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  return (
    <div className={hashClass(styled, clsx("box-item", className))} {...others}>
      {children}
    </div>
  )
}

export default BoxItem
