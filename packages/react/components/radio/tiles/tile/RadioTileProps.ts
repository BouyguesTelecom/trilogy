import { VariantProps } from '@/objects'
import { ReactNode } from 'react'
import { TouchableOpacity } from 'react-native'
import { IconName, IconNameValues } from '../../../../components/icon'
import { RadioNativeProps, RadioProps } from '../../../../components/radio/RadioProps'

/**
 * Columns Item Interface
 */
interface RadioTilePropsCommon {
  horizontal?: boolean
  icon?: IconName | IconNameValues
  description?: string | React.ReactNode
  sticker?: string
  stickerVariant?: VariantProps['variant']
}
export interface RadioTileProps extends Omit<RadioProps, 'label'>, RadioTilePropsCommon {
  label?: string | ReactNode
}

export interface RadioTileNativeProps extends Omit<RadioNativeProps, 'label'>, RadioTilePropsCommon {
  label?: string | ReactNode
}

export type RadioTileRef = HTMLDivElement
export type RadioTileNativeRef = TouchableOpacity
