import { TrilogyColor, TrilogyColorValues } from '@/objects/facets/Color'
import { ScrollDirectionEnum, ScrollDirectionEnumValues } from '@/objects/facets/ScrollDirection'

/**
 * ScroView Interface
 */
export interface ScrollViewProps {
  children?: React.ReactNode
  className?: string
  footer?: React.ReactNode
  bounce?: boolean
  centerContent?: boolean
  refresh?: boolean
  onRefresh?: () => void
  refreshControlColor?: TrilogyColor | TrilogyColorValues
  id?: string
  scrollDirection?: ScrollDirectionEnum | ScrollDirectionEnumValues
}
