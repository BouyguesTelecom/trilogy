import * as React from "react"
import { ProgressProps } from "./ProgressProps"
import { is, has } from "@/services/index"
import { Text, TextLevels } from "../text"
import { Columns, ColumnsItem } from "../columns"
import { getStatusClassName } from "@/objects"
import { hashClass } from "@/helpers"
import clsx from "clsx"
import { useTrilogyContext } from "@/context"

/**
 * Progress component
 * @param children {ReactNode} Use Children it only if stacked progress
 * @param percent {number} Progress percent
 * @param maxPercent {number} Default max percent is 100
 * @param status {StatusState} Progress status variant (SUCCESS|INFO|WARNING|ERROR)
 * @param small {boolean} Small progress
 * @param stacked {boolean} Stacked progress
 * @param uniqueLegend {string} Unique legend
 * @param firstExtremLegend {string} First extremity legend, only with secondExtremLegend property
 * @param secondExtremLegend {string} Second extremity legend, only with firstExtremLegend property
 * -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS classes
 */
const Progress = React.forwardRef((props: ProgressProps, ref: React.LegacyRef<HTMLDivElement>) => {
  const {
    children,
    className,
    percent,
    maxPercent = 100,
    status,
    small,
    stacked,
    uniqueLegend,
    firstExtremLegend,
    secondExtremLegend,
    ...others
  } = props

  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      "progress",
      status && is(getStatusClassName(status)),
      !status && is("primary"),
      small && is("small"),
      className
    )
  )

  const stackedClasses = hashClass(
    styled,
    clsx("progress", stacked && is("stacked"), className)
  )

  if (children && stacked) {
    return (
      <div ref={ref} className={stackedClasses} {...others}>
        {children}
      </div>
    )
  }

  return (
    <>
      <progress
        className={classes}
        value={percent}
        max={maxPercent}
        {...others}
      >
        {percent}
      </progress>
      {uniqueLegend && (
        <Text className={has("text-centered")} level={TextLevels.TWO}>
          {uniqueLegend}
        </Text>
      )}
      {firstExtremLegend && secondExtremLegend && (
        <Columns mobile>
          <ColumnsItem>
            <Text level={TextLevels.TWO}>{firstExtremLegend}</Text>
          </ColumnsItem>
          <ColumnsItem narrow>
            <Text level={TextLevels.TWO}>{secondExtremLegend}</Text>
          </ColumnsItem>
        </Columns>
      )}
    </>
  )

})

export default Progress
