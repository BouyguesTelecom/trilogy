import { Dev } from '@/objects/facets/Dev'
import { CommonProps } from '@/objects/facets/CommonProps'
import { View } from 'react-native'
import { ReactNode } from 'react'

/**
 * Tabs Item Interface
 */
export interface TabPanelProps extends Dev, CommonProps {
  children: ReactNode
  className?: string
}

export type TabPanelRef = HTMLDivElement
export type TabPanelNativeRef = View
