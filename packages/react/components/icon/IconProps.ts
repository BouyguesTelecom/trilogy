import {
  IconSize,
  IconStatus,
  IconPosition,
  TextIconMarkup,
  IconStatusPosition,
  IconColor,
  IconStatusValues,
  IconSizeValues,
  IconPositionValues,
  IconStatusPositionValues,
  IconColorValues,
  TextIconMarkupValues,
} from './IconEnum'
import { IconName, IconNameValues } from './IconNameEnum'
import { Stacked } from '../../objects/facets/Stacked'
import { AlignableProps } from '../../objects/facets/Alignable'
import { Accessibility, Clickable, TrilogyColor, TrilogyColorValues } from '../../objects'

type Styles = { [key: string]: unknown }

/**
 * Icon Interface
 */
export interface IconProps extends Stacked, AlignableProps, Clickable, Accessibility {
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
