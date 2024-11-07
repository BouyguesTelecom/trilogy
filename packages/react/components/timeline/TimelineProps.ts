import { CommonProps } from '@/objects/facets/CommonProps'

/**
 * Timeline Interface
 */
export interface TimelineProps extends CommonProps {
  children: React.ReactNode
  notifications?: boolean
  horizontal?: boolean
}
