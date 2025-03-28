import type { SpacerSize, SpacerSizeValues } from './SpacerEnum'
import { CommonProps } from '../../objects/facets/CommonProps'
import { View } from 'react-native'

export interface SpacerProps extends CommonProps{
  size: SpacerSize | typeof SpacerSizeValues
  horizontal?: boolean
}

export type SpacerRef = HTMLDivElement
export type SpacerNativeRef = View
