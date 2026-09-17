import { View } from 'react-native'
import { GapSize } from '@/components/columns'
import { Align } from "@/interfaces/Alignable";
import { DirectionEnum, DirectionEnumValues } from "@/interfaces/Direction";
import { Justify } from "@/interfaces/Justifiable";
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

interface ResponsiveValue<T> {
  mobile?: T
  tablet?: T
  desktop?: T
  widescreen?: T
  fullhd?: T
}

export type FlexBoxSize = ResponsiveValue<GapSize>
export type Direction = ResponsiveValue<DirectionEnum | DirectionEnumValues>
export type AlignProps = ResponsiveValue<Align>
export type JustifyProps = ResponsiveValue<Justify>
export type WrapProps = ResponsiveValue<boolean>

export interface FlexBoxProps extends CommonProps, Dev {
  children?: React.ReactNode
  gap?: FlexBoxSize | GapSize
  direction?: Direction | DirectionEnum | DirectionEnumValues
  align?: AlignProps | Align
  justify?: JustifyProps | Justify
  wrap?: WrapProps | boolean
  scrollable?: boolean
  fullBleed?: boolean
  fullheight?: boolean
  mobile?: boolean
}

export type FlexBoxRef = HTMLDivElement
export type FlexBoxNativeRef = View
