/**
 * Text color Style
 */
enum TextStyle {
  MAIN = 'MAIN',
  ACCENT = 'ACCENT',
  INFO = 'INFO',
}

/**
 * TextVariant props
 */
export interface TextVariantProps {
  textVariant?: TextStyle | keyof typeof TextStyle
}
