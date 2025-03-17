import { Accessibility, StatusProps } from '@/objects/facets'
import {View} from "react-native";

/**
 * Progress Item Interface
 */
export interface ProgressItemProps extends StatusProps, Accessibility {
  children?: React.ReactNode
  percent: number
  minPercent?: number
  maxPercent?: number
  className?: string
}

export type ProgressItemNativeRef = View

