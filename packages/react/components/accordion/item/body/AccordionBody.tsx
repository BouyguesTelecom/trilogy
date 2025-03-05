import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import * as React from 'react'
import { AccordionBodyProps, AccordionBodyRef } from './AccordionBodyProps'
import { useAccordionBody } from './hooks/useAccordionBoy'

/**
 * Accordion Body Component
 * @param children {React.ReactNode} Children for Accordion body
 * - ------------------ WEB PROPERTIES -----------------------
 * @param className {string} Additionnal CSS Classes
 * @param dataId {string} data attribute
 */
const AccordionBody = React.forwardRef<AccordionBodyRef, AccordionBodyProps>(
  ({ children, className, id, ...others }, ref): React.JSX.Element => {
    const { onClick } = useAccordionBody()

    return (
      <div ref={ref} id={id} className={hashClass(clsx('accordion-body', className))} onClick={onClick} {...others}>
        {children}
      </div>
    )
  },
)

AccordionBody.displayName = ComponentName.AccordionBody
export default AccordionBody
