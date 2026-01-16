import { VariantProps } from '@/objects'
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
export interface RadioTileProps extends RadioProps, RadioTilePropsCommon {}
export interface RadioTileNativeProps extends RadioNativeProps, RadioTilePropsCommon {}

export type RadioTileRef = HTMLDivElement
export type RadioTileNativeRef = TouchableOpacity
