import { TouchableOpacity } from 'react-native'
import { CheckboxProps } from '@/components/checkbox/CheckboxProps'
import { IconName, IconNameValues } from '@/components/icon'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { VariantProps } from '@/objects/facets/Variant'
import { ReactNode } from 'react'

export interface CheckboxTileProps extends Omit<CheckboxProps, 'label'>, CommonProps, Dev {
  horizontal?: boolean
  icon?: IconName | IconNameValues
  description?: string | ReactNode
  sticker?: string
  stickerVariant?: VariantProps['variant']
  label?: string | ReactNode
}

export type CheckboxTileRef = HTMLDivElement
export type CheckboxTileNativeRef = TouchableOpacity
