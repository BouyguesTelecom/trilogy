import { View } from 'react-native'
import { Accessibility } from '@/objects/facets/Accessibility'
import { AlignableProps } from '@/objects/facets/Alignable'
import { Clickable } from '@/objects/facets/Clickable'
import { Dev } from '@/objects/facets/Dev'
import { Stacked } from '@/objects/facets/Stacked'
import { TrilogyColor, TrilogyColorValues } from '@/objects/facets/Color'
import { CommonProps } from '@/objects/facets/CommonProps'
import { IconColor, IconColorValues, IconSize, IconSizeValues } from '@/components/icon/IconEnum'
import { IconName, IconNameValues } from '@/components/icon/IconNameEnum'

/**
 * Icon Interface
 */
export interface IconProps extends Stacked, Omit<AlignableProps, 'verticalAlign'>, Clickable, Accessibility, Dev, CommonProps {
  name: IconName | IconNameValues
  size?: IconSize | IconSizeValues
  circled?: boolean
  stretched?: boolean
  color?: IconColor | IconColorValues | TrilogyColorValues | TrilogyColor | string
  backgroundColor?: TrilogyColor | TrilogyColorValues
  skeleton?: boolean
}

export type IconRef = HTMLSpanElement
export type IconNativeRef = View
