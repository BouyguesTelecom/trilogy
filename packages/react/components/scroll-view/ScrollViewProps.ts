import { ScrollDirectionEnum, ScrollDirectionEnumValues, TrilogyColor, TrilogyColorValues } from '@/objects'
import { ScrollView } from 'react-native'

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

export type ScrollViewRef = HTMLDivElement
export type ScrollViewNativeRef = ScrollView
