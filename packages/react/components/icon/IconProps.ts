import { IconColor, IconColorValues, IconSize, IconSizeValues, IconStatus, IconStatusValues } from './IconEnum'
import { IconName, IconNameValues } from './IconNameEnum'
import { Accessibility, AlignableProps, Clickable, Dev, Stacked, TrilogyColor, TrilogyColorValues } from '../../objects'
import { CommonProps } from '../../objects/facets/CommonProps'

/**
 * Icon Interface
 */
export interface IconProps extends Stacked, AlignableProps, Clickable, Accessibility, Dev, CommonProps {
  name: IconName | IconNameValues
  status?: IconStatus | IconStatusValues
  badgeContent?: string
  size?: IconSize | IconSizeValues
  circled?: boolean
  stretched?: boolean
  color?: IconColor | IconColorValues | TrilogyColorValues | TrilogyColor | string
  backgroundColor?: TrilogyColor | TrilogyColorValues
  skeleton?: boolean
}
