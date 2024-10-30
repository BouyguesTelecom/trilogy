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
 * @param scrollable {boolean} If multiple Chips make scrollable List
 */
const ChipsList = React.forwardRef((props: ChipsListProps, ref: React.LegacyRef<HTMLDivElement>) => {
  const {
    children,
    multiple,
    scrollable,
    ...others
  } = props

  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      "chips-list",
      multiple && is("multiple"),
      scrollable && is("scrollable")
    )
  )

  return (
    <div ref={ref} role='group' className={classes} {...others}>
      {children}
    </div>
  )
})

export default ChipsList
