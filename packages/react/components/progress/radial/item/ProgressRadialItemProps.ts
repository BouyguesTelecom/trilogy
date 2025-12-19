import { TrilogyColor } from '@/objects/index'
import { CommonProps } from '../../../../objects/facets/CommonProps'

export interface ProgressRadialItemProps extends CommonProps {
  children?: React.ReactNode
  percent: number
  color: 'secondary' | 'warning' | 'empty' | 'tertiary' | TrilogyColor
}
