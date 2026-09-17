import { View } from 'react-native'
import { Dev } from "@/interfaces/Dev";
import { AlignableProps } from "@/interfaces/Alignable";
import { CommonProps } from "@/interfaces/CommonProps";

export interface FlexSize {
  mobile?: FlexItemSize
  tablet?: FlexItemSize
  touch?: FlexItemSize
  desktop?: FlexItemSize
  widescreen?: FlexItemSize
  fullhd?: FlexItemSize
}

/**
 * FlexItem Interface
 */
export interface FlexItemProps extends AlignableProps, CommonProps, Dev {
  children?: React.ReactNode
  size?: FlexSize | FlexItemSize
  narrow?: boolean
}

export type FlexItemRef = HTMLDivElement
export type FlexItemNativeRef = View
export type FlexItemSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
