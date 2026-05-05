import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import * as React from 'react'
import { AccordionBodyProps, AccordionBodyRef } from './AccordionBodyProps'

/**
 * Accordion Body Component
 * @param children {React.ReactNode} Children for Accordion body
 * @param id {string} Custom id attribute
 * @param testId {string} Test Id for Test Integration
 * - ------------------ WEB PROPERTIES -----------------------
 * @param className {string} Additional CSS Classes
 */
const AccordionBody = React.forwardRef<AccordionBodyRef, AccordionBodyProps>(
  ({ children, className, id, testId, ...others }, ref): React.JSX.Element => {
    const { styled } = useTrilogyContext()

    return (
      <div
        data-testid={testId}
        ref={ref}
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
  },
)

AccordionBody.displayName = ComponentName.AccordionBody
export default AccordionBody
