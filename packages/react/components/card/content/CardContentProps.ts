import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'

/**
 * Card Content Interface
 */
export interface CardContentProps extends Accessibility, CommonProps {
  children?: React.ReactNode
}
