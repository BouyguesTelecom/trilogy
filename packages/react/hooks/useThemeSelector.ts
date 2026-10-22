import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/shim/with-selector'
import type { ActiveTrilogyTheme } from '@/theme'
import { useTrilogyThemeStore } from '@/context/mobile/TrilogyThemeStore'

export type ThemeSelector<TSelected> = (theme: ActiveTrilogyTheme) => TSelected
export type ThemeEquality<TSelected> = (previous: TSelected, next: TSelected) => boolean

/**
 * Selects a value from the active theme and only re-renders when that value
 * changes according to the provided equality function.
 */
export const useThemeSelector = <TSelected>(
  selector: ThemeSelector<TSelected>,
  isEqual: ThemeEquality<TSelected> = Object.is,
): TSelected => {
  const store = useTrilogyThemeStore()
  return useSyncExternalStoreWithSelector(store.subscribe, store.getSnapshot, store.getSnapshot, selector, isEqual)
}
