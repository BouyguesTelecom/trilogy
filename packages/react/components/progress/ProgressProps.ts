import { AlertProps } from '../../objects/facets/Alert'
import { Stacked } from '../../objects/facets/Stacked'

/**
 * Progress Interface
 */
export interface ProgressProps extends AlertProps, Stacked {
  children?: React.ReactNode
  percent?: number
  maxPercent?: number
  small?: boolean
  uniqueLegend?: string
  firstExtremLegend?: string
  secondExtremLegend?: string
  className?: string
}
