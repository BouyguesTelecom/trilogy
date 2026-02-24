import { GridItemSize, GridSize } from '@/objects/facets/Grid'
import { FlatList, View } from 'react-native'
import { AlignableProps } from '../../../objects'
import { CommonProps } from '../../../objects/facets/CommonProps'

export interface RadioTilesProps extends AlignableProps, CommonProps {
  children: React.ReactNode
  accessibilityLabelledBy?: string
  numberCols?: GridSize | GridItemSize
}

export type RadioTilesRef = HTMLDivElement
export type RadioTilesNativeRef = View | FlatList
