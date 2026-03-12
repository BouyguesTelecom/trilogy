import { Dev, VariantProps } from '@/objects'
import { TouchableOpacity } from 'react-native'
import { IconName, IconNameValues } from '../../../../components/icon'
import { RadioNativeProps, RadioProps } from '../../../../components/radio/RadioProps'
import { ReactNode } from 'react'

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
