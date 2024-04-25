/**
 * Text color Style
 */
enum TextStyle {
  MAIN = "MAIN",
  ACCENT = "ACCENT",
  INFO = "INFO",
}

/**
 * TextVariant props
 */
export interface TextVariantProps {
  textVariant?: TextStyle | keyof typeof TextStyle;
}

/**
 * Returns text's classname depending on text type
 * @param textType {string} - Text type
 * @returns {string} - Text value
 */
export const getTextClassName = (textType?: string): string => {
  switch (textType) {
    case "MAIN":
      return "text-main"
    case "ACCENT":
      return "text-accent"
    case "INFO":
      return "text-info"
    case "WHITE":
      return "text-white"
    case "NEUTRAL":
      return "text-neutral-light"
    case "NEUTRAL_DARK":
      return "text-neutral-dark"
    case "SUCCESS":
      return "text-success"
    case "WARNING":
      return "text-warning"
    case "ERROR":
      return "text-error"
    default:
      return ""
  }
}
