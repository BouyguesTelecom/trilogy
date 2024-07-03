import * as React from "react"
import { IconProps } from "@/components/icon/IconProps"
import { IconStatus } from "@/components/icon/IconEnum"
import { getStatusBackground, has, is } from "@/services/index"
import {
  getBackgroundClassName,
  getTextClassName,
  TrilogyColor,
} from "@/objects"
import clsx from "clsx"
import { hashClass } from "@/helpers"
import { useTrilogyContext } from "@/context"

const CircleIcon = ({
  className,
  name,
  status,
  size,
  color,
  backgroundColor,
  testId,
}: IconProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const background =
    (backgroundColor && has(getBackgroundClassName(backgroundColor))) ||
    getStatusBackground(status || "", IconStatus.INFO) ||
    has(getBackgroundClassName(TrilogyColor.MAIN))

  const classes = hashClass(
    styled,
    clsx(
      "icon",
      color ? has(getTextClassName(color)) : has("text-white"),
      color ? is(color) : is(TrilogyColor.BACKGROUND),
      [is(`${size}`)],
      is("circled"),
      background,
      className
    )
  )

  const circledIconClasses = hashClass(styled, clsx(name))

  return (
    <span className={classes} data-testid={testId}>
      <i className={circledIconClasses} />
    </span>
  )
}

export default CircleIcon
