/** The consumer embeds or loads the font before rendering icons. */
export interface ThemeIcons {
  fontFamily: string | {
    ios: string
    android: string
    default?: string
  }
  /** Numeric Unicode code points, or literal characters (not hexadecimal strings). */
  glyphMap: Readonly<Record<string, number | string>>
}

export interface TrilogyThemeIcons {
  icons?: ThemeIcons
}
