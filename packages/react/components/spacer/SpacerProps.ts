import type { SpacerSize, SpacerSizeValues } from './SpacerEnum'

export interface SpacerProps {
  size: SpacerSize | typeof SpacerSizeValues
  horizontal?: boolean
}
