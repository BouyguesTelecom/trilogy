import { View } from 'react-native'
import { Dev } from "@/interfaces/Dev"
import { CommonProps } from "@/interfaces/CommonProps"
import { ReactNode } from 'react'

/**
 * Tabs Item Interface
 */
export interface TabPanelsProps extends Dev, CommonProps {
  children: ReactNode
}

export type TabPanelsRef = HTMLDivElement
export type TabPanelsNativeRef = View
