import { TouchableOpacity } from 'react-native'
import { IconName, IconNameValues } from '@/components/icon/index'
import { RadioNativeProps, RadioProps } from '@/components/radio/RadioProps'
import { ReactNode } from 'react'
import { Dev } from "@/interfaces/Dev";
import { VariantProps } from "@/interfaces/Variant";

interface RadioTilePropsCommon extends Dev {
  horizontal?: boolean
  icon?: IconName | IconNameValues
  description?: string | React.ReactNode
  sticker?: string
  stickerVariant?: VariantProps['variant']
  label?: string | ReactNode
}

export interface RadioTileProps extends Omit<RadioProps, 'label'>, RadioTilePropsCommon {}
export interface RadioTileNativeProps extends Omit<RadioNativeProps, 'label'>, RadioTilePropsCommon {}

export type RadioTileRef = HTMLDivElement
export type RadioTileNativeRef = TouchableOpacity
