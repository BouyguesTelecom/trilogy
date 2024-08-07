import * as React from "react"
import { ProgressItemProps } from "./ProgressItemProps"
import { is } from "@/services/index"
import { getAlertClassName } from "@/objects"
import { hashClass } from "@/helpers"
import clsx from "clsx"
import { useTrilogyContext } from "@/context"

/**
 * Progress Item component - Only if stacked
 * @param percent {number} Progress percent
 * @param minPercent {number} Default min percent is 100
 * @param maxPercent {number} Default max percent is 100
 * @param alert {AlertState} Progress alert variant (SUCCESS|INFO|WARNING|ERROR)
 * @param children {React.ReactNode}
 * @param accessibilityLabel {string} Accessibility label
 * -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS classes
 */
const ProgressItem = ({
  className,
  percent,
  maxPercent = 100,
  minPercent = 0,
  alert,
  accessibilityLabel,
  ...others
}: ProgressItemProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      "progress-bar",
      alert && is(getAlertClassName(alert)),
      !alert && is("primary"),
      className
    )
  )

  return (
    <div
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
}

export default ProgressItem
