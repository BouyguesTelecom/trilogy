import { AccordionItemProps, AccordionItemRef } from '@/components/accordion/item/AccordionItemProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React from 'react'
import { useAccordionBody } from '../hooks/useAccordionItem'

/**
 * Accordion Item Component
 * @param active {boolean} Active Accordion Item
 * @param className {string} Additional CSS Classes
 * @param id {string} id for accordion item
 * @param onClick {ClickEvent} onClick Event
 * @param disabled {boolean} Disabled AccordionItem
 * @param children {ReactNode}
 */
const AccordionItem = React.forwardRef<AccordionItemRef, AccordionItemProps>(
  ({ open, className, children, id = React.useId(), onClick, disabled, ...others }, ref): JSX.Element => {
    const classes = hashClass(clsx('accordion-item', className))
    const ariaProps: { 'aria-disabled'?: boolean; tabIndex?: number } = {}
    const { handleClick, onKeyDown } = useAccordionBody({ disabled, onClick })

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
        onClick={handleClick}
        onKeyDown={onKeyDown}
      >
        {children}
      </details>
    )
  },
)

AccordionItem.displayName = ComponentName.AccordionItem
export default AccordionItem
