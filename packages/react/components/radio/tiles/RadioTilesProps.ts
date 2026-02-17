import { View } from 'react-native'
import { AlignableProps } from '../../../objects'
import { CommonProps } from '../../../objects/facets/CommonProps'
import { FlexItemSize, FlexSize } from '../../flex-box/flex-item/FlexItemProps'

type NumberColors = FlexSize | FlexItemSize

export interface RadioTilesProps extends AlignableProps, CommonProps {
  children: React.ReactNode
  accessibilityLabelledBy?: string
  numberCols?: NumberColors
}

export type RadioTilesRef = HTMLDivElement
export type RadioTilesNativeRef = View
