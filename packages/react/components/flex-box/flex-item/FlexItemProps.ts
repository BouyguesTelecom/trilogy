import { AlignableProps } from '@/objects/facets/Alignable'
import { CommonProps } from '@/objects/facets/CommonProps'
import { View } from 'react-native'

export interface FlexSize {
  mobile?: FlexItemSize
  tablet?: FlexItemSize
  touch?: FlexItemSize
  desktop?: FlexItemSize
  wideScreen?: FlexItemSize
  fullHd?: FlexItemSize
}

/**
 * FlexItem Interface
 */
export interface FlexItemProps extends AlignableProps, CommonProps {
  children?: React.ReactNode
  size?: FlexSize | FlexItemSize
  narrow?: boolean
}

export type FlexItemRef = HTMLDivElement
export type FlexItemNativeRef = View
export type FlexItemSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
