/**
 * Box Header Interface
 */
import { Accessibility, Centerable, Position, TrilogyColor, TrilogyColorValues } from '@/objects'

export interface BoxHeaderProps extends Position, Centerable, Accessibility {
  children?: React.ReactNode
  help?: string
  className?: string
  variant?: TrilogyColor | TrilogyColorValues
}
