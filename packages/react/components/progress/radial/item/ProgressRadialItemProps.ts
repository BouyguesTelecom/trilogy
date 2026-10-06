import { TrilogyColor } from '@/objects/facets/Color'
import { CommonProps } from '@/objects/facets/CommonProps'
import { ReactNode } from 'react'

export interface ProgressRadialItemProps extends CommonProps {
  children?: ReactNode
  percent: number
  color: 'secondary' | 'warning' | 'empty' | 'tertiary' | TrilogyColor
}
