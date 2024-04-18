import * as React from "react"
import clsx from "clsx"
import { ColumnsItem } from "../../columns"
import { SliderItemProps } from "./SliderItemProps"
import { is } from "../../../services"
import { hashClass } from "../../../helpers"
import { useTrilogyContext } from "../../../context"

/**
 * Slider Item component
 * @param className {string} Additionnal css classes
 * @param children {ReactNode} Slider Item child
 * @param active {boolean} Default active item
 * @param size {number} Column Item size (1 - 12)
 */
const SliderItem = ({
  children,
  active,
  className,
  size,
  ...others
}: SliderItemProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(styled, clsx(active && is("active"), className))

  return (
    <ColumnsItem size={size || 12} className={classes} {...others} data-slide>
      {children}
    </ColumnsItem>
  )
}

export default SliderItem
