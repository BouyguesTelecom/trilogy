import { Align } from '@/objects/facets/Alignable'
import { DirectionEnum, DirectionEnumValues } from '@/objects/facets/Direction'
import { Justify } from '@/objects/facets/Justifiable'
import { View } from 'react-native'
import { CommonProps } from '../../objects/facets/CommonProps'
import { GapSize } from '../columns'

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

export interface FlexBoxProps extends CommonProps {
  children?: React.ReactNode
  gap?: FlexBoxSize | GapSize
  direction?: Direction | DirectionEnum | DirectionEnumValues
  align?: AlignProps
  justify?: JustifyProps | Justify
  wrap?: WrapProps | boolean
  scrollable?: boolean
  fullBleed?: boolean
  fullheight?: boolean
  mobile?: boolean
}

export type FlexBoxRef = HTMLDivElement
export type FlexBoxNativeRef = View
