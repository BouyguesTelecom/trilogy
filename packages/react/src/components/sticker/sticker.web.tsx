import {
  forwardRef,
  type CSSProperties,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { theme } from "@/constants/theme"
import { clsx } from "@/utils/clsx"
import { getTextColorFromBackground } from "@/utils/getTextColorFromBackground"

import { useHashClass } from "@/hooks/useHashClass.web"

import type { StickerProps } from "./sticker.types"
import { getStickerBackgroundKey } from "./stickerColor"

/** Sticker Component.
 * @param children {ReactNode} Short content: text, optionally with an icon; never wraps
 * @param size {StickerSize} Fixed size: `default` (32px high) or `small` (24px high); defaults to `default`
 * @param background {BackgroundColors} Semantic background color; defaults to `secondary`; the text is the default color on a light background, white otherwise
 * @param id {string} Element identifier
 * @param testId {string} Test identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const Sticker: ForwardRefExoticComponent<
  PropsWithChildren<StickerProps> & RefAttributes<HTMLSpanElement>
> = forwardRef<HTMLSpanElement, PropsWithChildren<StickerProps>>(
  (
    {
      children,
      size = "default",
      background = "secondary",
      id,
      testId,
      className,
      style,
    },
    ref
  ) => {
    // Web has no JS theme mode, so the text color is computed from the light theme colors.
    const textColor = getTextColorFromBackground(
      theme.colors.light[getStickerBackgroundKey(background)]
    )
    const classes = useHashClass(
      clsx(
        "sticker",
        `sticker-${size}`,
        background === "background" ? "bg" : `bg-${background}`,
        `text-${textColor}`,
        className
      )
    )
    return (
      <span
        ref={ref}
        id={id}
        data-testid={testId}
        className={classes}
        style={style as CSSProperties}
      >
        {children}
      </span>
    )
  }
)
Sticker.displayName = "Sticker"
