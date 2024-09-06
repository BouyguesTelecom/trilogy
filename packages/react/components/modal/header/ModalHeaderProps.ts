import { IconColor, IconColorValues, IconNameValues } from '@/components/icon'

export interface ModalHeaderProps {
  handleClose: () => void
  title?: string
  iconName?: IconNameValues
  iconColor?: IconColor | IconColorValues
  closeIcon?: boolean
}
