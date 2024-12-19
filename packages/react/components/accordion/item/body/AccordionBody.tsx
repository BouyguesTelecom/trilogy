import { AccordionBodyProps } from '@/components/accordion/item/body/AccordionBodyProps'
import { useTrilogyContext } from '@/context'
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
  const { styled } = useTrilogyContext()

  return (
    <div id={id} className={hashClass(styled, clsx('accordion-body', className))} {...others}>
      {children}
    </div>
  )
}

export default AccordionBody
