import { View } from 'react-native'
import { IconColor, IconColorValues, IconSize, IconSizeValues } from '@/components/icon/IconEnum'
import { IconName, IconNameValues } from '@/components/icon/IconNameEnum'
import { Accessibility } from "@/interfaces/Accessibility";
import { AlignableProps } from "@/interfaces/Alignable";
import { Clickable } from "@/interfaces/Clickable";
import { Dev } from "@/interfaces/Dev";
import { Stacked } from "@/interfaces/Stacked";
import { TrilogyColor, TrilogyColorValues } from "@/interfaces/Color";
import { CommonProps } from "@/interfaces/CommonProps";

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
  color?: IconColor | IconColorValues | TrilogyColorValues | TrilogyColor | string
  backgroundColor?: TrilogyColor | TrilogyColorValues
  skeleton?: boolean
}

export type IconRef = HTMLSpanElement
export type IconNativeRef = View
