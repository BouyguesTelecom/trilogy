import { AccordionProps, AccordionRef } from '@/components/accordion/AccordionProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import * as React from 'react'

/**
 * Accordion Component
 * @param id
 * @param className {string} Additionnal CSS Classes
 * @param children
 * @param others
 */
const Accordion = React.forwardRef<AccordionRef, AccordionProps>(({ id, className, children, ...others }, ref) => {
  const classes = hashClass(clsx('accordion', className))
  return (
    <div ref={ref} id={id} className={classes} {...others}>
      {children}
    </div>
  )
})
Accordion.displayName = ComponentName.Accordion
export default Accordion
