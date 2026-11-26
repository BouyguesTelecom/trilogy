import type { ViewStyle } from "react-native"

// "radiusLg" -> "lg"
const tokenName = (key: string, prefix: string): string =>
  key.charAt(prefix.length).toLowerCase() + key.slice(prefix.length + 1)

export const tokenStyles = <Token extends string>(
  tokens: Record<string, number>,
  prefix: string,
  style: (value: number) => ViewStyle
): Record<Token, ViewStyle> =>
  Object.fromEntries(
    Object.entries(tokens).map(([key, value]) => [
      tokenName(key, prefix),
      style(value),
    ])
  ) as Record<Token, ViewStyle>
