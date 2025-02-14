import { AlignableProps, Dev } from '@/objects'
import { CommonProps } from '@/objects/facets/CommonProps'

/**
 * Tabs Item Interface
 */
export interface TabListProps extends Omit<AlignableProps, 'verticalAlign'>, Dev, CommonProps {
  children: React.ReactNode
}
