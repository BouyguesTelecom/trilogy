import { TrilogyBackgroundColor, TrilogyBackgroundColorValues } from '@/interfaces/Color'
import { Invertable } from '@/interfaces/Invertable'

/**
 * Background props
 */
export interface BackgroundProps extends Invertable {
  backgroundColor?: TrilogyBackgroundColor | TrilogyBackgroundColorValues
  backgroundSrc?: string
}
