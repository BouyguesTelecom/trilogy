import * as React from "react"
import { AccordionProps } from "./AccordionProps"
import clsx from "clsx"
import { useTrilogyContext } from "@/context/index"
import { hashClass } from "@/helpers/hashClassesHelpers"

/**
 * Accordion Component
 * @param className {string} Additionnal CSS Classes
 */
const Accordion = React.forwardRef((props: AccordionProps, ref: React.LegacyRef<HTMLDivElement>) => {
  const {
    className,
    ...others
  } = props

  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx("accordions", className))
  return <section ref={ref} className={classes} {...others} />
})

export default Accordion
