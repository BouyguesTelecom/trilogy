import { IconName, IconNameValues } from '@/components/icon'
import { RadioProps } from '@/components/radio/RadioProps'
import { TouchableOpacity } from 'react-native'

/**
 * Columns Item Interface
 */
export interface RadioTileProps extends RadioProps {
  horizontal?: boolean
  icon?: IconName | IconNameValues
  description?: string | React.ReactNode
}

export type RadioTileRef = HTMLDivElement
export type RadioTileNativeRef = TouchableOpacity
