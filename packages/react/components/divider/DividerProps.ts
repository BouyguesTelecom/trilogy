import { Marginless, TrilogyColor, TrilogyColorValues } from '../../objects'
import { IconName, IconNameValues } from '../icon'

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
