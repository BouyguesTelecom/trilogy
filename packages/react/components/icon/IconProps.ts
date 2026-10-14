import { View } from 'react-native'
import { Accessibility } from '@/objects/facets/Accessibility'
import { AlignableProps } from '@/objects/facets/Alignable'
import { Clickable } from '@/objects/facets/Clickable'
import { Dev } from '@/objects/facets/Dev'
import { Stacked } from '@/objects/facets/Stacked'
import { CommonProps } from '@/objects/facets/CommonProps'
import { IconSize, IconSizeValues } from '@/components/icon/IconEnum'
import { IconName, IconNameValues } from '@/components/icon/IconNameEnum'
import { BackgroundColor, BackgroundColorValues, IconColor } from '@/interfaces/colors'

/**
 * Icon Interface
 */
export interface IconProps
  extends Stacked,
    Omit<AlignableProps, 'verticalAlign'>,
    Clickable,
    Accessibility,
    Dev,
    CommonProps {
  name: IconName | IconNameValues
  size?: IconSize | IconSizeValues
  circled?: boolean
  stretched?: boolean
  color?: IconColor
  backgroundColor?: BackgroundColor | BackgroundColorValues
  skeleton?: boolean
}

export type IconRef = HTMLSpanElement
export type IconNativeRef = View
