import { IconColor, IconColorValues, IconName, IconNameValues } from '@/components/icon'

/**
 * Modal Title Interface
 */
export interface ModalTitleProps {
  children?: string
  className?: string
  iconName?: IconName | IconNameValues
  iconColor?: IconColor | IconColorValues
}
