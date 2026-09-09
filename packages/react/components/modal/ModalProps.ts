import { ReactNode } from 'react'
import { ModalSize } from '@/components/modal/ModalEnum'
import { View } from 'react-native'
import { ClickEvent } from "@/interfaces/OnClickEvent";
import { Accessibility } from "@/interfaces/Accessibility";
import { Dev } from "@/interfaces/Dev";
import { CommonProps } from "@/interfaces/CommonProps";

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
