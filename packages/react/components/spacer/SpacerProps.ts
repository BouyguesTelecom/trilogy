import type { SpacerSize, SpacerSizeValues } from './SpacerEnum'
import { CommonProps } from '../../objects/facets/CommonProps'
import { View } from 'react-native'
import { Dev } from '@/objects/facets/Dev'

export interface SpacerProps extends CommonProps, Dev {
  size: SpacerSize | typeof SpacerSizeValues
  horizontal?: boolean
}

export type SpacerRef = HTMLDivElement
export type SpacerNativeRef = View
