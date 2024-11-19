import { IconName, IconNameValues } from '@/components/icon'
import { TrilogyColor, TrilogyColorValues } from '@/objects/facets/Color'
import { Marginless } from '@/objects/facets/Marginless'

/**
 * Divider Interface
 */

export interface DividerProps extends Marginless {
  content?: string
  unboxed?: boolean
  className?: string
  iconName?: IconNameValues | IconName
  color?: TrilogyColor | TrilogyColorValues
  backgroundColor?: TrilogyColor | TrilogyColorValues
  textColor?: TrilogyColor | TrilogyColorValues
}
