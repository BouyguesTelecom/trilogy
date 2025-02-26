import { View } from 'react-native'
import { Accessibility, AlignableProps, Clickable, Dev, Stacked, TrilogyColor, TrilogyColorValues } from '../../objects'
import { CommonProps } from '../../objects/facets/CommonProps'
import { IconColor, IconColorValues, IconSize, IconSizeValues } from './IconEnum'
import { IconName, IconNameValues } from './IconNameEnum'

/**
 * Icon Interface
 */
export interface IconProps extends Stacked, Clickable, Accessibility, Dev, CommonProps {
  name: IconName | IconNameValues
  size?: IconSize | IconSizeValues
  circled?: boolean
  stretched?: boolean
  color?: IconColor | IconColorValues | TrilogyColorValues | TrilogyColor | string
  backgroundColor?: TrilogyColor | TrilogyColorValues
  skeleton?: boolean
}

/**
 * Icon Native Interface
 */
export interface IconNativeProps extends IconProps, Omit<AlignableProps, 'verticalAlign'> {}

export type IconRef = HTMLSpanElement
export type IconNativeRef = View
