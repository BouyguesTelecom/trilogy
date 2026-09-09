import { View } from 'react-native'
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

/**
 * Timeline Item Interface
 */
export interface TimelineItemProps extends Dev {
  children: React.ReactNode
  done?: boolean
  active?: boolean
  cancel?: boolean
}

/**
 * Timeline Item Web Interface
 */
export interface TimelineItemWebProps extends TimelineItemProps, CommonProps {
  done?: boolean
  active?: boolean
  cancel?: boolean
}

export type TimelineItemRef = HTMLDivElement
export type TimelineItemNativeRef = View
