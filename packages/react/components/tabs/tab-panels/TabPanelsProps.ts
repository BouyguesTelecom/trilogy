import { Dev } from '@/objects'
import { CommonProps } from '@/objects/facets/CommonProps'

/**
 * Tabs Item Interface
 */
export interface TabPanelsProps extends Dev, CommonProps {
  children: React.ReactNode
}
