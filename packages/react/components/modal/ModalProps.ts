import { IconColor, IconColorValues, IconName, IconNameValues } from '@/components/icon'
import { ClickEvent } from '@/events/OnClickEvent'
import { Accessibility, Clickable, Clipped, Fullwidth } from '@/objects'
import { ModalMarkup, ModalMarkupValues } from './ModalEnum'

export interface ModalContentButtonProps extends Clickable {
  children?: string
}

export interface CloseButtonProps {
  onCloseFunc?: ClickEvent
}

/**
 * Modal Interface
 */
export interface ModalProps extends Clipped, Fullwidth, Accessibility {
  children?: React.ReactNode
  active?: boolean
  title?: string
  content?: string | React.ReactNode
  footer?: string | React.ReactNode
  className?: string
  contentClassNames?: string
  footerClassNames?: string
  iconName?: IconName | IconNameValues
  iconColor?: IconColor | IconColorValues
  triggerContent?: string
  triggerClassNames?: string
  triggerMarkup?: ModalMarkup | ModalMarkupValues
  ctaContent?: string
  closeIcon?: boolean
  ctaOnClick?: ClickEvent
  ctaCancelOnClick?: ClickEvent
  onClose?: ClickEvent
  onOpen?: ClickEvent
  bottom?: boolean
  panel?: boolean
  onModalHide?: () => void
  disableHandlingClickOutside?: boolean
  swipable?: boolean
}
