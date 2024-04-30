import { getColorClassName, getColorStyle, TrilogyColor, TrilogyColorValues, } from "../facets/Color"
import {Invertable} from "../facets";

/**
 * Background props
 */
export interface BackgroundProps extends Invertable {
  background?: TrilogyColor | TrilogyColorValues | {color:TrilogyColor, fade:boolean}
  backgroundSrc?: string
}


/**
 * Returns background's classname depending on background type
 * @param backgroundType {string} - BackgroundType
 * @returns {string} - Background Color value
 */
export const getBackgroundClassName = (
  backgroundType:  TrilogyColor | TrilogyColorValues | {color:TrilogyColor, fade:boolean}
): string => {
  if (backgroundType && typeof backgroundType === 'object') {
    return `background-${getColorClassName(backgroundType.color)}${backgroundType.fade ? '-fade' : ''}`
  }
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
