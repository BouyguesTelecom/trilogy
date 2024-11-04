/**
 * Box Header Interface
 */
import {Accessibility, Centerable, Position, VariantState, StatusState} from '@/objects'

export interface BoxHeaderProps extends Position, Centerable, Accessibility {
  children?: React.ReactNode
  help?: string
  className?: string
  variant?: VariantState | StatusState
}
