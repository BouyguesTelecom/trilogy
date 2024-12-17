import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import * as React from 'react'
import { AccordionProps } from './AccordionProps'

/**
 * Accordion Component
 * @param id
 * @param className {string} Additionnal CSS Classes
 * @param children
 * @param others
 */
const Accordion = ({ id, className, children, ...others }: AccordionProps) => {
  const classes = hashClass(clsx('accordion', className))
  return (
    <div id={id} className={classes} {...others}>
      {children}
    </div>
  )
}

export default Accordion
