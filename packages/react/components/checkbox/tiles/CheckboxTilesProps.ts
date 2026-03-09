import { View } from 'react-native'
import { AlignableProps } from '../../../objects/facets/Alignable'
import { CommonProps } from '../../../objects/facets/CommonProps'
import { GridItemSize, GridSize } from '@/objects/facets/Grid'
import { Dev } from '@/objects/facets/Dev'

export interface CheckboxTilesProps extends AlignableProps, CommonProps, Dev {
  children: React.ReactNode;
  accessibilityLabelledBy?: string;
  numberCols?: GridSize | GridItemSize
}

export type CheckboxTilesRef = HTMLDivElement
export type CheckboxTilesNativeRef = View
