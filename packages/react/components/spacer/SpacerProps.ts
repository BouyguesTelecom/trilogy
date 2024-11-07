import type { SpacerSize, SpacerSizeValues } from './SpacerEnum'
import { CommonProps } from '@/objects/facets/CommonProps'

export interface SpacerProps extends CommonProps{
  size: SpacerSize | typeof SpacerSizeValues
  horizontal?: boolean
}
