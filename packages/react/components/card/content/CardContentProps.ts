import { View } from 'react-native'
import { Accessibility } from "@/interfaces/Accessibility";
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

/**
 * Card Content Interface
 */
export interface CardContentProps extends Accessibility, CommonProps, Dev {
  children?: React.ReactNode
}

export type CardContentRef = HTMLDivElement
export type CardContentNativeRef = View
