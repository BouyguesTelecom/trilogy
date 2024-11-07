import { StatusProps } from '@/objects/facets/Status'
import { Stacked } from '@/objects/facets/Stacked'
import { CommonProps } from '@/objects/facets/CommonProps'

/**
 * Progress Interface
 */
export interface ProgressProps extends StatusProps, CommonProps {
  children?: React.ReactNode
  value?: number
  max?: number
  small?: boolean
  className?: string
}
