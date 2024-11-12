import * as React from "react"
import clsx from "clsx"
import { ColumnsProps } from "./ColumnsProps"
import { is, has } from "@/services/classify"
import { hashClass } from "@/helpers"
import { useTrilogyContext } from "@/context"
import {getAlignClassName} from "@/objects";

/**
 * Columns Component
 * @param centered {boolean} Center columns
 * @param scrollable {boolean} Make colomns scrollable to vertical
 * @param children {React.ReactNode}
 * @param marginless {boolean} delete margin
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
    mobile,
    centered,
    gap,
    fullBleed,
    verticalAlign,
    ...others
  } = props

  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      "columns",
      multiline && is("multiline"),
      fullBleed && is("fullbleed"),
      scrollable && is("scrollable"),
      gap && has(`gap-${gap}`),
      typeof gap !== 'undefined' && gap === 0 && is("gapless"),
      mobile && is("mobile"),
      centered && is("centered"),
      verticalAlign && is(getAlignClassName(verticalAlign)),
      className
    )
  )

  return <div ref={ref} className={classes} {...others} />
})

export default Columns
