import type { SpacerSize, SpacerSizeValues } from '@/components/spacer/SpacerEnum'

export interface SpacerProps {
  size: SpacerSize | typeof SpacerSizeValues
  horizontal?: boolean
}
