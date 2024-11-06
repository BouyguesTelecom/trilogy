/**
 * Box Header Interface
 */
import { Accessibility, Position, TrilogyColor, TrilogyColorValues } from '@/objects'

export interface BoxHeaderProps extends Position, Accessibility {
  children?: React.ReactNode
  help?: string
  className?: string
  variant?: TrilogyColor | TrilogyColorValues
  headerOffset?: boolean
}
