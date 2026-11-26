import { TextColors } from "@/interfaces/textColors"

// Only near-white backgrounds keep the default text color; warning and information stay below it.
const LIGHT_BACKGROUND_LUMINANCE = 0.7

type Rgba = [red: number, green: number, blue: number, alpha: number]

const parseColor = (color: string): Rgba | undefined => {
  const value = color.trim().toLowerCase()
  if (value === "transparent") return [255, 255, 255, 0]

  const hex = /^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/.exec(value)
  if (hex) {
    const digits =
      hex[1].length <= 4
        ? [...hex[1]].map((digit) => digit + digit).join("")
        : hex[1]
    const part = (index: number): number =>
      parseInt(digits.slice(index, index + 2), 16)
    return [part(0), part(2), part(4), digits.length === 8 ? part(6) / 255 : 1]
  }

  const rgb =
    /^rgba?\(\s*(\d+(?:\.\d+)?)[\s,]+(\d+(?:\.\d+)?)[\s,]+(\d+(?:\.\d+)?)\s*(?:[,/]\s*(\d*\.?\d+%?)\s*)?\)$/.exec(
      value
    )
  if (rgb) {
    const alpha = rgb[4]
      ? rgb[4].endsWith("%")
        ? parseFloat(rgb[4]) / 100
        : parseFloat(rgb[4])
      : 1
    return [Number(rgb[1]), Number(rgb[2]), Number(rgb[3]), alpha]
  }
  return undefined
}

const linear = (channel: number): number => {
  const value = channel / 255
  return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
}

/**
 * Picks the text color that stays readable on a background.
 * Returns `TextColors.primary` (the default text color) when the background is close to white,
 * otherwise `TextColors.inverse` (white). Accepts hex (`#rgb`, `#rgba`, `#rrggbb`, `#rrggbbaa`),
 * `rgb()`/`rgba()` and `transparent`. A translucent background is read over white; a color that
 * cannot be parsed falls back to `TextColors.primary`.
 * @param background {string} Background color
 */
export function getTextColorFromBackground(
  background: string
): TextColors.primary | TextColors.inverse {
  const parsed = parseColor(background)
  if (!parsed) return TextColors.primary

  const [red, green, blue, alpha] = parsed
  const overWhite = (channel: number): number =>
    channel * alpha + 255 * (1 - alpha)
  const luminance =
    0.2126 * linear(overWhite(red)) +
    0.7152 * linear(overWhite(green)) +
    0.0722 * linear(overWhite(blue))

  return luminance > LIGHT_BACKGROUND_LUMINANCE
    ? TextColors.primary
    : TextColors.inverse
}
