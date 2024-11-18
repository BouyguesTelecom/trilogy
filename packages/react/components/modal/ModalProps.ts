import { ClickEvent } from '../../events/OnClickEvent'
import { Accessibility, Dev } from '../../objects'
import { ReactNode } from 'react'
import { ModalSize } from '../../components/modal/ModalEnum'
import { CommonProps } from '../../objects/facets/CommonProps'

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
}
