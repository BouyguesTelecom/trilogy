import { TouchableOpacity } from 'react-native'
import { IconName, IconNameValues } from '../../../../components/icon'
import { RadioProps } from '../../../../components/radio/RadioProps'

/**
 * Columns Item Interface
 */
export interface RadioTileProps extends RadioProps {
  horizontal?: boolean
  icon?: IconName | IconNameValues
  description?: string | React.ReactNode
  sticker?: string
}

export type RadioTileRef = HTMLDivElement
export type RadioTileNativeRef = TouchableOpacity
