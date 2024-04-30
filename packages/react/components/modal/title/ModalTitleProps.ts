import { IconColor, IconColorValues, IconName, IconNameValues } from '../../icon'

/**
 * Modal Title Interface
 */
export interface ModalTitleProps {
  children?: string
  className?: string
  iconName?: IconName | IconNameValues
  iconColor?: IconColor | IconColorValues
}
