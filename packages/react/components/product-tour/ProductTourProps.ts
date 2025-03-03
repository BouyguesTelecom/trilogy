import { type View } from 'react-native'
import { CommonProps } from '../../objects/facets/CommonProps'

/**
 * Arrow direction
 */
export enum ArrowDirection {
  UP = 'top',
  BOTTOM = 'bottom',
  LEFT = 'left',
  RIGHT = 'right',
}

/**
 * Arrow direction values
 */
export type ArrowDirectionValues = `${ArrowDirection}`

/**
 * Arrow align
 */
export enum ArrowAlign {
  ONE_FIFTH = 'one-fifth',
  ONE_QUARTER = 'one-quarter',
  ONE_THRID = 'one-thrid',
  TWO_FIFTHS = 'two-fifths',
  THREE_FIFTHS = 'three-fifths',
  TWO_THIRDS = 'two-thirds',
  THREE_QUARTERS = 'three-quarters',
  FOUR_FIFTHS = 'four-fifths',
}

/**
 * Arrow align values
 */
export type ArrowAlignValues = `${ArrowAlign}`

/**
 * Avatar direction
 */
export enum AvatarDirection {
  LEFT = 'left',
  RIGHT = 'right',
}

/**
 * Avatar direction values
 */
export type AvatarDirectionValues = `${AvatarDirection}`

/**
 * Product Tour Interface
 */
export interface ProductTourProps {
  children?: React.ReactNode
  active?: boolean
  arrowDirection?: ArrowDirection | ArrowDirectionValues
  arrowAlign?: ArrowAlign | ArrowAlignValues
  closeable?: boolean
  avatarSrc?: string
  avatarDirection?: AvatarDirection | AvatarDirectionValues
}

/**
 * Product Tour Web Interface
 */
export interface ProductTourWebProps extends ProductTourProps, CommonProps {}

export type ProductTourRef = HTMLDivElement
export type ProductTourNativeRef = View
