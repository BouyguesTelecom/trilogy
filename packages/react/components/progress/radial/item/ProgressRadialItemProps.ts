import { TrilogyColor } from '@/objects/facets/Color'

export interface ProgressRadialItemProps {
  children?: React.ReactNode
  percent: number
  className?: string
  color: 'secondary' | 'warning' | 'empty' | 'tertiary' | TrilogyColor
}
