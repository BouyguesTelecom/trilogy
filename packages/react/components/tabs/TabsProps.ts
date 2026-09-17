import { View } from 'react-native'
import { Accessibility } from "@/interfaces/Accessibility";
import { AlignableProps } from "@/interfaces/Alignable";
import { Clickable } from "@/interfaces/Clickable";
import { Dev } from "@/interfaces/Dev";
import { CommonProps } from "@/interfaces/CommonProps";

/**
 * Tabs Interface
 */
export interface TabsProps extends AlignableProps, Clickable, Accessibility, Dev, CommonProps {
  children: React.ReactNode | string
  activeIndex?: number
  fullwidth?: boolean
  inverted?: boolean
  small?: boolean
}

export type TabsRef = HTMLDivElement
export type TabsNativeRef = View
