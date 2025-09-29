import { Align } from '@/objects/facets/Alignable'
import { DirectionEnum, DirectionEnumValues } from '@/objects/facets/Direction'
import { Justify } from '@/objects/facets/Justifiable'
import { View } from 'react-native'
import { CommonProps } from '../../objects/facets/CommonProps'
import { GapSize } from '../columns'

export interface FlexBoxSize {
  mobile?: GapSize
  tablet?: GapSize
  desktop?: GapSize
}

export interface Direction {
  mobile?: DirectionEnum | DirectionEnumValues
  tablet?: DirectionEnum | DirectionEnumValues
  desktop?: DirectionEnum | DirectionEnumValues
}

export interface ResponsiveAlign {
  mobile?: Align
  tablet?: Align
  desktop?: Align
}

export interface ResponsiveJustify {
  mobile?: Justify
  tablet?: Justify
  desktop?: Justify
}

export interface FlexBoxProps extends CommonProps {
  children?: React.ReactNode
  gap?: FlexBoxSize | GapSize
  direction?: Direction | DirectionEnum | DirectionEnumValues
  align?: ResponsiveAlign | Align
  justify?: ResponsiveJustify | Justify
  scrollable?: boolean
  fullBleed?: boolean
  fullheight?: boolean
}

export type FlexBoxRef = HTMLDivElement
export type FlexBoxNativeRef = View
