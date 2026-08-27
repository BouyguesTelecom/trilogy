import { TouchableOpacity, type View } from 'react-native'
import { BackgroundProps } from "@/interfaces/Background";
import { Accessibility } from "@/interfaces/Accessibility";
import { Clickable } from "@/interfaces/Clickable";
import { TrilogyColor, TrilogyColorValues } from "@/interfaces/Color";
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";
import { Fullheight } from "@/interfaces/Fullheight";

/**
 * Box Interface
 */
export interface BoxProps extends BackgroundProps, Clickable, Fullheight, Accessibility, Dev, CommonProps {
  children?: React.ReactNode
  skeleton?: boolean
  href?: string
  highlighted?: TrilogyColor | TrilogyColorValues
  shadowless?: boolean
  backgroundSrc?: string
  headerOffset?: boolean
  flat?: boolean
  active?: boolean
  inverted?: boolean
  blank?: boolean
}

export type BoxRef = HTMLDivElement
export type BoxNativeRef = View | TouchableOpacity
