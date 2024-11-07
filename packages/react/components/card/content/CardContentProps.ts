import { Accessibility } from '@/objects'
import { CommonProps } from '@/objects/facets/CommonProps'

/**
 * Card Content Interface
 */
export interface CardContentProps extends Accessibility, CommonProps {
  children?: React.ReactNode
}
