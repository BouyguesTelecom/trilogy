import { getColorClassName, TrilogyColor, TrilogyColorValues, } from "@/objects/facets/Color"
import { Invertable } from "@/objects/facets"

/**
 * Background props
 */
export interface BackgroundProps extends Invertable {
  backgroundColor?: TrilogyColor | TrilogyColorValues | 'transparent'
  backgroundSrc?: string
}

/**
 * Returns background's classname depending on background type
 * @param backgroundType {string} - BackgroundType
 * @returns {string} - Background Color value
 */
export const getBackgroundClassName = (
  backgroundType:  TrilogyColor | TrilogyColorValues
): string => {
  return `background-${getColorClassName(backgroundType)}`
}
