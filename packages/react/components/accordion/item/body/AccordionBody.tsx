import { AccordionBodyProps } from '@/components/accordion/item/body/AccordionBodyProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React from 'react'

/**
 * Accordion Body Component
 * @param children {React.ReactNode} Children for Accordion body
 * - ------------------ WEB PROPERTIES -----------------------
 * @param className {string} Additionnal CSS Classes
 * @param dataId {string} data attribute
 */
const AccordionBody = ({ children, className, id, ...others }: AccordionBodyProps): React.JSX.Element => {
  return (
    <div id={id} className={hashClass(clsx('accordion-body', className))} {...others}>
      {children}
    </div>
  )
}

export default AccordionBody
