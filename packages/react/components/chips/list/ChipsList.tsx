import * as React from "react"
import { is } from "@/services"
import { ChipsListProps } from "./ChipsListProps"
import clsx from "clsx"
import { hashClass } from "@/helpers"
import { useTrilogyContext } from "@/context"

/**
 * ChipsList Component - Container for Chips
 * @param children {React.ReactNode}
 * @param multiple {boolean} Selection Multiple With checked icon
 */
const ChipsList = ({
  children,
  multiple,
  ...others
}: ChipsListProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx("chips-list", multiple && is("multiple"))
  )

  return (
    <div className={classes} {...others}>
      {children}
    </div>
  )
}

export default ChipsList
