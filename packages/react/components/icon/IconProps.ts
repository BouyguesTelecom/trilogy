import {
  IconColor,
  IconColorValues,
  IconSize,
  IconSizeValues,
  IconStatus,
  IconStatusPosition,
  IconStatusPositionValues,
  IconStatusValues,
} from './IconEnum'
import { IconName, IconNameValues } from './IconNameEnum'
import { Accessibility, AlignableProps, Clickable, Dev, Stacked, TrilogyColor, TrilogyColorValues } from '@/objects'

/**
 * Icon Interface
 */
export interface IconProps extends Stacked, AlignableProps, Clickable, Accessibility, Dev {
  name: IconName | IconNameValues
  status?: IconStatus | IconStatusValues
  statusPosition?: IconStatusPosition | IconStatusPositionValues
  badgeContent?: string
  size?: IconSize | IconSizeValues
  circled?: boolean
  stretched?: boolean
  color?: IconColor | IconColorValues | TrilogyColorValues | TrilogyColor | string
  backgroundColor?: TrilogyColor | TrilogyColorValues
  className?: string
  skeleton?: boolean
}
