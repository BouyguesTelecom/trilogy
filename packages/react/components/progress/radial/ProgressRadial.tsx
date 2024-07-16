/* eslint-disable react/jsx-no-useless-fragment */
import * as React from "react"
import { ProgressRadialProps } from "./ProgressRadialProps"
import { is } from "@/services/index"
import { hashClass } from "@/helpers"
import clsx from "clsx"
import ProgressRadialItem from "./item"
import { useTrilogyContext } from "@/context"

/**
 * Progress Radial component
 * @param percent {number} Progress percent
 * @param label {string} Custom label
 * @param description {string} Custom description
 * @param children {React.ReactNode}
 * @param align {Alignable} Progress Radial Alignement
 * @param skeleton {boolean} Skeleton Progress Radial
 * -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS classes
 * -------------------------- NATIVE PROPERTIES -------------------------------
 */
const ProgressRadial = ({
  className,
  percent,
  label,
  description,
  skeleton,
  stacked,
  children,
  ...others
}: ProgressRadialProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx("progress-circle", skeleton && is("loading"), className)
  )

  const ProgressContent = () => {
    if (label || description) {
      return (
        <div className={hashClass(styled, clsx("progress-circle-content"))}>
          {label && (
            <div className={hashClass(styled, clsx("progress-circle-title"))}>
              {label}
            </div>
          )}
          {description && (
            <div className={hashClass(styled, clsx("progress-circle-sub"))}>
              {description}
            </div>
          )}
        </div>
      )
    }
    return null
  }

  // If we have children
  // & if children = array or string
  if (stacked && children) {
    const colors = ["--secondary", "--tertiary", "--warning", "--empty"]
    const percents: { [key: string]: number } = {}
    if (React.isValidElement(children) && Array.isArray(children)) {
      const childs = children.map((child, i) => {
        const color = child?.props?.color
        const percent = child?.props?.percent
        if (color && percent && !percents[`--${color}`]) {
          percents[`--${color}`] = percent
          return (
            <ProgressRadialItem
              key={`radial${i}`}
              percent={percent}
              color={color}
            />
          )
        }
        return null
      })

      colors.forEach((color: string) => {
        if (!Object.keys(percents).includes(color)) percents[color] = 0
      })

      return (
        <div className={classes} {...others} style={percents}>
          {childs}
          {<ProgressContent />}
        </div>
      )
    }

    if (
      React.isValidElement(children) &&
      children?.props?.percent &&
      children?.props.color
    ) {
      const color = children?.props?.color
      const percent = children?.props?.percent
      const style: { [key: string]: number } = {
        [color]: percent,
        "--tertiary": 0,
        "--warning": 0,
        "--empty": 0,
      }
      return (
        <div className={classes} {...others} style={style}>
          <ProgressRadialItem percent={percent} color={color} />
          {<ProgressContent />}
        </div>
      )
    }
  }

  // If we don't have multiple pourcents
  const style2: { [key: string]: number } = {
    "--secondary": percent ?? 1,
    "--tertiary": 0,
    "--warning": 0,
    "--empty": 0,
  }
  return (
    <div className={classes} {...others} style={style2}>
      <div
        className={hashClass(
          styled,
          clsx("progress-circle-slice progress-circle-background-secondary")
        )}
      ></div>
      {<ProgressContent />}
    </div>
  )
}

export default ProgressRadial
