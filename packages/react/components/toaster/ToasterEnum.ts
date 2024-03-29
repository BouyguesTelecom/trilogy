export const getInfoColorStyle = (InfoColor?: string): string => {
  switch (InfoColor) {
    case 'SUCCESS':
      return '#cfeae1'
    case 'INFO':
      return '#d1edf1'
    case 'WARNING':
      return '#fcf0d5'
    case 'ERROR':
      return '#f7d7cf'
    default:
      return ''
  }
}
