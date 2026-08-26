import { TouchableOpacity } from 'react-native'
import { CheckboxProps } from '@/components/checkbox/CheckboxProps'
import { IconName, IconNameValues } from '@/components/icon/index'
import { ReactNode } from 'react'
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";
import { VariantProps } from "@/interfaces/Variant";

export interface CheckboxTileProps extends Omit<CheckboxProps, 'label'>, CommonProps, Dev {
  horizontal?: boolean
  icon?: IconName | IconNameValues
  description?: string | React.ReactNode
  sticker?: string
  stickerVariant?: VariantProps['variant']
  label?: string | ReactNode
}

export type CheckboxTileRef = HTMLDivElement
export type CheckboxTileNativeRef = TouchableOpacity
