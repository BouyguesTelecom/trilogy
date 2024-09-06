import { ClickEvent } from '@/events/OnClickEvent'
import { Dispatch, KeyboardEvent, SetStateAction } from 'react'

export interface ModalContextProps {
  idDescription: string
  idTitle: string
  pushActionRefs: (index: number, element: HTMLButtonElement) => void
  setTriggerModalRef: (element: HTMLButtonElement) => void
  tabNavigate: (e: KeyboardEvent<HTMLDivElement>) => void
  focusFirstCta: () => void
  focusTriggerModal: () => void
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  handleCloseModal?: ClickEvent
  onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void
  haveTitle: boolean
  setHaveTitle: Dispatch<SetStateAction<boolean>>
}
