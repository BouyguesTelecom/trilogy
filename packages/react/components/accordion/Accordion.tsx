import * as React from "react"
import { AccordionProps } from "./AccordionProps"
import clsx from "clsx"
import { useTrilogyContext } from "../../context/index"
import { hashClass } from "../..//helpers/hashClassesHelpers"

/**
 * Accordion Component
 * @param className {string} Additionnal CSS Classes
 * @param children {ReactNode}
 */
const Accordion = ({
  className,
  testId,
  ...others
}: AccordionProps): React.JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx("accordions", className))
  return <section className={classes} {...others} data-testid={testId} />
}

export default Accordion
