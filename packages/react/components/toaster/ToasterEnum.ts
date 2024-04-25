import { getColorStyle } from "../../objects/facets"

export const getInfoColorStyle = (InfoColor?: string): string => {
  switch (InfoColor) {
    case "SUCCESS":
      return getColorStyle("SUCCESS", 1)
    case "INFO":
      return getColorStyle("INFO", 1)
    case "WARNING":
      return getColorStyle("WARNING", 1)
    case "ERROR":
      return getColorStyle("ERROR", 1)
    default:
      return ""
  }
}
