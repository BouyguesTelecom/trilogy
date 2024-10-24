import * as React from "react"
import { ProgressItemProps } from "./ProgressItemProps"
import { is } from "@/services/index"
import { getStatusClassName } from "@/objects"
import { hashClass } from "@/helpers"
import clsx from "clsx"
import { useTrilogyContext } from "@/context"

/**
 * Progress Item component - Only if stacked
 * @param percent {number} Progress percent
 * @param status {StatusState} Progress status variant (SUCCESS|INFO|WARNING|ERROR)
 * @param children {React.ReactNode}
 * -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS classes
 * @param accessibilityLabel {string} Accessibility label
 * @param minPercent {number} Default min percent is 100
 * @param maxPercent {number} Default max percent is 100
 */
const ProgressItem = React.forwardRef((props: ProgressItemProps, ref: React.LegacyRef<HTMLDivElement>) => {
  const {
    className,
    percent,
    maxPercent = 100,
    minPercent = 0,
    status,
    accessibilityLabel,
    ...others
  } = props

  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      "progress-bar",
      status && is(getStatusClassName(status)),
      !status && is("primary"),
      className
    )
  )

  return (
    <div
      ref={ref}
      {...(percent && { style: { width: `${percent}%` } })}
      className={classes}
      role='progressbar'
      aria-valuenow={percent}
      aria-valuemin={minPercent}
      aria-valuemax={maxPercent}
      aria-label={accessibilityLabel}
      {...others}
    />
  )
})

export default ProgressItem
