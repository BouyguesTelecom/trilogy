import * as React from "react"
import { RowsProps } from "./RowsProps"
import { hashClass } from "@/helpers"
import clsx from "clsx"
import { useTrilogyContext } from "@/context"
import { is } from "@/services"

/**
 * Rows Component
 * @param children {React.ReactNode} Rows children
 * @param gapless {boolean} Delete margins between row
 * - ------------------- WEB PROPERTIES -------------------------
 * @param className {string} additionnal CSS Classes
 */
const Rows = React.forwardRef((props: RowsProps, ref: React.LegacyRef<HTMLDivElement>) => {
  const { className, gapless, ...others } = props
  const { styled } = useTrilogyContext()

  return (
    <div ref={ref} className={hashClass(styled, clsx("rows", gapless && is("gapless"), className))} {...others} />
  )

})
export default Rows
