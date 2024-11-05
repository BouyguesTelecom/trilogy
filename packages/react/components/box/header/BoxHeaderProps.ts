/**
 * Box Header Interface
 */
import { Accessibility, AlignableProps, TrilogyColor, TrilogyColorValues } from '@/objects'

export interface BoxHeaderProps extends AlignableProps, Accessibility {
  children?: React.ReactNode
  className?: string
  variant?: TrilogyColor | TrilogyColorValues
}
