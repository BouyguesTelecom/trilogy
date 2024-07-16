import * as React from "react"
import { Icon } from "@/components/icon"
import { ModalTitleProps } from "./ModalTitleProps"
import { hashClass } from "@/helpers"
import clsx from "clsx"
import { useTrilogyContext } from "@/context"
import TextIcon from "@/components/icon/text/TextIcon"

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
  iconName,
  ...others
}: ModalTitleProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const {textId} = others as any

  return (
    <div className={hashClass(styled, clsx("modal-title", className))}>
      {iconName ? (
        <TextIcon
          color={iconColor}
          size={"large"}
          name={iconName}
          content={children}
          position='up'
          textId={textId}
        />
      ) : (
        children
      )}
    </div>
  )
}

export default ModalTitle
