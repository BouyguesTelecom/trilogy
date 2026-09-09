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
