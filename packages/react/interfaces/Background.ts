import { TrilogyColor, TrilogyColorValues } from "@/interfaces/Color";
import { Invertable } from "@/interfaces/Invertable";

/**
 * Background props
 */
export interface BackgroundProps extends Invertable {
  backgroundColor?: TrilogyColor | TrilogyColorValues
  backgroundSrc?: string
}
