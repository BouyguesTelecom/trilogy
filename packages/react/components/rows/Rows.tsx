import * as React from "react"
import { RowsProps } from "./RowsProps"
import { hashClass } from "@/helpers"
import clsx from "clsx"
import { useTrilogyContext } from "@/context"

/**
 * Rows Component
 * @param children {React.ReactNode} Rows children
 * - ------------------- WEB PROPERTIES -------------------------
 * @param className {string} additionnal CSS Classes
 */
const Rows = React.forwardRef((props: RowsProps, ref: React.LegacyRef<HTMLDivElement>) => {
  const { className, ...others } = props 

  const { styled } = useTrilogyContext()
  return (
    <div ref={ref} className={hashClass(styled, clsx("rows", className))} {...others} />
  )

})
export default Rows
