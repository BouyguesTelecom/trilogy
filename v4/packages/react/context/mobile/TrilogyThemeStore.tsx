import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react'
import type { ActiveTrilogyTheme, TrilogyTheme, TrilogyThemeMode } from '@/theme'

export interface ITrilogyThemeStore {
  getSnapshot: () => ActiveTrilogyTheme
  getMode: () => TrilogyThemeMode
  setMode: (mode: TrilogyThemeMode) => void
  setTheme: Dispatch<SetStateAction<TrilogyTheme>>
  subscribe: (listener: () => void) => () => void
}

interface ITrilogyThemeStoreProvider {
  children: ReactNode
  initialTheme: TrilogyTheme
  initialMode?: TrilogyThemeMode
  mode?: TrilogyThemeMode
}

export const TrilogyThemeStoreContext = createContext<ITrilogyThemeStore | null>(null)

const createTrilogyThemeStore = (initialTheme: TrilogyTheme, initialMode: TrilogyThemeMode): ITrilogyThemeStore => {
  let theme = initialTheme
  let mode = initialMode
  const listeners = new Set<() => void>()
  const createActiveTheme = (): ActiveTrilogyTheme => ({
    ...theme,
    colors: theme.colors[mode],
  })
  let activeTheme = createActiveTheme()

  const notify = () => listeners.forEach((listener) => listener())

  return {
    getSnapshot: () => activeTheme,
    getMode: () => mode,
    setMode: (nextMode) => {
      if (Object.is(mode, nextMode)) return
      mode = nextMode
      activeTheme = createActiveTheme()
      notify()
    },
    setTheme: (nextTheme) => {
      const updatedTheme = typeof nextTheme === 'function' ? nextTheme(theme) : nextTheme
      if (Object.is(theme, updatedTheme)) return
      theme = updatedTheme
      activeTheme = createActiveTheme()
      notify()
    },
    subscribe: (listener) => {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
  }
}

export const TrilogyThemeStoreProvider = ({
  children,
  initialTheme,
  initialMode,
  mode,
}: ITrilogyThemeStoreProvider): JSX.Element => {
  const [store] = useState(() => createTrilogyThemeStore(initialTheme, mode ?? initialMode ?? 'light'))

  useEffect(() => {
    if (mode) store.setMode(mode)
  }, [mode, store])

  return <TrilogyThemeStoreContext.Provider value={store}>{children}</TrilogyThemeStoreContext.Provider>
}

export const useTrilogyThemeStore = (): ITrilogyThemeStore => {
  const store = useContext(TrilogyThemeStoreContext)

  if (!store) {
    throw new Error('useThemeSelector must be used within a TrilogyThemeStoreProvider')
  }

  return store
}
