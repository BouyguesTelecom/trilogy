import { Dev } from '@/objects'
import { CommonProps } from '@/objects/facets/CommonProps'
import { View } from 'react-native'
import { ReactNode } from 'react'

/**
 * Tabs Item Interface
 */
export interface TabPanelsProps extends Dev, CommonProps {
  children: ReactNode
}

export type TabPanelsRef = HTMLDivElement
export type TabPanelsNativeRef = View
