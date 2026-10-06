import { Dev, ScrollDirectionEnum, ScrollDirectionEnumValues, TrilogyColor, TrilogyColorValues } from '@/objects'
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
