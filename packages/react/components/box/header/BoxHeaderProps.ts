/**
 * Box Header Interface
 */
import { Accessibility, Dev, Centerable, Position, VariantState, StatusState } from '@/objects'

export interface BoxHeaderProps extends Position, Centerable, Accessibility, Dev {
  children?: React.ReactNode
  help?: string
  className?: string
  variant?: VariantState | StatusState
}
