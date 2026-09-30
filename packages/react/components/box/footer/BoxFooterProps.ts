import { View } from 'react-native'
import { Accessibility } from "@/interfaces/Accessibility"
import { TrilogyColor, TrilogyColorValues } from "@/interfaces/Color"
import { Dev } from "@/interfaces/Dev"
import { CommonProps } from "@/interfaces/CommonProps"
import { ReactNode } from 'react'

/**
 * Box Footer Interface
 */
export interface BoxFooterProps extends Accessibility, Dev, CommonProps {
  children?: ReactNode
  backgroundColor?: TrilogyColor | TrilogyColorValues
}

export type BoxFooterRef = HTMLDivElement
export type BoxFooterNativeRef = View
