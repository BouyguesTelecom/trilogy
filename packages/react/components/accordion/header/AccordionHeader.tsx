import clsx from 'clsx'
import React from 'react'

import { AccordionHeaderProps } from '@/components/accordion/header/AccordionHeaderProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers/hashClassesHelpers'

/**
 * Accordion Header
 * @param className {string} Additionnal CSS Classes
 * @param children {React.ReactNode}
 * @param testId
 * @param others
 */
const AccordionHeader = React.forwardRef(
  (
    { children, className, testId, ...others }: AccordionHeaderProps,
    ref: React.Ref<HTMLElement>,
  ): React.JSX.Element => {
    return (
      <summary
        ref={ref}
        data-accordion-header={true}
        className={hashClass(clsx('accordion-header', className))}
        role='button'
        data-testid={testId}
        {...others}
      >
        {children}
      </summary>
    )
  },
)
AccordionHeader.displayName = ComponentName.AccordionHeader
export default AccordionHeader
