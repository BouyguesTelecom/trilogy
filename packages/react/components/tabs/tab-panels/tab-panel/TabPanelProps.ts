import { View } from 'react-native'
import { Dev } from "@/interfaces/Dev";
import { CommonProps } from "@/interfaces/CommonProps";

/**
 * Tabs Item Interface
 */
export interface TabPanelProps extends Dev, CommonProps {
  children: React.ReactNode
  className?: string
}

export type TabPanelRef = HTMLDivElement
export type TabPanelNativeRef = View
