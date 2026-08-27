import { View } from 'react-native'
import { Accessibility } from "@/interfaces/Accessibility";
import { Dev } from "@/interfaces/Dev";

/**
 * Box Table Container Interface
 */
export interface BoxTableContainerProps extends Accessibility, Dev {
  children?: string | React.ReactNode
  className?: string
}

export type BoxTableContainerRef = HTMLDivElement
export type BoxTableContainerNativeRef = View
