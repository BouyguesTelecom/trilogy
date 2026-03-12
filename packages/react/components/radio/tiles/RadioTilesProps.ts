import { View } from 'react-native'
import { AlignableProps, Dev } from '../../../objects'
import { CommonProps } from '../../../objects/facets/CommonProps'
import { GridItemSize, GridSize } from '@/objects/facets/Grid'

export interface RadioTilesProps extends AlignableProps, CommonProps, Dev {
  children: React.ReactNode;
  accessibilityLabelledBy?: string;
  numberCols?: GridSize | GridItemSize
}

export type RadioTilesRef = HTMLDivElement
export type RadioTilesNativeRef = View
