import { View } from 'react-native'
import { Accessibility } from "@/interfaces/Accessibility";
import { TrilogyColor, TrilogyColorValues } from "@/interfaces/Color";
import { Dev } from "@/interfaces/Dev";
import { CommonProps } from "@/interfaces/CommonProps";

/**
 * Box Footer Interface
 */
export interface BoxFooterProps extends Accessibility, Dev, CommonProps {
  children?: React.ReactNode
  backgroundColor?: TrilogyColor | TrilogyColorValues
}

export type BoxFooterRef = HTMLDivElement
export type BoxFooterNativeRef = View
