import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'

/**
 * Tabs Item Interface
 */
export interface TabPanelProps extends Dev, CommonProps {
  children: React.ReactNode
  className?: string
}
