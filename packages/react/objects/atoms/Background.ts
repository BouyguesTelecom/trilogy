import { getColorClassName, getColorStyle, TrilogyColor, TrilogyColorValues, } from "../facets/Color"

/**
 * Background props
 */
export interface BackgroundProps {
  background?: TrilogyColor | TrilogyColorValues;
}

/**
 * Returns background's classname depending on background type
 * @param backgroundType {string} - BackgroundType
 * @returns {string} - Background Color value
 */
export const getBackgroundClassName = (
  backgroundType: TrilogyColor | TrilogyColorValues
): string => {
  return `background-${getColorClassName(backgroundType)}`
}

/**
 * Returns background's style depending on background type
 * @param backgroundType {string} - BackgroundType
 * @returns {string} - Background Color value
 */
export const getBackgroundStyle = (
  backgroundType: TrilogyColor | TrilogyColorValues
): string => {
  return getColorStyle(backgroundType)
}
