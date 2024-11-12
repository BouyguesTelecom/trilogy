import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import * as React from 'react'
import { AccordionBodyProps } from './AccordionBodyProps'

/**
 * Accordion Body Component
 * @param children {React.ReactNode} Children for Accordion body
 * - ------------------ WEB PROPERTIES -----------------------
 * @param className {string} Additionnal CSS Classes
 * @param testId {string} Test Id for Test Integration
 */
const AccordionBody = ({ children, className, testId, ...others }: AccordionBodyProps): React.JSX.Element => {
  const { styled } = useTrilogyContext()

  return (
    <div
      data-accordion-body={true}
      data-testid={testId}
      className={hashClass(clsx('accordion-body is-clipped', className))}
      {...others}
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      <div className={hashClass(clsx('accordion-content'))}>{children}</div>
    </div>
  )
}

export default AccordionBody
