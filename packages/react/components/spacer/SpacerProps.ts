import { SpacerSize, SpacerSizeValues } from './SpacerEnum'

export interface SpacerProps {
  size: SpacerSize | SpacerSizeValues
  horizontal?: boolean
}
