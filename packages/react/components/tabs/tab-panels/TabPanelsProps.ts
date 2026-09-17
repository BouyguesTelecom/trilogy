import { View } from 'react-native'
import { Dev } from "@/interfaces/Dev";
import { CommonProps } from "@/interfaces/CommonProps";

/**
 * Tabs Item Interface
 */
export interface TabPanelsProps extends Dev, CommonProps {
  children: React.ReactNode
}

export type TabPanelsRef = HTMLDivElement
export type TabPanelsNativeRef = View
