import {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_THEME_TRILOGY,
  type ActiveTrilogyTheme,
  type TrilogyTheme,
  type TrilogyThemeMode,
} from "@/constants/theme";

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

function merge<T>(base: T, over?: DeepPartial<T>): T {
  if (!over) return base;
  const out: any = { ...base };
  for (const key in over) {
    const value = (over as any)[key];
    if (value === undefined) continue;
    out[key] =
      value !== null && typeof value === "object" && !Array.isArray(value)
        ? merge((base as any)[key] ?? {}, value)
        : value;
  }
  return out;
}

function deepFreeze<T>(obj: T): T {
  for (const value of Object.values(obj as object)) {
    if (value !== null && typeof value === "object" && !Object.isFrozen(value))
      deepFreeze(value);
  }
  return Object.freeze(obj);
}

export const defaultTheme: TrilogyTheme = deepFreeze({
  ...(DEFAULT_THEME_TRILOGY as unknown as TrilogyTheme),
});

export function createTheme(
  overrides: DeepPartial<TrilogyTheme>,
  base: TrilogyTheme = defaultTheme,
): TrilogyTheme {
  return deepFreeze(merge(base, overrides));
}

const activeCache = new WeakMap<
  TrilogyTheme,
  Partial<Record<TrilogyThemeMode, ActiveTrilogyTheme>>
>();

function resolveActive(
  theme: TrilogyTheme,
  mode: TrilogyThemeMode,
): ActiveTrilogyTheme {
  let byMode = activeCache.get(theme);
  if (byMode === undefined) {
    byMode = {};
    activeCache.set(theme, byMode);
  }
  let active = byMode[mode];
  if (active === undefined) {
    const { colors, ...rest } = theme;
    active = Object.freeze({
      ...rest,
      colors: colors[mode],
    }) as ActiveTrilogyTheme;
    byMode[mode] = active;
  }
  return active;
}

export interface ThemeStore {
  getActive(): ActiveTrilogyTheme;
  getTheme(): TrilogyTheme;
  getMode(): TrilogyThemeMode;
  subscribe(listener: () => void): () => void;
}

let globalTheme: TrilogyTheme = defaultTheme;
let globalMode: TrilogyThemeMode = "light";
let globalActive: ActiveTrilogyTheme = resolveActive(globalTheme, globalMode);
const globalListeners = new Set<() => void>();

function commitGlobal(): void {
  const next = resolveActive(globalTheme, globalMode);
  if (next === globalActive) return;
  globalActive = next;
  globalListeners.forEach((l) => l());
}

const globalStore: ThemeStore = {
  getTheme: () => globalTheme,
  getMode: () => globalMode,
  getActive: () => globalActive,
  subscribe(listener) {
    globalListeners.add(listener);
    return () => {
      globalListeners.delete(listener);
    };
  },
};

export function setTheme(theme: TrilogyTheme): void {
  globalTheme = theme;
  commitGlobal();
}

export function setMode(mode: TrilogyThemeMode): void {
  globalMode = mode;
  commitGlobal();
}

export function configureTheme({
  theme,
  mode,
}: {
  theme?: TrilogyTheme;
  mode?: TrilogyThemeMode;
}): void {
  if (theme !== undefined) globalTheme = theme;
  if (mode !== undefined) globalMode = mode;
  commitGlobal();
}

interface ScopedStore extends ThemeStore {
  readonly parent: ThemeStore;
  update(theme?: TrilogyTheme, mode?: TrilogyThemeMode): void;
}

function createScopedStore(
  parent: ThemeStore,
  theme?: TrilogyTheme,
  mode?: TrilogyThemeMode,
): ScopedStore {
  const listeners = new Set<() => void>();
  let unsubParent: (() => void) | null = null;
  let cached: ActiveTrilogyTheme | null = null;

  const getTheme = () => theme ?? parent.getTheme();
  const getMode = () => mode ?? parent.getMode();
  const compute = () => resolveActive(getTheme(), getMode());

  const notify = () => {
    const next = compute();
    if (next === cached) return;
    cached = next;
    listeners.forEach((l) => l());
  };

  return {
    parent,
    getTheme,
    getMode,
    getActive: () =>
      unsubParent !== null && cached !== null ? cached : compute(),
    subscribe(listener) {
      listeners.add(listener);
      if (unsubParent === null) {
        cached = compute();
        unsubParent = parent.subscribe(notify);
      }
      return () => {
        listeners.delete(listener);
        if (listeners.size === 0 && unsubParent !== null) {
          unsubParent();
          unsubParent = null;
          cached = null;
        }
      };
    },
    update(nextTheme, nextMode) {
      if (nextTheme === theme && nextMode === mode) return;
      theme = nextTheme;
      mode = nextMode;
      if (unsubParent !== null) notify();
      else cached = null;
    },
  };
}

export const ThemeStoreCtx = createContext<ThemeStore>(globalStore);

export function ThemeProvider({
  theme,
  mode,
  children,
}: {
  theme?: TrilogyTheme;
  mode?: TrilogyThemeMode;
  children: ReactNode;
}) {
  const parent = useContext(ThemeStoreCtx);
  const [store, setStore] = useState(() =>
    createScopedStore(parent, theme, mode),
  );

  if (store.parent !== parent) setStore(createScopedStore(parent, theme, mode));

  useLayoutEffect(() => {
    store.update(theme, mode);
  }, [store, theme, mode]);

  return (
    <ThemeStoreCtx.Provider value={store}>{children}</ThemeStoreCtx.Provider>
  );
}
