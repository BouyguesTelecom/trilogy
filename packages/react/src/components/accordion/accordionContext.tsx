import { createContext, useContext, useId, useState, type Context } from "react"

import type { AccordionItemProps } from "./item/accordionItem.types"

export interface AccordionItemState {
  open: boolean
  disabled: boolean
  headerId: string
  bodyId: string
  defaultBodyId: string
  setBodyId: (id: string) => void
  toggle: () => void
}

export const AccordionItemContext: Context<AccordionItemState | null> =
  createContext<AccordionItemState | null>(null)

export function useAccordionItemState({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  disabled = false,
}: AccordionItemProps): AccordionItemState {
  const [uncontrolledOpen, setOpen] = useState(defaultOpen)
  const id = useId()
  const [bodyId, setBodyId] = useState(`${id}-body`)
  const open = controlledOpen ?? uncontrolledOpen
  return {
    open,
    disabled,
    headerId: `${id}-header`,
    bodyId,
    defaultBodyId: `${id}-body`,
    setBodyId,
    toggle: () => {
      if (disabled) return
      const next = !open
      if (controlledOpen === undefined) setOpen(next)
      onOpenChange?.(next)
    },
  }
}

export function useAccordionItem(): AccordionItemState {
  const context = useContext(AccordionItemContext)
  if (!context)
    throw new Error("Accordion parts must be inside an AccordionItem")
  return context
}
