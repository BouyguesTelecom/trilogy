import { RADIUS_TOKENS, type Radius, type RadiusTokenValues } from '@/interfaces/radius'
import { useThemeSelector } from './useThemeSelector'

/** Returns the selected radius token from the active theme. */
export const useRadius = (radius: Radius | RadiusTokenValues): number =>
  useThemeSelector((theme) => theme.radius[RADIUS_TOKENS[radius]])
