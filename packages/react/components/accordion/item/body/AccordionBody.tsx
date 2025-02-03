import { hashClass } from '@/helpers'
import clsx from 'clsx'
import * as React from 'react'
import { AccordionBodyProps } from './AccordionBodyProps'

/**
 * Accordion Body Component
 * @param children {React.ReactNode} Children for Accordion body
 * - ------------------ WEB PROPERTIES -----------------------
 * @param className {string} Additionnal CSS Classes
 * @param dataId {string} data attribute
 */
const AccordionBody = ({ children, className, id, ...others }: AccordionBodyProps): React.JSX.Element => {
  return (
    <div
      id={id}
      className={hashClass(clsx('accordion-body', className))}
      onClick={(e) => {
        e.stopPropagation()
      }}
      {...others}
    >
      {children}
    </div>
  )
}

export default AccordionBody
