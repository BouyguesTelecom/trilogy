import { getColorClassName, TrilogyColor, TrilogyColorValues } from '@/objects/facets/Color/index.native'
import { Invertable } from '@/objects/facets/index.native'

/**
 * Background props
 */
export interface BackgroundProps extends Invertable {
  backgroundColor?: TrilogyColor | TrilogyColorValues
  backgroundSrc?: string
}

/**
 * Returns background's classname depending on background type
 * @param backgroundType {string} - BackgroundType
 * @returns {string} - Background Color value
 */
export const getBackgroundClassName = (backgroundType: TrilogyColor | TrilogyColorValues): string => {
  return `background-${getColorClassName(backgroundType)}`
}
