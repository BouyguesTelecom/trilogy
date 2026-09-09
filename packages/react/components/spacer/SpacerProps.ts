import type { SpacerSize, SpacerSizeValues } from '@/components/spacer/SpacerEnum'
import { View } from 'react-native'
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

export interface SpacerProps extends CommonProps, Dev {
  size: SpacerSize | typeof SpacerSizeValues
  horizontal?: boolean
}

export type SpacerRef = HTMLDivElement
export type SpacerNativeRef = View
