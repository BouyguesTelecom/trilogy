import { ClickEvent } from '@/events/OnClickEvent'
import { Accessibility, Clipped, Dev } from '@/objects'
import { ReactNode } from 'react'
import { ModalSize } from '@/components/modal/ModalEnum'
import { CommonProps } from '@/objects/facets/CommonProps'

/**
 * Modal Interface
 */
export interface ModalProps extends Clipped, Accessibility, Dev, CommonProps {
  children?: React.ReactNode
  active?: boolean
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
