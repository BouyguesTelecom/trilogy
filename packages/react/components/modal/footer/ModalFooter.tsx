import * as React from "react"
import { ModalFooterProps } from "./ModalFooterProps"
import { hashClass } from "@/helpers"
import clsx from "clsx"
import { useTrilogyContext } from "@/context"

/**
 * Modal Title Component
 * @param children {React.ReactNode}
 * @param className {string}
 */
const ModalFooter = ({
  children,
  className,
}: ModalFooterProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  return (
    <div className={hashClass(styled, clsx("modal-footer", className))}>
      {children}
    </div>
  )
}

export default ModalFooter
