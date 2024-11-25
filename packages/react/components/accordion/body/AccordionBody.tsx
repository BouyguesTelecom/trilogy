import clsx from 'clsx'
import React from 'react'

import { AccordionBodyProps } from '@/components/accordion/body/AccordionBodyProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers/hashClassesHelpers'

/**
 * Accordion Body Component
 * @param children {React.ReactNode} Children for Accordion body
 * - ------------------ WEB PROPERTIES -----------------------
 * @param className {string} Additionnal CSS Classes
 * @param testId {string} Test Id for Test Integration
 */
const AccordionBody = React.forwardRef(
  (
    { children, className, testId, ...others }: AccordionBodyProps,
    ref: React.Ref<HTMLDivElement>,
  ): React.JSX.Element => {
    return (
      <div
        ref={ref}
        data-accordion-body={true}
        data-testid={testId}
        className={hashClass(clsx('accordion-body is-clipped', className))}
        {...others}
      >
        <div className={hashClass(clsx('accordion-content'))}>{children}</div>
      </div>
    )
  },
)

AccordionBody.displayName = ComponentName.AccordionBody
export default AccordionBody
