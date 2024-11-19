import { Accessibility, Centerable, Dev, Position, StatusState, VariantState } from '@/objects/facets'

export interface BoxHeaderProps extends Position, Centerable, Accessibility, Dev {
  children?: React.ReactNode
  help?: string
  className?: string
  variant?: VariantState | StatusState
}
