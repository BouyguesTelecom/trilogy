import { ModalSize } from '@/components/modal/ModalEnum'
import { ClickEvent } from '@/events/OnClickEvent'
import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { ReactNode } from 'react'

/**
 * Modal Interface
 */
export interface ModalProps extends Accessibility, Dev, CommonProps {
  children?: React.ReactNode
  active?: boolean
  trigger?: ReactNode
  hideCloseButton?: boolean
  onClose?: ClickEvent
  onOpen?: ClickEvent
  panel?: boolean
  onModalHide?: () => void
  unClosable?: boolean
  size?: ModalSize
  title?: string
}
