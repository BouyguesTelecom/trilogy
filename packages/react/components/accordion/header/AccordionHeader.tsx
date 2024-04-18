import * as React from "react"
import { AccordionHeaderProps } from "./AccordionHeaderProps"
import clsx from "clsx"
import { hashClass } from "../../../helpers"
import { useTrilogyContext } from "../../../context"

/**
 * Accordion Header
 * @param className {string} Additionnal CSS Classes
 * @param children {React.ReactNode}
 * @param testId
 * @param others
 */
const AccordionHeader = ({
  children,
  className,
  testId,
  dataId,
  ...others
}: AccordionHeaderProps): React.JSX.Element => {
  const { styled } = useTrilogyContext()

  return (
    <label
      data-accordion-header={true}
      className={hashClass(styled, clsx("accordion-header", className))}
      aria-label='toggle'
      {...others}
      data-testid={testId}
      htmlFor={`toggle_${dataId}`}
    >
      {children}
      <div className={hashClass(styled, clsx("toggle"))} />
    </label>
  )
}

export default AccordionHeader
