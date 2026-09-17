/**
 * Timeline Content Interface
 */
import { View } from 'react-native'
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

export interface TimelineContentProps extends Dev {
  children?: React.ReactNode
  heading?: string
  content?: string
  linkTo?: string
  linkLabel?: string
}

/**
 * Timeline Content Web Interface
 */
export interface TimelineContentWebProps extends TimelineContentProps, CommonProps {}

export type TimelineContentRef = HTMLDivElement
export type TimelineContentNativeRef = View
