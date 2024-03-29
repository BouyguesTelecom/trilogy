import { TrilogyColor } from '../../../../objects'

export interface ProgressRadialItemProps {
  children?: React.ReactNode
  percent: number
  className?: string
  color: 'secondary' | 'warning' | 'empty' | 'tertiary' | TrilogyColor
}
