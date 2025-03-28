import { ReactNode } from 'react'
import { ModalSize } from '../../components/modal/ModalEnum'
import { ClickEvent } from '../../events/OnClickEvent'
import { Accessibility, Dev } from '../../objects'
import { CommonProps } from '../../objects/facets/CommonProps'
import { View } from 'react-native'

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

export type ModalRef = HTMLDivElement
export type ModalNativeRef = View
