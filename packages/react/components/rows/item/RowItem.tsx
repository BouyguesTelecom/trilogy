import * as React from "react"
import { RowsItemProps } from "./RowItemProps"
import { is } from "@/services/classify"
import { hashClass } from "@/helpers"
import clsx from "clsx"
import { useTrilogyContext } from "@/context"

/**
 * Rows Item Component
 * @param narrow {boolean} Align same elements horizontaly
 * @param children {React.ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------
 *  @param className {string} additionnal CSS Classes
 */
const RowItem = React.forwardRef((props: RowsItemProps, ref: React.LegacyRef<HTMLDivElement>) => {
  const {
    className,
    narrow,
    ...others
  } = props

  const { styled } = useTrilogyContext()
  const classes = hashClass(
    styled,
    clsx("row", narrow && is("narrow"), className)
  )
  return <div ref={ref} className={classes} {...others} />
})

export default RowItem
