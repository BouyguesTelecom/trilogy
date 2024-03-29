import { getColorStyle } from '../facets'

/**
 * Text color Style
 */
enum TextStyle {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TERTIARY = 'TERTIARY',
}

/**
 * TextVariant props
 */
export interface TextVariantProps {
  textVariant?: TextStyle | keyof typeof TextStyle
}

/**
 * Returns text's classname depending on text type
 * @param textType {string} - Text type
 * @returns {string} - Text value
 */
export const getTextClassName = (textType?: string): string => {
  switch (textType) {
    case 'PRIMARY':
      return 'text-primary'
    case 'SECONDARY':
      return 'text-secondary'
    case 'TERTIARY':
      return 'text-tertiary'
    case 'WHITE':
      return 'text-white'
    case 'GREY':
      return 'text-grey'
    case 'GREY_LIGHT':
      return 'text-grey-light'
    case 'GREY_DARK':
      return 'text-grey-dark'
    case 'SUCCESS':
      return 'text-success'
    case 'WARNING':
      return 'text-warning'
    case 'ERROR':
      return 'text-error'
    case 'INFO':
      return 'text-info'
    default:
      return ''
  }
}

/**
 * Returns text's style depending on text type
 * @param textType {string} - Text type
 * @returns {string} - Text value
 */
export const getTextStyle = (textType?: string): string => {
  switch (textType) {
    case 'PRIMARY':
      return getColorStyle('PRIMARY')
    case 'SECONDARY':
      return getColorStyle('SECONDARY')
    case 'TERTIARY':
      return getColorStyle('TERTIARY')
    default:
      return ''
  }
}
