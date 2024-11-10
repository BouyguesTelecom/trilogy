import { AlignableProps, Clickable } from '../../objects'
import { DimensionValue } from 'react-native'
import { CommonProps } from '../../objects/facets/CommonProps'

export enum RadiusValues {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export interface ImageProps extends AlignableProps, Clickable, CommonProps {
  src: string | number
  alt?: string
  circled?: boolean
  width?: DimensionValue | number | undefined
  height?: DimensionValue | number | undefined
  radius?: RadiusValues
}
