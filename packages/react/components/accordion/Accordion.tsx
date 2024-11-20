import clsx from 'clsx'
import React from 'react'

import { AccordionProps } from '@/components/accordion/AccordionProps'
import { hashClass } from '@/helpers/hashClassesHelpers'

/**
 * Accordion Component
 * @param className {string} Additionnal CSS Classes
 */
const Accordion = ({ className, testId, ...others }: AccordionProps, ref: React.Ref<HTMLDivElement>) => {
  const classes = hashClass(clsx('accordions', className))
  return <section ref={ref} className={classes} {...others} data-testid={testId} />
}

export default React.forwardRef(Accordion)
