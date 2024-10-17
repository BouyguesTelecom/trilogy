import * as React from "react"
import clsx from "clsx"
import { ColumnsProps } from "./ColumnsProps"
import { is, has } from "@/services/classify"
import { hashClass } from "@/helpers"
import { useTrilogyContext } from "@/context"
import {ColumnsGap} from "@/components/columns/ColumnsTypes";

/**
 * Columns Component
 * @param centered {boolean} Center columns
 * @param verticalCentered {boolean} Vertical centered columns
 * @param marginSize {ColumnsSize} Delete margins between columns with Size
 * @param scrollable {boolean} Make colomns scrollable to vertical
 * @param children {React.ReactNode}
 * @param marginless {boolean}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param multiline {boolean} Multiline Columns
 * @param className {string} Additionnal CSS Classes
 * @param mobile {boolean} Responsive mode
 */
const Columns = React.forwardRef((props:ColumnsProps, ref: React.LegacyRef<HTMLDivElement>) => {
  const {
    className,
    multiline,
    scrollable,
    nbCols,
    mobile,
    centered,
    verticalCentered,
    gap,
    fullBleed,
    marginSize,
    ...others
  } = props

  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      "columns",
      multiline && is("multiline"),
      nbCols && has(`${nbCols}-cols`),
      fullBleed && is("fullbleed"),
      scrollable && is("scrollable"),
      gap && has(`gap-${gap}`),
      mobile && is("mobile"),
      centered && is("centered"),
      verticalCentered && is("vcentered"),
      marginSize &&  is(`${marginSize}`),
      className
    )
  )

  return <div ref={ref} className={classes} {...others} />
})

export default Columns
