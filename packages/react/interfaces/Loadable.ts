/**
 * Loading state
 */
export enum Loading {
  LOADING = 'LOADING',
  LOADED = 'LOADED',
}

export type LoadingValues = `${Loading}`

/**
 * Loadable props
 */
export interface Loadable {
  loading?: Loading | LoadingValues | boolean
}
