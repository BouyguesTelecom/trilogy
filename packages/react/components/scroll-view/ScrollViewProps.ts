import { Dev } from '@/objects/facets/Dev'
import { ScrollDirectionEnum, ScrollDirectionEnumValues } from '@/objects/facets/ScrollDirection'
import { TrilogyColor, TrilogyColorValues } from '@/objects/facets/Color'
import { ScrollView } from 'react-native'
import { ReactNode } from 'react'

/**
 * ScroView Interface
 */
export interface ScrollViewProps extends Dev {
  children?: ReactNode
  className?: string
  footer?: ReactNode
  bounce?: boolean
  centerContent?: boolean
  refresh?: boolean
  onRefresh?: () => void
  refreshControlColor?: TrilogyColor | TrilogyColorValues
  id?: string
  scrollDirection?: ScrollDirectionEnum | ScrollDirectionEnumValues
}

export type ScrollViewRef = HTMLDivElement
export type ScrollViewNativeRef = ScrollView
