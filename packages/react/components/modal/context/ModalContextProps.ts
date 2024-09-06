import { KeyboardEvent } from 'react'

export interface ModalContextProps {
  idDescription: string
  idTitle: string
  pushActionRefs: (index: number, element: HTMLButtonElement) => void
  setTriggerModalRef: (element: HTMLButtonElement) => void
  tabNavigate: (e: KeyboardEvent<HTMLDivElement>) => void
  focusFirstCta: () => void
  focusTriggerModal: () => void
}
