import * as React from "react"
import { ProgressProps } from "./ProgressProps"
import { is, has } from "@/services/index"
import { Text, TextLevels } from "../text"
import { Columns, ColumnsItem } from "../columns"
import { getAlertClassName } from "@/objects"
import { hashClass } from "@/helpers"
import clsx from "clsx"
import { useTrilogyContext } from "@/context"

/**
 * Progress component
 * @param children {ReactNode} Use Children it only if stacked progress
 * @param percent {number} Progress percent
 * @param maxPercent {number} Default max percent is 100
 * @param alert {AlertState} Progress alert variant (SUCCESS|INFO|WARNING|ERROR)
 * @param small {boolean} Small progress
 * @param stacked {boolean} Stacked progress
 * @param uniqueLegend {string} Unique legend
 * @param firstExtremLegend {string} First extremity legend, only with secondExtremLegend property
 * @param secondExtremLegend {string} Second extremity legend, only with firstExtremLegend property
 * -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS classes
 */
const Progress = ({
  children,
  className,
  percent,
  maxPercent = 100,
  alert,
  small,
  stacked,
  uniqueLegend,
  firstExtremLegend,
  secondExtremLegend,
  ...others
}: ProgressProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      "progress",
      alert && is(getAlertClassName(alert)),
      !alert && is("primary"),
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
      <div className={stackedClasses} {...others}>
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
        <Columns mobile marginSize={3}>
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
}

export default Progress
