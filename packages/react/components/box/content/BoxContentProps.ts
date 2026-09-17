import { View } from 'react-native'
import { BackgroundProps } from "@/interfaces/Background";
import { Accessibility } from "@/interfaces/Accessibility";
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

/**
 * Box Content Interface
 */
export interface BoxContentProps extends BackgroundProps, Accessibility, Dev, CommonProps {
  children?: React.ReactNode
}

export type BoxContentRef = HTMLDivElement
export type BoxContentNativeRef = View
