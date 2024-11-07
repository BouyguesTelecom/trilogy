import { ClickEvent } from '@/events/OnClickEvent'
import { Accessibility, Clipped, Dev } from '@/objects'
import { ReactNode } from 'react'
import { ModalSize } from '@/components/modal/ModalEnum'

/**
 * Modal Interface
 */
export interface ModalProps extends Clipped, Accessibility, Dev {
  children?: React.ReactNode
  active?: boolean
  className?: string
  trigger?: ReactNode
  hideCloseButton?: boolean
  onClose?: ClickEvent
  onOpen?: ClickEvent
  bottom?: boolean
  panel?: boolean
  onModalHide?: () => void
  disableHandlingClickOutside?: boolean
  swipable?: boolean
  size?: ModalSize
}
