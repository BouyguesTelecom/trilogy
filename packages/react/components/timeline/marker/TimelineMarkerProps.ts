import { View } from 'react-native'
import { IconName, IconNameValues } from '@/components/icon/index'
import { Accessibility } from "@/interfaces/Accessibility";
import { Dev } from "@/interfaces/Dev";
import { CommonProps } from "@/interfaces/CommonProps";

/**
 * Timeline Marker Interface
 */
export interface TimelineMarkerProps extends Accessibility, Dev {
  iconName: IconName | IconNameValues
}

/**
 * Timeline Marker Web Interface
 */
export interface TimelineMarkerWebProps extends TimelineMarkerProps, Accessibility, CommonProps {
  iconClassname?: string
}

export type TimelineMarkerRef = HTMLDivElement
export type TimelineMarkerNativeRef = View
