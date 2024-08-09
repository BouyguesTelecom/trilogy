import { StatusProps } from '@/objects/facets/Status'
import { Stacked } from '@/objects/facets/Stacked'

/**
 * Progress Interface
 */
export interface ProgressProps extends StatusProps, Stacked {
  children?: React.ReactNode
  percent?: number
  maxPercent?: number
  small?: boolean
  uniqueLegend?: string
  firstExtremLegend?: string
  secondExtremLegend?: string
  className?: string
}
