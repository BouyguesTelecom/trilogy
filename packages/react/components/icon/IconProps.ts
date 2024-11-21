import {
  IconColor,
  IconColorValues,
  IconPosition,
  IconPositionValues,
  IconSize,
  IconSizeValues,
  IconStatus,
  IconStatusPosition,
  IconStatusPositionValues,
  IconStatusValues,
  TextIconMarkup,
  TextIconMarkupValues,
} from '@/components/icon/IconEnum'
import { IconName, IconNameValues } from '@/components/icon/IconNameEnum'
import { Accessibility, AlignableProps, Clickable, Dev, Stacked, TrilogyColor, TrilogyColorValues } from '@/objects'

type Styles = { [key: string]: unknown }

/**
 * Icon Interface
 */
export interface IconProps extends Stacked, AlignableProps, Clickable, Accessibility, Dev {
  name: IconName | IconNameValues
  status?: IconStatus | IconStatusValues
  badgeContent?: string
  size?: IconSize | IconSizeValues
  circled?: boolean
  content?: string | React.ReactNode
  position?: IconPosition | IconPositionValues
  markup?: TextIconMarkup | TextIconMarkupValues
  statusPosition?: IconStatusPosition | IconStatusPositionValues
  stretched?: boolean
  color?: IconColor | IconColorValues | TrilogyColorValues | TrilogyColor | string
  backgroundColor?: TrilogyColor | TrilogyColorValues
  className?: string
  textClassName?: string
  style?: Styles
  skeleton?: boolean
  marginless?: boolean
}
