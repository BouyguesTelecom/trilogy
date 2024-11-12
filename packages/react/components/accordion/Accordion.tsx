import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import * as React from 'react'
import { AccordionProps } from './AccordionProps'

/**
 * Accordion Component
 * @param className {string} Additionnal CSS Classes
 */
const Accordion = React.forwardRef((props: AccordionProps, ref: React.LegacyRef<HTMLDivElement>) => {
  const { className, testId, ...others } = props

  const { styled } = useTrilogyContext()
  const classes = hashClass(clsx('accordions', className))
  return <section ref={ref} className={classes} {...others} data-testid={testId} />
})

export default Accordion
