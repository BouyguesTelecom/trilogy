import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import { JSX, forwardRef } from 'react'
import { AccordionBodyProps, AccordionBodyRef } from './AccordionBodyProps'

/**
 * Accordion Body Component
 * @param children {ReactNode} Children for Accordion body
 * @param id {string} Custom id attribute
 * @param testId {string} Test Id for Test Integration
 * - ------------------ WEB PROPERTIES -----------------------
 * @param className {string} Additional CSS Classes
 */
const AccordionBody = forwardRef<AccordionBodyRef, AccordionBodyProps>(
  ({ children, className, id, testId, ...others }, ref): JSX.Element => {
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
