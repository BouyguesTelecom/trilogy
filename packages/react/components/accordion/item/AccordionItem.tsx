import { AccordionItemProps, AccordionItemRef, OnClickEvent } from '@/components/accordion/item/AccordionItemProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React from 'react'

/**
 * Accordion Item Component
 * @param active {boolean} Active Accordion Item
 * @param className {string} Additionnal CSS Classes
 * @param id {string} id for accordion item
 * @param onClick {ClickEvent} onClick Event
 * @param disabled {boolean} Disabled AccordionItem
 * @param children {ReactNode}
 */
const AccordionItem = React.forwardRef<AccordionItemRef, AccordionItemProps>(
  ({ open, className, children, id = React.useId(), onClick, disabled, ...others }, ref): JSX.Element => {
    const { styled } = useTrilogyContext()
    const classes = hashClass(styled, clsx('accordion-item', className))
    const ariaProps: { 'aria-disabled'?: boolean; tabIndex?: number } = {}

    if (disabled) {
      ariaProps['tabIndex'] = -1
      ariaProps['aria-disabled'] = true
    }

    return (
      <details
        open={open}
        {...ariaProps}
        data-testid={id}
        className={classes}
        ref={ref}
        id={id}
        {...others}
        onClick={(e: OnClickEvent) => (onClick ? onClick(e) : null)}
      >
        {children}
      </details>
    )
  },
)

AccordionItem.displayName = ComponentName.AccordionItem
export default AccordionItem
