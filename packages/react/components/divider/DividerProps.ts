import { Marginless } from '@/objects'
import { IconName, IconNameValues } from '@/components/icon'
import { CommonProps } from '@/objects/facets/CommonProps'

/**
 * Divider Interface
 */

export interface DividerProps extends Marginless, CommonProps {
  content?: string
  unboxed?: boolean
  iconName?: IconNameValues | IconName
  inverted?: boolean
}
