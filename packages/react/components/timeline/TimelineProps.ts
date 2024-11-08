import { CommonProps } from '@/objects/facets/CommonProps'

/**
 * Timeline Interface
 */
export interface TimelineProps extends CommonProps {
  children: React.ReactNode
  horizontal?: boolean
}
