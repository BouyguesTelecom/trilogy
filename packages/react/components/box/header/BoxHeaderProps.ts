import { View } from 'react-native'
import { Accessibility } from "@/interfaces/Accessibility";
import { AlignableProps } from "@/interfaces/Alignable";
import { TrilogyColor, TrilogyColorValues } from "@/interfaces/Color";
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

export interface BoxHeaderProps extends AlignableProps, Accessibility, CommonProps, Dev {
  children?: React.ReactNode
  variant?: TrilogyColor | TrilogyColorValues
}

export type BoxHeaderRef = HTMLDivElement
export type BoxHeaderNativeRef = View
