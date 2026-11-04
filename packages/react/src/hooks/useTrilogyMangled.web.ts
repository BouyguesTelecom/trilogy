import { useSyncExternalStore } from "react"

import defaults from "../../version.json"

export interface TrilogyConfig {
  mangled?: boolean
  hash?: string
}

export type ResolvedTrilogyConfig = Required<TrilogyConfig>
let current: ResolvedTrilogyConfig = { mangled: false, hash: defaults.MANGLE }
const listeners = new Set<() => void>()

export function configureTrilogy({
  mangled = current.mangled,
  hash = current.hash,
}: TrilogyConfig = {}): void {
  current = { mangled, hash }
  listeners.forEach((listener) => listener())
}

export function getTrilogyConfig(): ResolvedTrilogyConfig {
  return current
}

export function subscribeTrilogyConfig(listener: () => void): () => void {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export function useTrilogyMangled(): ResolvedTrilogyConfig {
  return useSyncExternalStore(
    subscribeTrilogyConfig,
    getTrilogyConfig,
    getTrilogyConfig
  )
}
