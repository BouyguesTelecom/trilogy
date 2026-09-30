import { View } from 'react-native'
import { BackgroundProps } from "@/interfaces/Background"
import { Accessibility } from "@/interfaces/Accessibility"
import { CommonProps } from "@/interfaces/CommonProps"
import { Dev } from "@/interfaces/Dev"
import { ReactNode } from 'react'

/**
 * Box Content Interface
 */
export interface BoxContentProps extends BackgroundProps, Accessibility, Dev, CommonProps {
  children?: ReactNode
}

export type BoxContentRef = HTMLDivElement
export type BoxContentNativeRef = View
