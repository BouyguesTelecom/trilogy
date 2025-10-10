import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'

/**
 * Tabs Item Interface
 */
export interface TabPanelsProps extends Dev, CommonProps {
  children: React.ReactNode
}

export type TabPanelsRef = HTMLDivElement
export type TabPanelsNativeRef = View
