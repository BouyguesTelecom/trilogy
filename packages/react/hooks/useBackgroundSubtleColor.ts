import type { BackgroundColorSubtle, BackgroundColorSubtleValues } from '@/interfaces/colors'
import { useBackgroundColor } from './useBackgroundColor'

/** Returns a subtle background token, subscribing only to its resolved value. */
export const useBackgroundSubtleColor = (color: BackgroundColorSubtle | BackgroundColorSubtleValues): string =>
  useBackgroundColor(color)
