import * as React from 'react'
import { AccordionBodyProps } from './AccordionBodyProps'
import clsx from 'clsx'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'

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
    <div
      id={id}
      className={hashClass(styled, clsx('accordion-body', className))}
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
