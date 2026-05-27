import * as React from 'react'
import { AccordionProps, AccordionRef } from '@/components/accordion/AccordionProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'

/**
 * Accordion Component
 * @param children {React.ReactNode} Accordion items (AccordionItem components)
 * @param testId {string} Test Id for Test Integration
 * @param accessibilityLabel {string} Accessibility label
 * @param id {string} Custom id attribute
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 */
const Accordion = React.forwardRef<AccordionRef, AccordionProps>(({ id, className, children, testId, ...others }, ref) => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('accordion', className))

  return (
    <div ref={ref} id={id} className={classes} data-testid={testId} {...others}>
      <p>test</p>
      {children}
    </div>
  )
})
Accordion.displayName = ComponentName.Accordion
export default Accordion
