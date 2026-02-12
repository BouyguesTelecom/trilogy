import { VariantProps } from '@/objects/index'
import { TouchableOpacity } from 'react-native'
import { IconName, IconNameValues } from '../../../../components/icon/IconNameEnum'
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
