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

/**
 * Returns loading's classname depending on loading type
 * @param loadingType {string} - Loading type
 * @returns {string} - Loading value
 */
export const getLoadingClassName = (loadingType?: string): string => {
  switch (loadingType) {
    case 'LOADING':
      return 'loading'
    case 'LOADED':
      return 'loaded'
    default:
      return ''
  }
}
