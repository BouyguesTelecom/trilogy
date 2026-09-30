import { ScrollView } from 'react-native'
import { Dev } from "@/interfaces/Dev"
import { ScrollDirectionEnum, ScrollDirectionEnumValues } from "@/interfaces/ScrollDirection"
import { TrilogyColor, TrilogyColorValues } from "@/interfaces/Color"
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
