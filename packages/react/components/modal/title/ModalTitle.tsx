import * as React from "react"
import { Icon } from "../../icon"
import { ModalTitleProps } from "./ModalTitleProps"
import { hashClass } from "../../../helpers"
import clsx from "clsx"
import { useTrilogyContext } from "../../../context"

/**
 * Modal Title Component
 * @param children {string}
 * @param className {string} clsx
 * @param iconName {IconName} IconName for icon title
 * @param iconColor {IconColor} IconColor for icon title
 */
const ModalTitle = ({
  children,
  className,
  iconColor,
  iconName
}: ModalTitleProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  return (
    <div className={hashClass(styled, clsx("modal-title", className))}>
      {iconName ? (
        <Icon
          color={iconColor}
          size={"large"}
          name={iconName}
          content={children}
          position='up'
        />
      ) : (
        children
      )}
    </div>
  )
}

export default ModalTitle
