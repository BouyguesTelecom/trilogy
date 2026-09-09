import { getColorClassName } from '@/helpers/color'
import { TrilogyColor, TrilogyColorValues } from "@/interfaces/Color";

/**
 * Returns background's classname depending on background type
 * @param backgroundType {string} - BackgroundType
 * @returns {string} - Background Color value
 */
export const getBackgroundClassName = (backgroundType: TrilogyColor | TrilogyColorValues): string => {
  return `background-${getColorClassName(backgroundType)}`
}
