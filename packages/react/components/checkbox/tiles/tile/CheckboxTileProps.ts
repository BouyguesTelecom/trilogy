import { TouchableOpacity } from 'react-native'
import { CheckboxProps } from '../../../../components/checkbox/CheckboxProps'
import { IconName, IconNameValues } from '../../../../components/icon'
import { CommonProps } from '../../../../objects/facets/CommonProps'

/**
 * Columns Item Interface
 */
export interface CheckboxTileProps extends CheckboxProps, CommonProps {
  horizontal?: boolean
  icon?: IconName | IconNameValues
  description?: string | React.ReactNode
  sticker?: string
}

export type CheckboxTileRef = HTMLDivElement
export type CheckboxTileNativeRef = TouchableOpacity
