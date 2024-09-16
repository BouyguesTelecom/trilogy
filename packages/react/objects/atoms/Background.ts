import { getColorClassName, getColorStyle, TrilogyColor, TrilogyColorValues, } from "@/objects/facets/Color"
import { Invertable } from "@/objects/facets"

/**
 * Background props
 */
export interface BackgroundProps extends Invertable {
  backgroundColor?: TrilogyColor | TrilogyColorValues | {color:TrilogyColor, fade:boolean}
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
  if( backgroundType.startsWith('FADE-') ) {
    return `background-${getColorClassName( (backgroundType.replace('FADE-', '') as TrilogyColor))}-fade`
  }

  return `background-${getColorClassName(backgroundType)}`
}

/**
 * Returns background's style depending on background type
 * @param backgroundType {string} - BackgroundType
 * @returns {string} - Background Color value
 */
export const getBackgroundStyle = (
  backgroundType: TrilogyColor | TrilogyColorValues | {color:TrilogyColor, fade:boolean}
): string => {
  const color = (backgroundType && typeof backgroundType === 'object')? backgroundType.color : backgroundType
  const fade= (backgroundType && typeof backgroundType === 'object')? backgroundType.fade : false
  return getColorStyle(color, fade?1:0)
}
