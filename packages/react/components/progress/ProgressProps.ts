import { StatusProps } from '../../objects/facets/Status'
import { CommonProps } from '../../objects/facets/CommonProps'

/**
 * Progress Interface
 */
export interface ProgressProps extends StatusProps, CommonProps {
  value?: number
  max?: number
  small?: boolean
  legendStart?: string
  legendCenter?: string
  legendEnd?: string
}
