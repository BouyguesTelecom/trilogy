import { GridItemSize, GridSize } from '@/objects/facets/Grid'
import { View } from 'react-native'
import { AlignableProps } from '../../../objects/facets/Alignable'
import { CommonProps } from '../../../objects/facets/CommonProps'

/**
 * Columns Item Interface
 */
export interface CheckboxTilesProps extends AlignableProps, CommonProps {
  children: React.ReactNode
  accessibilityLabelledBy?: string
  numberCols?: GridSize | GridItemSize
}

export type CheckboxTilesRef = HTMLDivElement
export type CheckboxTilesNativeRef = View
