import clsx from 'clsx'
import React from 'react'

import { AccordionItemProps } from '@/components/accordion/item/AccordionItemProps'
import { useAccordionItem } from '@/components/accordion/item/hook/useAccordionItem'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { mergeRefs } from '@/helpers/mergeRefs'

/**
 * Accordion Item Component
 * @param active {boolean} Active Accordion Item
 * @param className {string} Additionnal CSS Classes
 * @param id {string} id for accordion item
 * @param onClick {ClickEvent} onClick Event
 * @param disabled {boolean} Disabled AccordionItem
 * @param children {ReactNode}
 * @param onOpen {Function} onOpen Accordion Item Function
 * @param onClose {Function} onClose Accordion Item Function
 */
const AccordionItem = (
  {
    active,
    className,
    children,
    id = React.useId(),
    onClick,
    disabled,
    onClose,
    onOpen,
    ...others
  }: AccordionItemProps,
  ref: React.Ref<HTMLDetailsElement>,
): JSX.Element => {
  const { isActive, collapsedHeight, expandedHeight, localRef, handleClick } = useAccordionItem({
    active,
    onOpen,
    onClick,
    onClose,
  })

  const classes = hashClass(clsx('accordion', className))
  const ariaProps: { 'aria-disabled'?: boolean; tabIndex?: number } = {}

  let childrenElement
  if (children) {
    childrenElement = Array.isArray(children)
      ? children.map((child, index: number) => {
          return React.cloneElement(child as React.ReactElement, {
            key: `article-${index}`,
            disabled,
          })
        })
      : children
  }

  if (disabled) {
    ariaProps['tabIndex'] = -1
    ariaProps['aria-disabled'] = true
  }

  return (
    <details
      open={isActive}
      data-testid={id}
      className={classes}
      ref={mergeRefs([localRef, ref])}
      id={id}
      data-collapsed={collapsedHeight}
      data-expanded={expandedHeight}
      onClick={handleClick}
      {...ariaProps}
      {...others}
    >
      {childrenElement}
    </details>
  )
}

export default React.forwardRef(AccordionItem)
