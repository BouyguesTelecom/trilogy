import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'

/**
 * Tabs Item Interface
 */
export interface TabPanelProps extends Dev, CommonProps {
  children: React.ReactNode
  className?: string
}

export type TabPanelRef = HTMLDivElement
export type TabPanelNativeRef = View
