import { VariantProps } from '@/objects'
import { ReactNode } from 'react'
import { TouchableOpacity } from 'react-native'
import { CheckboxProps } from '../../../../components/checkbox/CheckboxProps'
import { IconName, IconNameValues } from '../../../../components/icon'
import { CommonProps } from '../../../../objects/facets/CommonProps'

/**
 * Columns Item Interface
 */
export interface CheckboxTileProps extends Omit<CheckboxProps, 'label'>, CommonProps {
  horizontal?: boolean
  icon?: IconName | IconNameValues
  description?: string | React.ReactNode
  sticker?: string
  stickerVariant?: VariantProps['variant']
  label?: string | ReactNode
}

export type CheckboxTileRef = HTMLDivElement
export type CheckboxTileNativeRef = TouchableOpacity
