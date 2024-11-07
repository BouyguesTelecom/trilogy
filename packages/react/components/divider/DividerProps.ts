import { Marginless, TrilogyColor, TrilogyColorValues } from '@/objects'
import { IconName, IconNameValues } from '@/components/icon'

/**
 * Divider Interface
 */

export interface DividerProps extends Marginless {
  content?: string
  unboxed?: boolean
  className?: string
  iconName?: IconNameValues | IconName
  inverted?: boolean
}
