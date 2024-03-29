import { IconColor, IconColorValues, IconName, IconNameValues, IconSize, IconSizeValues } from '../../icon'

export interface SliceIconProps {
  children?: React.ReactNode
  className?: string
  iconName: IconName | IconNameValues
  iconSize?: IconSize | IconSizeValues
  iconColor?: IconColor | IconColorValues
}
