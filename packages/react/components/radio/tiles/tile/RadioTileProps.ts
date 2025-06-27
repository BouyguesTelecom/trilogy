import { IconName, IconNameValues } from '@/components/icon'
import { RadioProps } from '@/components/radio/RadioProps'
import { VariantProps } from '@/objects/facets/Variant'
import { TouchableOpacity } from 'react-native'

/**
 * Columns Item Interface
 */
export interface RadioTileProps extends RadioProps {
  horizontal?: boolean
  icon?: IconName | IconNameValues
  description?: string | React.ReactNode
  sticker?: string
  stickerVariant?: VariantProps['variant']
}

export type RadioTileRef = HTMLDivElement
export type RadioTileNativeRef = TouchableOpacity
